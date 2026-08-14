import { NextResponse } from "next/server";
import { errorResponse, successResponse, type ApiResponse } from "@/lib/api-response";
import { gateService } from "@/lib/services/gate-service";
import type { Gate } from "@/lib/types";

export async function GET(): Promise<NextResponse<ApiResponse<Gate[]>>> {
  try { return NextResponse.json(successResponse(await gateService.getAll())); }
  catch { return NextResponse.json(errorResponse("GATES_UNAVAILABLE", "Unable to retrieve gates."), { status: 500 }); }
}
