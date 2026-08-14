import { NextResponse } from "next/server";
import { errorResponse, successResponse, type ApiResponse } from "@/lib/api-response";
import { statsService } from "@/lib/services/stats-service";
import type { AirportStats } from "@/lib/types";

export async function GET(): Promise<NextResponse<ApiResponse<AirportStats>>> {
  try { return NextResponse.json(successResponse(await statsService.get())); }
  catch { return NextResponse.json(errorResponse("STATS_UNAVAILABLE", "Unable to retrieve airport statistics."), { status: 500 }); }
}
