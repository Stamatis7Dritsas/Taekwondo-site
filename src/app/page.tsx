"use client";

import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-50">
      {/* Header */}
      <header className="sticky top-0 z-20 border-b border-slate-800 bg-slate-950/80 backdrop-blur">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-3">
          <div className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-400">
            Minoites TaeKwonDo
          </div>
          <nav className="hidden gap-6 text-sm text-slate-300 md:flex">
            <a href="#hero" className="hover:text-white">
              Αρχική
            </a>
            <a href="#school" className="hover:text-white">
              Σχολή
            </a>
            <a href="#classes" className="hover:text-white">
              Μαθήματα
            </a>
            <a href="#benefits" className="hover:text-white">
              Οφέλη
            </a>
            <a href="#location" className="hover:text-white">
              Διεύθυνση
            </a>
            <a href="#contact" className="hover:text-white">
              Επικοινωνία
            </a>
          </nav>
          <a
            href="#contact"
            className="rounded-full border border-emerald-400/60 bg-emerald-500/10 px-3 py-1.5 text-xs font-medium text-emerald-300 shadow-sm shadow-emerald-500/30 hover:bg-emerald-500/20"
          >
            Προπόνηση γνωριμίας
          </a>
        </div>
      </header>

      <main>
        {/* Hero */}
        <section
          id="hero"
          className="border-b border-slate-900 bg-gradient-to-b from-slate-950 via-slate-950 to-slate-900/80"
        >
          <div className="mx-auto flex max-w-6xl flex-col gap-10 px-4 py-16 md:flex-row md:items-center md:py-20">
            <div className="flex-1 space-y-4">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-emerald-300">
                TaeKwonDo | Ηράκλειο
              </p>
              <h1 className="text-3xl font-semibold leading-tight text-slate-50 md:text-4xl">
                Δύναμη, Πειθαρχία, Σεβασμός.
              </h1>
              <p className="max-w-xl text-sm text-slate-300">
                Στους Μινωίτες TaeKwonDo αγαπάμε τον αθλητισμό και σεβόμαστε
                τους ανθρώπους. Προσφέρουμε προπόνηση για όλες τις ηλικίες,
                σε ένα ασφαλές και ευχάριστο περιβάλλον, με έμφαση στις αξίες
                και την προσωπική ανάπτυξη.
              </p>
              <div className="flex flex-wrap gap-3 pt-2">
                <a
                  href="#classes"
                  className="rounded-full bg-emerald-500 px-4 py-2 text-xs font-semibold text-slate-950 shadow-lg shadow-emerald-500/40 hover:bg-emerald-400"
                >
                  Δες τα τμήματα
                </a>
                <a
                  href="#contact"
                  className="rounded-full border border-slate-600 px-4 py-2 text-xs font-semibold text-slate-200 hover:border-emerald-400/70 hover:text-emerald-100"
                >
                  Κλείσε προπόνηση γνωριμίας
                </a>
              </div>
              <p className="text-xs text-slate-400">
                Για παιδιά, εφήβους και ενήλικες – όλα τα επίπεδα.
              </p>
            </div>
            <div className="flex-1">
              <div className="relative mx-auto aspect-[4/3] max-w-md overflow-hidden rounded-2xl border border-slate-800/80 bg-slate-900/80 shadow-[0_25px_80px_rgba(15,23,42,0.95)]">
                <div className="absolute inset-0 bg-gradient-to-tr from-emerald-500/20 via-transparent to-sky-500/20" />
                <div className="relative flex h-full items-center justify-center">
                  <div className="space-y-3 px-6 text-center text-sm text-slate-200">
                    <p className="text-xs font-medium uppercase tracking-[0.25em] text-slate-400">
                      Αγαπάμε τον αθλητισμό,
                      <br />
                      σεβόμαστε τους ανθρώπους.
                    </p>
                    <p>
                      Μαθήματα TaeKwonDo για όλες τις ηλικίες σε φιλικό και
                      ασφαλές περιβάλλον, με προπονητές που στηρίζουν κάθε
                      αθλητή.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* School */}
        <section id="school" className="border-b border-slate-900 bg-slate-950">
          <div className="mx-auto max-w-6xl px-4 py-12 md:py-14">
            <h2 className="text-xl font-semibold text-slate-50">
              Η σχολή Minoites TaeKwonDo
            </h2>
            <div className="mt-3 max-w-3xl space-y-3 text-sm text-slate-300">
              <p>
                Το TaeKwonDo είναι μία από τις πιο δημοφιλείς πολεμικές τέχνες
                παγκοσμίως. Στους Μινωίτες TaeKwonDo βοηθάμε παιδιά και
                ενήλικες να βελτιώσουν τη φυσική τους κατάσταση, την
                ευελιξία και την αυτοπεποίθησή τους.
              </p>
              <p>
                Διδάσκουμε αξίες όπως ο σεβασμός, η αυτοπειθαρχία και η
                αφοσίωση, σε ένα περιβάλλον που προάγει την αλληλεγγύη και
                την ανάπτυξη – τόσο σωματικά όσο και ψυχικά.
              </p>
            </div>
          </div>
        </section>

        {/* Classes */}
        <section
          id="classes"
          className="border-b border-slate-900 bg-slate-950/95"
        >
          <div className="mx-auto max-w-6xl px-4 py-12 md:py-14">
            <h2 className="text-xl font-semibold text-slate-50">
              Μαθήματα TaeKwonDo για όλες τις ηλικίες
            </h2>
            <p className="mt-2 text-sm text-slate-300">
              Εξειδικευμένα τμήματα ανά ηλικία και επίπεδο.
            </p>
            <div className="mt-5 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  title: "Baby Τμήμα (4–6)",
                  desc: "Παιχνιώδη εισαγωγή στο TaeKwonDo, με έμφαση στην κίνηση και τη χαρά.",
                },
                {
                  title: "Παιδικό Τμήμα (6–12)",
                  desc: "Ανάπτυξη τεχνικής, πειθαρχίας και συνεργασίας μέσα από την προπόνηση.",
                },
                {
                  title: "Αγωνιστικό & Προαγωνιστικό (12+)",
                  desc: "Προετοιμασία για αγώνες με στόχους, πρόγραμμα και υποστήριξη.",
                },
                {
                  title: "Αυτοάμυνα Ενηλίκων",
                  desc: "Πρακτικές τεχνικές αυτοάμυνας και βελτίωση φυσικής κατάστασης.",
                },
                {
                  title: "Poomsae",
                  desc: "Εξειδικευμένη προπόνηση στα Poomsae για αθλητές όλων των επιπέδων.",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="rounded-2xl border border-slate-800/80 bg-slate-900/80 p-4 shadow-[0_18px_45px_rgba(15,23,42,0.8)]"
                >
                  <h3 className="text-sm font-semibold text-slate-50">
                    {item.title}
                  </h3>
                  <p className="mt-1 text-xs text-slate-300">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section
          id="benefits"
          className="border-b border-slate-900 bg-gradient-to-b from-slate-950 via-slate-950 to-slate-900"
        >
          <div className="mx-auto max-w-6xl px-4 py-12 md:py-14">
            <h2 className="text-xl font-semibold text-slate-50">
              Οφέλη του TaeKwonDo
            </h2>
            <div className="mt-5 grid gap-4 md:grid-cols-2">
              <div className="rounded-2xl border border-emerald-500/30 bg-emerald-500/5 p-4">
                <h3 className="text-sm font-semibold text-emerald-200">
                  Σώμα &amp; φυσική κατάσταση
                </h3>
                <p className="mt-1 text-xs text-emerald-100/90">
                  Βελτίωση δύναμης, αντοχής και ευελιξίας μέσα από συστηματική
                  προπόνηση.
                </p>
              </div>
              <div className="rounded-2xl border border-sky-500/30 bg-sky-500/5 p-4">
                <h3 className="text-sm font-semibold text-sky-200">
                  Νους &amp; συγκέντρωση
                </h3>
                <p className="mt-1 text-xs text-sky-100/90">
                  Ανάπτυξη πειθαρχίας, αυτοελέγχου και πνευματικής διαύγειας.
                </p>
              </div>
              <div className="rounded-2xl border border-fuchsia-500/30 bg-fuchsia-500/5 p-4">
                <h3 className="text-sm font-semibold text-fuchsia-200">
                  Αυτοπεποίθηση &amp; αυτοάμυνα
                </h3>
                <p className="mt-1 text-xs text-fuchsia-100/90">
                  Πρακτικές δεξιότητες αυτοάμυνας και ενίσχυση αυτοπεποίθησης
                  στην καθημερινότητα.
                </p>
              </div>
              <div className="rounded-2xl border border-amber-500/30 bg-amber-500/5 p-4">
                <h3 className="text-sm font-semibold text-amber-200">
                  Κοινότητα &amp; ομαδικό πνεύμα
                </h3>
                <p className="mt-1 text-xs text-amber-100/90">
                  Ζεστό περιβάλλον με προπονητές και αθλητές που στηρίζουν ο
                  ένας τον άλλον.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Location */}
        <section id="location" className="border-b border-slate-900 bg-slate-950">
          <div className="mx-auto max-w-6xl px-4 py-12 md:py-14">
            <h2 className="text-xl font-semibold text-slate-50">
              Πού θα μας βρείτε
            </h2>
            <div className="mt-3 grid gap-6 md:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)]">
              <div className="space-y-2 text-sm text-slate-300">
                <p>Διεύθυνση: Οθωνος Γιαννουλη 7, Ηράκλειο Κρήτης</p>
                <p>
                  Τηλέφωνο:{" "}
                  <a
                    href="tel:6934938101"
                    className="font-medium text-emerald-300 hover:text-emerald-200"
                  >
                    693 493 8101
                  </a>
                </p>
                <p>
                  Μπορείς να ανοίξεις τον χάρτη στο κινητό ή στον υπολογιστή σου
                  και να δεις οδηγίες πρόσβασης:
                </p>
                <a
                  href="https://www.google.com/maps"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 rounded-full border border-slate-700 px-3 py-1.5 text-xs font-medium text-slate-100 hover:border-emerald-400/70 hover:text-emerald-100"
                >
                  Δες στο χάρτη
                </a>
              </div>
              <div className="h-44 overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/80" />
            </div>
          </div>
        </section>

        {/* Contact */}
        <section
          id="contact"
          className="border-b border-slate-900 bg-slate-950/95"
        >
          <div className="mx-auto max-w-6xl px-4 py-12 md:py-14">
            <h2 className="text-xl font-semibold text-slate-50">
              Επικοινωνία
            </h2>
            <p className="mt-2 max-w-xl text-sm text-slate-300">
              Συμπλήρωσε τη φόρμα ή κάλεσέ μας για προπόνηση γνωριμίας,
              πληροφορίες για τμήματα και τιμές.
            </p>
            <div className="mt-5 max-w-md rounded-2xl border border-slate-800 bg-slate-900/90 p-4 shadow-[0_18px_55px_rgba(15,23,42,0.9)]">
              <form
                className="space-y-3"
                onSubmit={(e) => {
                  e.preventDefault();
                  alert(
                    "Η φόρμα είναι δοκιμαστική σε αυτή τη φάση. Αργότερα θα τη συνδέσουμε με πραγματική αποστολή μηνύματος."
                  );
                }}
              >
                <div className="space-y-1 text-xs">
                  <label
                    htmlFor="name"
                    className="block text-slate-300/90"
                  >
                    Όνομα
                  </label>
                  <input
                    id="name"
                    type="text"
                    required
                    className="w-full rounded-full border border-slate-700 bg-slate-950/60 px-3 py-2 text-xs text-slate-100 outline-none ring-0 placeholder:text-slate-500 focus:border-emerald-400 focus:ring-1 focus:ring-emerald-500/60"
                    placeholder="Το όνομά σου"
                  />
                </div>
                <div className="space-y-1 text-xs">
                  <label
                    htmlFor="email"
                    className="block text-slate-300/90"
                  >
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    className="w-full rounded-full border border-slate-700 bg-slate-950/60 px-3 py-2 text-xs text-slate-100 outline-none ring-0 placeholder:text-slate-500 focus:border-emerald-400 focus:ring-1 focus:ring-emerald-500/60"
                    placeholder="you@example.com"
                  />
                </div>
                <div className="space-y-1 text-xs">
                  <label
                    htmlFor="message"
                    className="block text-slate-300/90"
                  >
                    Μήνυμα
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    required
                    className="w-full rounded-2xl border border-slate-700 bg-slate-950/60 px-3 py-2 text-xs text-slate-100 outline-none ring-0 placeholder:text-slate-500 focus:border-emerald-400 focus:ring-1 focus:ring-emerald-500/60"
                    placeholder="Γράψε μας λίγα λόγια για το τι σε ενδιαφέρει…"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full rounded-full bg-emerald-500 px-4 py-2 text-xs font-semibold text-slate-950 shadow-lg shadow-emerald-500/40 hover:bg-emerald-400"
                >
                  Στείλε μήνυμα
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-slate-900 bg-slate-950/95">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 text-[11px] text-slate-500">
          <span>© {new Date().getFullYear()} Minoites TaeKwonDo</span>
          <span>Built with Next.js &amp; Tailwind CSS</span>
        </div>
      </footer>
    </div>
  );
}