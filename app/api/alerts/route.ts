import { NextResponse } from "next/server";
import { alertService } from "@/lib/services/alert-service";
import { errorResponse, successResponse, type ApiResponse } from "@/lib/api-response";
import type { Alert } from "@/lib/types";

export async function GET(): Promise<NextResponse<ApiResponse<Alert[]>>> {
  try { return NextResponse.json(successResponse(await alertService.getAll())); }
  catch { return NextResponse.json(errorResponse("ALERTS_UNAVAILABLE", "Unable to retrieve alerts."), { status: 500 }); }
}
