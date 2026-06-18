import { NextRequest, NextResponse } from "next/server";
import {
  getParticipant,
  saveResponse,
  completeParticipant,
} from "@/lib/db";
import { getQuestionById, TOTAL_QUESTIONS } from "@/lib/questions";

export async function POST(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const participantId = parseInt(id, 10);
    const participant = getParticipant(participantId);

    if (!participant) {
      return NextResponse.json(
        { error: "Participant not found." },
        { status: 404 }
      );
    }

    if (participant.status === "completed") {
      return NextResponse.json(
        { error: "Assessment already completed." },
        { status: 400 }
      );
    }

    const body = await request.json();
    const { questionId, answer, complete } = body;

    if (complete) {
      completeParticipant(participantId);
      return NextResponse.json({ success: true, completed: true });
    }

    if (!questionId || answer === undefined || answer === "") {
      return NextResponse.json(
        { error: "Question ID and answer are required." },
        { status: 400 }
      );
    }

    const question = getQuestionById(questionId);
    if (!question) {
      return NextResponse.json(
        { error: "Invalid question." },
        { status: 400 }
      );
    }

    saveResponse(participantId, questionId, String(answer));

    const isLast = questionId === TOTAL_QUESTIONS;
    if (isLast) {
      completeParticipant(participantId);
      return NextResponse.json({ success: true, completed: true });
    }

    return NextResponse.json({ success: true, completed: false });
  } catch {
    return NextResponse.json(
      { error: "Failed to save response." },
      { status: 500 }
    );
  }
}
