import React from "react";
import { Ticket } from "lucide-react";

function Tickets() {
  return (
    <section className="w-full text-center py-8 space-y-3">
      <h2 className="text-xl sm:text-2xl md:text-4xl font-bold">
        Get Your Tickets
      </h2>

      <p className="text-sm sm:text-base md:text-lg max-w-[80%] md:max-w-[60%] mx-auto">
        Secure your spot at DevFest Maiduguri 2025 and be part of the biggest
        tech celebration in the city. Limited seats available.
      </p>

      <div className="pt-8 flex justify-center">
        <div className="relative inline-block rounded-full bg-gradient-to-r from-[#428EFF] to-[#E74436] p-[2px]">
          <button className="flex items-center gap-2 px-6 py-2 bg-[#F9AB00] rounded-full font-semibold">
            <Ticket size={18} />
            Get your free tickets
          </button>
        </div>
      </div>
    </section>
  );
}

export default Tickets;
