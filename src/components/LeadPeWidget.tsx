import { MessageCircle, Phone } from "lucide-react";

const WHATSAPP_URL = "https://wa.me/917562043622?text=Hi%20K.k%20store%2C%20I'm%20interested%20in%20your%20services.%20Please%20get%20in%20touch.";

export const LeadPeWidget = () => {
  return (
    <div id="leadpe-widget" className="mx-auto w-full max-w-[340px] text-center font-sans">
      <div className="rounded-2xl border-2 border-[#00C853] bg-[#0D0D0D] p-6">
        <p className="mb-1 text-[11px] font-bold tracking-[0.2em] text-[#00C853]">LEADPE</p>
        <p className="mb-1.5 text-[19px] font-extrabold text-white">Get In Touch</p>
        <p className="mb-4 text-[13px] text-[#888]">One tap. We respond instantly.</p>
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 rounded-xl bg-[#25D366] p-4 text-[17px] font-extrabold text-white no-underline transition-smooth hover:opacity-90"
        >
          <MessageCircle className="h-5 w-5" /> WhatsApp Now →
        </a>
        <p className="mt-3 text-[10px] text-[#444]">
          Website Bhi. Customer Bhi. —{" "}
          <a href="https://leadpe.online" className="text-[#00C853] no-underline">LeadPe</a>
        </p>
      </div>
    </div>
  );
};

export const FloatingWhatsApp = () => (
  <a
    href={WHATSAPP_URL}
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Chat on WhatsApp"
    className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-whatsapp text-whatsapp-foreground shadow-glow transition-smooth hover:scale-110"
  >
    <Phone className="h-7 w-7" />
  </a>
);
