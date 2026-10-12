import { Bug, CircuitBoard, Cpu, Lock, Search, Shield, Smartphone, Globe } from "lucide-react";

const CATEGORIES = [
  { name: "Web", icon: Globe, description: "SQL injection, auth bypasses, SSRF, SSTI and framework-specific bugs." },
  { name: "Pwn", icon: Bug, description: "Memory corruption from stack to heap, ROP chains and shellcoding." },
  { name: "Reverse", icon: Cpu, description: "Static and dynamic analysis of binaries, custom VMs and obfuscated code." },
  { name: "Crypto", icon: Lock, description: "Classical ciphers, RSA, AES, elliptic curves and lattice-based attacks." },
  { name: "Forensics", icon: Search, description: "Network captures, memory dumps, disk images and steganography." },
  { name: "OSINT & Misc", icon: Shield, description: "Open-source intelligence, geolocation and a mix of miscellaneous challenges." },
  { name: "Mobile", icon: Smartphone, description: "Android and iOS applications, Frida hooking and mobile-specific bugs." },
  { name: "Hardware", icon: CircuitBoard, description: "Firmware analysis, embedded devices, UART and JTAG debugging." },
];

const CategoryCell = ({ cat }: { cat: (typeof CATEGORIES)[number] }) => (
  <div className="group border-t border-border pt-4">
    <div className="flex items-center justify-between gap-3">
      <h3 className="font-display text-xl md:text-2xl font-semibold tracking-tight transition-colors duration-300 group-hover:text-primary">
        {cat.name}
      </h3>
      <cat.icon className="h-5 w-5 shrink-0 text-muted-foreground/50 transition-all duration-300 group-hover:text-primary group-hover:-translate-y-0.5" />
    </div>
    <div className="grid grid-rows-[0fr] transition-[grid-template-rows] duration-500 ease-swift group-hover:grid-rows-[1fr]">
      <div className="overflow-hidden">
        <p className="pt-2 pr-2 text-sm leading-relaxed text-muted-foreground">{cat.description}</p>
      </div>
    </div>
  </div>
);

// Challenge categories of the qualifier, shown on the home page under "Road to the finals".
const CategoriesSection = () => (
  <section id="categories" className="section-tight">
    <div className="border-t border-border pt-5">
      <h2 className="font-display text-xl md:text-2xl font-semibold tracking-tight">Categories</h2>
      <div className="mt-6 grid gap-x-10 gap-y-7 sm:grid-cols-2 lg:grid-cols-4">
        {CATEGORIES.map((cat) => (
          <CategoryCell key={cat.name} cat={cat} />
        ))}
      </div>
    </div>
  </section>
);

export default CategoriesSection;
