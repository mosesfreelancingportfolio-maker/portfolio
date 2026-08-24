"use client";

import * as React from "react";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2, Send } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  budgetRanges,
  contactFormSchema,
  projectTypes,
  type ContactFormData,
} from "@/lib/validations/contact";
import { submitContact, type ContactState } from "@/app/contact/actions";

const initialState: ContactState = { status: "idle" };

function FieldError({ message, id }: { message?: string; id?: string }) {
  if (!message) return null;
  return (
    <p role="alert" id={id} className="mt-1.5 text-sm text-destructive">
      {message}
    </p>
  );
}

export function ContactForm() {
  const [state, setState] = React.useState<ContactState>(initialState);
  const [pending, startTransition] = React.useTransition();

  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      company: "",
      projectDescription: "",
      website: "",
    },
  });

  const onSubmit = (values: ContactFormData) => {
    setState(initialState);
    startTransition(async () => {
      try {
        const formData = new FormData();
        Object.entries(values).forEach(([key, value]) => {
          formData.append(key, value ?? "");
        });
        const result = await submitContact(initialState, formData);
        setState(result);
        if (result.status === "success") {
          reset();
          // Reset to initial state after showing success message
          setTimeout(() => setState(initialState), 5000);
        } else if (result.status === "error") {
          // Reset error state after showing error message
          setTimeout(() => setState(initialState), 5000);
        }
      } catch (error) {
        console.error("Form submission error:", error);
        setState({
          status: "error",
          message: "An unexpected error occurred. Please try again or contact me directly.",
        });
        // Reset error state after showing error message
        setTimeout(() => setState(initialState), 5000);
      }
    });
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-8"
      noValidate
      aria-label="Contact form"
    >
      {/* Honeypot — visually hidden, ignored by humans */}
      <div aria-hidden="true" className="absolute -left-[9999px] h-0 w-0 overflow-hidden">
        <label htmlFor="website">Leave this field empty</label>
        <input
          id="website"
          tabIndex={-1}
          autoComplete="off"
          {...register("website")}
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="name" className="sr-only">Name</Label>
        <Input
          id="name"
          placeholder="Your Name"
          autoComplete="name"
          aria-invalid={!!errors.name}
          aria-describedby={errors.name ? "name-error" : undefined}
          className="border-0 border-b border-border/50 bg-transparent px-0 py-4 font-sans text-base text-foreground placeholder-muted-foreground/50 focus:ring-0 focus:border-foreground"
          {...register("name")}
        />
        <FieldError message={errors.name?.message} id="name-error" />
      </div>

      <div className="space-y-2">
        <Label htmlFor="email" className="sr-only">Email</Label>
        <Input
          id="email"
          type="email"
          placeholder="Your Email"
          autoComplete="email"
          aria-invalid={!!errors.email}
          aria-describedby={errors.email ? "email-error" : undefined}
          className="border-0 border-b border-border/50 bg-transparent px-0 py-4 font-sans text-base text-foreground placeholder-muted-foreground/50 focus:ring-0 focus:border-foreground"
          {...register("email")}
        />
        <FieldError message={errors.email?.message} id="email-error" />
      </div>

      <div className="space-y-2">
        <Label htmlFor="company" className="sr-only">Company</Label>
        <Input
          id="company"
          placeholder="Company (optional)"
          autoComplete="organization"
          aria-describedby="company-optional"
          className="border-0 border-b border-border/50 bg-transparent px-0 py-4 font-sans text-base text-foreground placeholder-muted-foreground/50 focus:ring-0 focus:border-foreground"
          {...register("company")}
        />
        <span id="company-optional" className="sr-only">Optional field</span>
        <FieldError message={errors.company?.message} />
      </div>

      <div className="space-y-2">
        <Label htmlFor="projectType" className="sr-only">Project type</Label>
        <Controller
          control={control}
          name="projectType"
          render={({ field }) => (
            <Select
              value={field.value}
              onValueChange={field.onChange}
            >
              <SelectTrigger 
                id="projectType" 
                className="w-full border-0 border-b border-border/50 bg-transparent px-0 py-4 font-sans text-base text-foreground placeholder-muted-foreground/50 focus:ring-0 focus:border-foreground"
                aria-invalid={!!errors.projectType}
                aria-describedby={errors.projectType ? "projectType-error" : undefined}
              >
                <SelectValue placeholder="Project type" />
              </SelectTrigger>
              <SelectContent>
                {projectTypes.map((type) => (
                  <SelectItem key={type} value={type}>
                    {type}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          )}
        />
        <FieldError message={errors.projectType?.message} id="projectType-error" />
      </div>

      <div className="space-y-2">
        <Label htmlFor="budget" className="sr-only">Budget range</Label>
        <Controller
          control={control}
          name="budget"
          render={({ field }) => (
            <Select
              value={field.value}
              onValueChange={field.onChange}
            >
              <SelectTrigger 
                id="budget" 
                className="w-full border-0 border-b border-border/50 bg-transparent px-0 py-4 font-sans text-base text-foreground placeholder-muted-foreground/50 focus:ring-0 focus:border-foreground"
                aria-invalid={!!errors.budget}
                aria-describedby={errors.budget ? "budget-error" : undefined}
              >
                <SelectValue placeholder="Budget range" />
              </SelectTrigger>
              <SelectContent>
                {budgetRanges.map((range) => (
                  <SelectItem key={range} value={range}>
                    {range}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          )}
        />
        <FieldError message={errors.budget?.message} id="budget-error" />
      </div>

      <div className="space-y-2">
        <Label htmlFor="projectDescription" className="sr-only">Project description</Label>
        <Textarea
          id="projectDescription"
          rows={1}
          placeholder="Tell me about your project, goals, and timeline..."
          aria-invalid={!!errors.projectDescription}
          aria-describedby={errors.projectDescription ? "projectDescription-error" : undefined}
          className="border-0 border-b border-border/50 bg-transparent px-0 py-4 font-sans text-base text-foreground placeholder-muted-foreground/50 focus:ring-0 focus:border-foreground resize-none"
          {...register("projectDescription")}
          onInput={(event) => {
            const textarea = event.currentTarget;
            textarea.style.height = "0px";
            textarea.style.height = `${textarea.scrollHeight}px`;
          }}
        />
        <FieldError message={errors.projectDescription?.message} id="projectDescription-error" />
      </div>

      <div>
        {state.status === "error" && (
          <div
            role="alert"
            className="mb-4 border border-error px-4 py-3 text-sm text-error"
          >
            {state.message}
          </div>
        )}
        {state.status === "success" && (
          <div
            role="status"
            className="mb-4 border border-success px-4 py-3 text-sm text-success"
          >
            {state.message}
          </div>
        )}

        <Button
          type="submit"
          size="lg"
          className="w-full"
          disabled={pending}
          aria-label={pending ? "Sending message" : "Send message"}
        >
          {pending ? (
            <>
              <Loader2 className="animate-spin" aria-hidden="true" />
              Sending...
            </>
          ) : (
            <>
              <Send aria-hidden="true" />
              Send Message
            </>
          )}
        </Button>
      </div>
    </form>
  );
}
