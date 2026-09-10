"use client";
import Image from "next/image";
import { useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

export default function BlogContent({
  title,
  titleB,
  titleE,
  image,
  descriptionB,
  descriptionE,
}: {
  title?: string;
  titleB?: string;
  titleE?: string;
  image?: string;
  descriptionB?: string;
  descriptionE?: string;
}) {
  const [language, setLanguage] = useState<"bangla" | "english">("english");

  return (
    <>
      {/* 1. TOP ACTION BAR WITH CLEARLY VISIBLE LANGUAGE SWITCHER */}
      <div className="flex items-center justify-between gap-4 mb-4">
        {/* TRANSLATE / LANGUAGE BUTTON */}
        <div className="inline-flex items-center bg-slate-900 border border-white/20 rounded-full p-0.75 shadow-xl">
          <button
            type="button"
            onClick={() => setLanguage("english")}
            className={`px-4 py-1.5 text-xs sm:text-sm font-semibold rounded-full transition-all cursor-pointer active:scale-95 ${
              language === "english"
                ? "bg-primary text-white font-bold shadow-lg"
                : "text-slate-400 hover:text-white"
            }`}
          >
            English
          </button>
          <button
            type="button"
            onClick={() => setLanguage("bangla")}
            className={`px-4 py-1.5 text-xs sm:text-sm font-semibold rounded-full transition-all cursor-pointer active:scale-95 ${
              language === "bangla"
                ? "bg-primary text-white font-bold shadow-lg"
                : "text-slate-400 hover:text-white"
            }`}
          >
            বাংলা
          </button>
        </div>
      </div>

      {/* 2. MAIN ARTICLE TITLE */}
      <h1 className="text-2xl md:text-3xl lg:text-4xl font-black text-white leading-[1.18] tracking-tight mb-6 pb-5 border-b border-white/10">
        {language === "bangla" ? titleB || title : titleE || title}
      </h1>

      {/* HERO FEATURED IMAGE */}
      {image && (
        <div className="relative w-full h-64 sm:h-96 md:h-[460px] overflow-hidden border border-white/10 shadow-2xl bg-slate-950 mb-12">
          <Image
            src={image}
            alt={title || "Blog cover image"}
            fill
            priority
            className="object-cover object-top filter brightness-105"
          />
          {/* Ambient vignette */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-transparent to-transparent opacity-60" />
        </div>
      )}

      {/* MAIN ARTICLE CONTENT BODY */}
      <div className={"text-base sm:text-lg leading-relaxed space-y-6"}>
        {(language === "bangla" ? descriptionB : descriptionE) ? (
          <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            components={{
              h1: ({ ...props }) => (
                <h1
                  className="text-2xl sm:text-3xl font-extrabold text-white mt-8 mb-4 border-b border-white/10 pb-2"
                  {...props}
                />
              ),
              h2: ({ ...props }) => (
                <h2
                  className="text-xl sm:text-2xl font-bold text-white mt-8 mb-3"
                  {...props}
                />
              ),
              h3: ({ ...props }) => (
                <h3
                  className="text-lg sm:text-xl font-semibold text-white  mt-6 mb-2"
                  {...props}
                />
              ),
              h4: ({ ...props }) => (
                <h4
                  className="text-base sm:text-lg font-semibold text-slate-100 mt-4 mb-2"
                  {...props}
                />
              ),

              ul: ({ ...props }) => (
                <ul
                  className="list-disc list-inside space-y-2 mb-5 pl-2 text-slate-200"
                  {...props}
                />
              ),
              ol: ({ ...props }) => (
                <ol
                  className="list-decimal list-inside space-y-2 mb-5 pl-2 text-slate-200"
                  {...props}
                />
              ),
              li: ({ ...props }) => (
                <li className="text-slate-200 leading-relaxed" {...props} />
              ),
              blockquote: ({ ...props }) => (
                <blockquote
                  className="border-l-4 border-primary pl-4 py-2 my-5 bg-white/5 rounded-r-lg italic text-slate-300"
                  {...props}
                />
              ),
              hr: ({ ...props }) => (
                <hr className=" border-white/10" {...props} />
              ),
              code: ({ ...props }) => (
                <code
                  className="bg-slate-900 border border-white/10 text-red-400/80 px-1.5 py-0.5 font-mono text-sm rounded-md!"
                  {...props}
                />
              ),
            }}
          >
            {language === "bangla" ? descriptionB : descriptionE}
          </ReactMarkdown>
        ) : (
          <div className="py-12 text-center text-slate-400">
            <p>
              Full article content is currently being prepared for this post.
            </p>
          </div>
        )}
      </div>
    </>
  );
}
