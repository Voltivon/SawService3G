"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { CheckCircle2, AlertTriangle, Send } from "lucide-react";
import { quoteSchema, type QuoteInput, urgencyOptions } from "@/lib/schemas/quote";
import { site } from "@/data/site";
import { Reveal } from "@/components/motion/reveal";
import { cn } from "@/lib/utils";

const urgencyLabels: Record<(typeof urgencyOptions)[number], string> = {
  urgent: "Saw down — urgent",
  this_week: "This week",
  scheduled: "Scheduled / planning",
};

type Status = "idle" | "sending" | "success" | "error";

export function QuoteForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<QuoteInput>({
    resolver: zodResolver(quoteSchema),
    defaultValues: { urgency: "this_week", website: "" },
    mode: "onBlur",
  });

  const [status, setStatus] = useState<Status>("idle");
  const [serverMsg, setServerMsg] = useState<string | null>(null);

  const onSubmit = async (data: QuoteInput) => {
    setStatus("sending");
    setServerMsg(null);
    try {
      const res = await fetch("/api/quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const body = (await res.json()) as { ok?: boolean; error?: string };
      if (!res.ok || !body.ok) {
        throw new Error(body.error ?? "Something went wrong");
      }
      setStatus("success");
      reset();
    } catch (err) {
      setStatus("error");
      setServerMsg(err instanceof Error ? err.message : "Submission failed");
    }
  };

  return (
    <section
      id="quote"
      aria-labelledby="quote-heading"
      className="relative border-t border-white/[0.06] bg-ink-950/60 py-24 md:py-32"
    >
      <div className="container-x grid gap-12 lg:grid-cols-2">
        <Reveal>
          <p className="eyebrow">Get a quote</p>
          <h2
            id="quote-heading"
            className="h-display mt-4 text-4xl text-white sm:text-5xl md:text-6xl"
          >
            Tell us about the saw.
            <br />
            <span className="text-spark-500">We&rsquo;ll take it from there.</span>
          </h2>
          <p className="mt-5 max-w-md text-lg text-ink-300">
            Fill out the form and we&rsquo;ll respond fast with next steps.
            Prefer to talk?{" "}
            <a
              href={site.phone.href}
              className="font-semibold text-white underline decoration-spark-500 underline-offset-4 hover:text-spark-300"
            >
              Call {site.phone.display}
            </a>
            .
          </p>

          <div className="mt-10 space-y-4 rounded-2xl border border-white/[0.06] bg-ink-900/40 p-6">
            <Bullet
              eyebrow="What we’ll need to know"
              text="Brand & model · the symptom · location · how urgent it is."
            />
            <Bullet
              eyebrow="What happens next"
              text="We confirm details by phone, schedule a visit, and quote on-site before any work."
            />
            <Bullet
              eyebrow="Billing"
              text="Invoiced after the work is verified done — no surprises."
            />
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <form
            onSubmit={handleSubmit(onSubmit)}
            noValidate
            className="rounded-2xl border border-white/[0.06] bg-ink-900/60 p-6 md:p-8"
          >
            {/* Honeypot — visually hidden, off-tab, off-screen */}
            <div aria-hidden className="absolute -z-10 h-0 w-0 overflow-hidden opacity-0">
              <label htmlFor="website">Leave this field empty</label>
              <input
                id="website"
                type="text"
                tabIndex={-1}
                autoComplete="off"
                {...register("website")}
              />
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              <Field
                label="Your name"
                error={errors.name?.message}
                {...register("name")}
                autoComplete="name"
              />
              <Field
                label="Company"
                error={errors.company?.message}
                {...register("company")}
                autoComplete="organization"
              />
              <Field
                label="Email"
                type="email"
                error={errors.email?.message}
                {...register("email")}
                autoComplete="email"
              />
              <Field
                label="Phone"
                type="tel"
                error={errors.phone?.message}
                {...register("phone")}
                autoComplete="tel"
              />
              <Field
                label="Saw brand & model"
                error={errors.saw?.message}
                placeholder="e.g. Marvel 81A 9/A"
                className="sm:col-span-2"
                {...register("saw")}
              />
              <Field
                label="Facility location"
                error={errors.location?.message}
                placeholder="City, state"
                className="sm:col-span-2"
                {...register("location")}
              />
            </div>

            <fieldset className="mt-5">
              <legend className="text-sm font-medium text-ink-100">
                How urgent is it?
              </legend>
              <div className="mt-2 grid gap-2 sm:grid-cols-3">
                {urgencyOptions.map((u) => (
                  <label
                    key={u}
                    className="flex cursor-pointer items-center gap-2 rounded-lg border border-white/[0.08] bg-ink-950/60 px-3 py-2.5 text-sm text-ink-200 transition has-[:checked]:border-spark-500/60 has-[:checked]:bg-spark-500/10 has-[:checked]:text-white"
                  >
                    <input
                      type="radio"
                      value={u}
                      {...register("urgency")}
                      className="h-4 w-4 accent-spark-500"
                    />
                    {urgencyLabels[u]}
                  </label>
                ))}
              </div>
            </fieldset>

            <div className="mt-5">
              <label
                htmlFor="message"
                className="block text-sm font-medium text-ink-100"
              >
                Describe the issue
              </label>
              <textarea
                id="message"
                rows={5}
                aria-invalid={!!errors.message}
                aria-describedby={errors.message ? "message-err" : undefined}
                className={cn(
                  "mt-1.5 block w-full rounded-lg border border-white/[0.08] bg-ink-950/60 px-3.5 py-2.5 text-sm text-white placeholder:text-ink-500 focus:border-spark-500/60 focus:outline-none focus:ring-2 focus:ring-spark-500/40",
                  errors.message && "border-ember-500/60",
                )}
                placeholder="What&rsquo;s the saw doing? Any error codes? When did it start?"
                {...register("message")}
              />
              {errors.message && (
                <p id="message-err" className="mt-1.5 text-xs text-ember-500">
                  {errors.message.message}
                </p>
              )}
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="group mt-7 inline-flex w-full items-center justify-center gap-2 rounded-full px-6 py-3.5 text-base font-semibold btn-spark disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {isSubmitting || status === "sending" ? (
                "Sending..."
              ) : (
                <>
                  Send quote request
                  <Send className="h-4 w-4 transition-transform group-hover:translate-x-0.5" aria-hidden />
                </>
              )}
            </button>

            <div role="status" aria-live="polite" className="mt-4 min-h-[1.5rem]">
              {status === "success" && (
                <p className="flex items-center gap-2 text-sm text-spark-300">
                  <CheckCircle2 className="h-4 w-4" aria-hidden />
                  Sent. We&rsquo;ll be in touch fast.
                </p>
              )}
              {status === "error" && (
                <p className="flex items-center gap-2 text-sm text-ember-500">
                  <AlertTriangle className="h-4 w-4" aria-hidden />
                  {serverMsg ?? "Something went wrong. Please call us instead."}
                </p>
              )}
            </div>
          </form>
        </Reveal>
      </div>
    </section>
  );
}

function Bullet({ eyebrow, text }: { eyebrow: string; text: string }) {
  return (
    <div>
      <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-spark-400">
        {eyebrow}
      </p>
      <p className="mt-1 text-sm text-ink-200">{text}</p>
    </div>
  );
}

type FieldProps = React.InputHTMLAttributes<HTMLInputElement> & {
  label: string;
  error?: string;
  ref?: React.Ref<HTMLInputElement>;
};

function Field({ label, error, className, id, ref, ...rest }: FieldProps) {
  const inputId = id ?? rest.name;
  const errId = error ? `${inputId}-err` : undefined;
  return (
    <div className={className}>
      <label
        htmlFor={inputId}
        className="block text-sm font-medium text-ink-100"
      >
        {label}
      </label>
      <input
        id={inputId}
        ref={ref}
        aria-invalid={!!error}
        aria-describedby={errId}
        className={cn(
          "mt-1.5 block w-full rounded-lg border border-white/[0.08] bg-ink-950/60 px-3.5 py-2.5 text-sm text-white placeholder:text-ink-500 focus:border-spark-500/60 focus:outline-none focus:ring-2 focus:ring-spark-500/40",
          error && "border-ember-500/60",
        )}
        {...rest}
      />
      {error && (
        <p id={errId} className="mt-1.5 text-xs text-ember-500">
          {error}
        </p>
      )}
    </div>
  );
}
