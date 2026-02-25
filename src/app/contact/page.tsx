"use client"

import { FormEvent, useMemo, useState } from "react"

type FormState = {
  name: string
  email: string
  phone: string
  subject: string
  message: string
}

const initialState: FormState = {
  name: "",
  email: "",
  phone: "",
  subject: "",
  message: "",
}

const ContactPage = () => {
  const [form, setForm] = useState<FormState>(initialState)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const isValid = useMemo(() => {
    const hasRequired = form.name.trim() && form.email.trim() && form.message.trim()
    const emailOk = /^\S+@\S+\.\S+$/.test(form.email)
    return Boolean(hasRequired && emailOk)
  }, [form])

  const updateField = <K extends keyof FormState>(key: K, value: FormState[K]) => {
    setForm((prev) => ({ ...prev, [key]: value }))
  }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!isValid) return

    setIsSubmitting(true)
    await new Promise((resolve) => setTimeout(resolve, 900))
    setIsSubmitting(false)
    setSubmitted(true)
    setForm(initialState)
  }

  return (
    <main className="relative overflow-hidden bg-fuchsia-50 text-red-600">
      <section className="relative mx-auto flex min-h-[calc(100vh-6rem)] w-full max-w-6xl flex-col gap-10 p-4 md:min-h-[calc(100vh-9rem)] md:justify-center lg:px-20 xl:px-40">
        <div className="space-y-3">
          <p className="inline-block rounded-full border border-red-300 bg-white/80 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em]">
            Contact
          </p>
          <h1 className="text-4xl font-black uppercase leading-tight md:text-6xl">Let us know what you need</h1>
          <p className="max-w-2xl text-sm text-red-500 md:text-base">
            Questions about orders, deliveries, or menu items. Fill out the form and we will get back to you.
          </p>
        </div>

        <div className="grid gap-6 rounded-2xl border border-red-200 bg-white/85 p-4 shadow-xl backdrop-blur md:grid-cols-2 md:p-8">
          <div className="space-y-4">
            <h2 className="text-2xl font-bold uppercase">Direct contact</h2>
            <p className="text-sm text-red-500">Phone: +992170639009</p>
            <p className="text-sm text-red-500">Hours: daily, 10:00 - 23:00</p>
            <p className="text-sm text-red-500">Response time: usually within 15 minutes</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-3">
            <input
              value={form.name}
              onChange={(e) => updateField("name", e.target.value)}
              type="text"
              placeholder="Name *"
              className="w-full rounded-md border border-red-200 bg-white px-3 py-2 text-sm outline-none transition focus:border-red-400"
              required
            />
            <input
              value={form.email}
              onChange={(e) => updateField("email", e.target.value)}
              type="email"
              placeholder="Email *"
              className="w-full rounded-md border border-red-200 bg-white px-3 py-2 text-sm outline-none transition focus:border-red-400"
              required
            />
            <input
              value={form.phone}
              onChange={(e) => updateField("phone", e.target.value)}
              type="tel"
              placeholder="Phone"
              className="w-full rounded-md border border-red-200 bg-white px-3 py-2 text-sm outline-none transition focus:border-red-400"
            />
            <input
              value={form.subject}
              onChange={(e) => updateField("subject", e.target.value)}
              type="text"
              placeholder="Subject"
              className="w-full rounded-md border border-red-200 bg-white px-3 py-2 text-sm outline-none transition focus:border-red-400"
            />
            <textarea
              value={form.message}
              onChange={(e) => updateField("message", e.target.value)}
              placeholder="Message *"
              rows={5}
              className="w-full resize-none rounded-md border border-red-200 bg-white px-3 py-2 text-sm outline-none transition focus:border-red-400"
              required
            />

            <button
              type="submit"
              disabled={!isValid || isSubmitting}
              className="w-full rounded-md bg-red-500 px-4 py-3 text-sm font-bold uppercase tracking-wide text-white transition hover:bg-red-600 disabled:cursor-not-allowed disabled:bg-red-300"
            >
              {isSubmitting ? "Sending..." : "Send message"}
            </button>

            {submitted && (
              <p className="rounded-md border border-green-300 bg-green-50 px-3 py-2 text-sm text-green-700">
                Message sent. We will contact you soon.
              </p>
            )}
          </form>
        </div>
      </section>
    </main>
  )
}

export default ContactPage
