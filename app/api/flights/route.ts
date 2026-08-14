import { NextResponse } from "next/server";
import { errorResponse, successResponse, type ApiResponse } from "@/lib/api-response";
import { flightService } from "@/lib/services/flight-service";
import type { Flight } from "@/lib/types";

export async function GET(): Promise<NextResponse<ApiResponse<Flight[]>>> {
  try {
    return NextResponse.json(successResponse(await flightService.getAll()));
  } catch {
    return NextResponse.json(errorResponse("FLIGHTS_UNAVAILABLE", "Unable to retrieve flights."), { status: 500 });
  }
}
