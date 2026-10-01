import React from 'react';
import { User, Quote } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <section id="about" className="tone-a py-20 t-section border-t t-divider">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center space-y-3 mb-12">
          <div className="inline-flex items-center gap-1.5 rounded-full border t-border-tint t-tint px-3 py-1 text-xs font-semibold t-accent">
            <User className="h-3.5 w-3.5" />
            <span>Introduction</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl font-extrabold t-heading">
            ABOUT ME
          </h2>
        </div>

        {/* Main Content Card */}
        <div className="rounded-3xl border t-divider p-8 sm:p-10 shadow-xl space-y-6 t-text text-base sm:text-lg leading-relaxed font-light t-card">
          <p className="text-xl sm:text-2xl font-heading font-bold t-heading">
            Hi, I’m Shahd 👋
          </p>

          {/* Quote block */}
          <div className="relative rounded-2xl border t-divider t-tint p-6 shadow-md border-l-4 border-l-emerald-500">
            <Quote className="h-5 w-5 t-accent mb-2" />
            <p className="font-semibold t-heading italic text-base sm:text-lg">
              “I never planned every step, but every step led me somewhere new.”
            </p>
          </div>

          <p>
            My journey began with Data Science, and as I worked on different projects, I found myself enjoying something more: taking an idea and figuring out what I could build with it.
          </p>

          <p>
            Whenever I get an app idea, it rarely stays just an idea. I start imagining the screens, the features, what happens next, and how everything connects. One thought leads to another until I can almost see the whole product in my head. That’s what led me to Web Development, then Mobile App Development with Flutter, while also exploring databases and AI along the way.
          </p>

          <p>
            Now, I want to bring that way of thinking into real projects. Whether you’re a startup with an idea that needs to become a website or app, or a business with an existing product or system that needs new features or improvements, I want to help shape it, build it, and make it something people can actually use.
          </p>

          <p>
            I’m still learning and building with every project, and I’m excited to see where the next idea takes me.
          </p>

          <div className="pt-4 border-t t-divider">
            <p className="font-bold t-accent text-base sm:text-lg">
              Have an idea or something you want to improve? I’d love to hear about it.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};
