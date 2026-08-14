import { NextResponse } from "next/server";
import { errorResponse, successResponse, type ApiResponse } from "@/lib/api-response";
import { flightService } from "@/lib/services/flight-service";
import type { Flight } from "@/lib/types";

interface RouteContext { params: Promise<{ id: string }> }

export async function GET(_request: Request, { params }: RouteContext): Promise<NextResponse<ApiResponse<Flight>>> {
  try {
    const flight = await flightService.getById((await params).id);
    if (!flight) return NextResponse.json(errorResponse("FLIGHT_NOT_FOUND", "Flight was not found."), { status: 404 });
    return NextResponse.json(successResponse(flight));
  } catch {
    return NextResponse.json(errorResponse("FLIGHT_UNAVAILABLE", "Unable to retrieve the flight."), { status: 500 });
  }
}
