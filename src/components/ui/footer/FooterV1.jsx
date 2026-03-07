import { useState } from "react";

export function getFooterV1Code(config) {
  return `
<footer style="background:${config.bgColor}; color:${config.textColor}; padding:60px 0;">
  <div style="max-width:1200px;margin:auto;padding:0 20px;">
    
    <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:40px;margin-bottom:40px;">
      
      <div>
        <h2 style="font-weight:800;font-size:22px;margin-bottom:16px;">${config.brandName}</h2>
        <p style="opacity:.8">${config.brandDescription}</p>
      </div>

      <div>
        <h3 style="font-weight:600;margin-bottom:12px;">${config.menu1Title}</h3>
        <ul style="list-style:none;padding:0;">
          <li>${config.menu1Link1}</li>
          <li>${config.menu1Link2}</li>
          <li>${config.menu1Link3}</li>
        </ul>
      </div>

      <div>
        <h3 style="font-weight:600;margin-bottom:12px;">${config.menu2Title}</h3>
        <ul style="list-style:none;padding:0;">
          <li>${config.menu2Link1}</li>
          <li>${config.menu2Link2}</li>
          <li>${config.menu2Link3}</li>
        </ul>
      </div>

      <div>
        <h3 style="font-weight:600;margin-bottom:12px;">${config.newsletterTitle}</h3>
        <p style="opacity:.8;margin-bottom:10px;">${config.newsletterText}</p>
        <input placeholder="Your email" style="padding:10px;border-radius:20px;border:none;width:100%;" />
      </div>

    </div>

    <div style="border-top:1px solid ${config.borderColor};padding-top:20px;font-size:14px;opacity:.7;">
      ${config.copyright}
    </div>

  </div>
</footer>
`;
}

export default function FooterV1({ config }) {
  const [open, setOpen] = useState(null);

  const toggle = (i) => {
    setOpen(open === i ? null : i);
  };

  const menus = [
    {
      title: config.menu1Title,
      links: [config.menu1Link1, config.menu1Link2, config.menu1Link3],
    },
    {
      title: config.menu2Title,
      links: [config.menu2Link1, config.menu2Link2, config.menu2Link3],
    },
  ];

  return (
    <footer
      className="w-full py-16"
      style={{ background: config.bgColor, color: config.textColor }}
    >
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid md:grid-cols-4 gap-10">

          {/* BRAND */}
          <div>
            <h2 className="text-2xl font-extrabold mb-4">
              {config.brandName}
            </h2>

            <p className="opacity-80">
              {config.brandDescription}
            </p>
          </div>

          {/* MENUS */}
          {menus.map((menu, i) => (
            <div key={i}>
              <button
                onClick={() => toggle(i)}
                className="flex justify-between w-full md:block font-semibold mb-3"
              >
                {menu.title}
              </button>

              <ul
                className={`space-y-2 text-sm ${
                  open === i || typeof window !== "undefined" && window.innerWidth > 768
                    ? "block"
                    : "hidden"
                } md:block`}
              >
                {menu.links.map((link, index) => (
                  <li key={index} className="opacity-80 hover:opacity-100 cursor-pointer">
                    {link}
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* NEWSLETTER */}
          <div>
            <h3 className="font-semibold mb-3">
              {config.newsletterTitle}
            </h3>

            <p className="opacity-80 mb-4">
              {config.newsletterText}
            </p>

            <input
              type="email"
              placeholder="Your email"
              className="w-full px-4 py-2 rounded-full text-black"
            />
          </div>

        </div>

        <div
          className="border-t mt-12 pt-6 text-sm opacity-70"
          style={{ borderColor: config.borderColor }}
        >
          {config.copyright}
        </div>

      </div>
    </footer>
  );
}