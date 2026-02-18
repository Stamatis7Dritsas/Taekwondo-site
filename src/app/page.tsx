"use client";

import Image from "next/image";

export default function Home() {
  const year = new Date().getFullYear();

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-slate-950 to-slate-900 text-slate-50">
      {/* HEADER */}
      <header className="sticky top-0 z-30 border-b border-amber-500/20 bg-black/40 backdrop-blur-xl">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-3">
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-tr from-amber-400 to-emerald-400 text-xs font-bold text-slate-950 shadow-lg shadow-amber-500/40">
              MT
            </div>
            <div className="text-[11px] font-semibold uppercase tracking-[0.28em] text-amber-300">
              Minoites TaeKwonDo
            </div>
          </div>

          <nav className="hidden gap-6 text-xs font-medium text-slate-300 md:flex">
            <a href="#hero" className="hover:text-amber-200">
              Αρχική
            </a>
            <a href="#school" className="hover:text-amber-200">
              Σχολή
            </a>
            <a href="#classes" className="hover:text-amber-200">
              Μαθήματα
            </a>
            <a href="#benefits" className="hover:text-amber-200">
              Οφέλη
            </a>
            <a href="#location" className="hover:text-amber-200">
              Διεύθυνση
            </a>
            <a href="#contact" className="hover:text-amber-200">
              Επικοινωνία
            </a>
          </nav>

          <a
            href="#contact"
            className="rounded-full bg-gradient-to-r from-amber-400 via-amber-300 to-emerald-300 px-3 py-1.5 text-[11px] font-semibold text-slate-950 shadow-[0_12px_30px_rgba(250,204,21,0.6)] hover:from-amber-300 hover:to-emerald-200"
          >
            Προπόνηση γνωριμίας
          </a>
        </div>
      </header>

      <main>
        {/* HERO */}
        <section
          id="hero"
          className="relative overflow-hidden border-b border-amber-500/15"
        >
          {/* Light effects */}
          <div className="pointer-events-none absolute inset-0 opacity-50">
            <div className="absolute -left-32 top-0 h-72 w-72 rounded-full bg-amber-500/25 blur-3xl" />
            <div className="absolute right-0 top-40 h-80 w-80 rounded-full bg-emerald-400/20 blur-3xl" />
            <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black/80 to-transparent" />
          </div>

          <div className="relative mx-auto flex max-w-6xl flex-col gap-10 px-4 py-16 md:flex-row md:items-center md:py-24">
            <div className="flex-1 space-y-4">
              <p className="text-[10px] font-semibold uppercase tracking-[0.32em] text-amber-300">
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
              <div className="flex flex-wrap gap-3 pt-1.5">
                <a
                  href="#classes"
                  className="rounded-full bg-gradient-to-r from-amber-400 via-amber-300 to-emerald-300 px-5 py-2 text-xs font-semibold text-slate-950 shadow-[0_18px_45px_rgba(250,204,21,0.5)] hover:from-amber-300 hover:to-emerald-200"
                >
                  Δες τα τμήματα
                </a>
                <a
                  href="#contact"
                  className="rounded-full border border-slate-600/80 bg-black/30 px-5 py-2 text-xs font-semibold text-slate-200 backdrop-blur-md hover:border-amber-300/70 hover:text-amber-100"
                >
                  Κλείσε προπόνηση γνωριμίας
                </a>
              </div>
              <p className="text-[11px] text-slate-400">
                Για παιδιά, εφήβους και ενήλικες – όλα τα επίπεδα.
              </p>
            </div>

            <div className="flex-1">
              <div className="relative mx-auto max-w-md">
                <div className="relative overflow-hidden rounded-3xl border border-amber-500/25 bg-slate-900/60 shadow-[0_28px_80px_rgba(15,23,42,1)] backdrop-blur-lg">
                  {/* Placeholder εικόνα – μπορείς αργότερα να βάλεις κανονική φωτογραφία */}
                  <div className="relative h-64 w-full">
                    <Image
                      src="/placeholder-taekwondo.jpg"
                      alt="Minoites Taekwondo"
                      fill
                      className="object-cover opacity-70"
                      sizes="(max-width: 768px) 100vw, 400px"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
                    <div className="absolute bottom-3 left-3 right-3 rounded-2xl border border-amber-400/25 bg-black/40 px-3 py-2 text-[11px] text-amber-50 backdrop-blur-md">
                      <p className="font-semibold tracking-wide">
                        Αγαπάμε τον αθλητισμό, σεβόμαστε τους ανθρώπους.
                      </p>
                      <p className="mt-0.5 text-[10px] text-amber-100/80">
                        Μαθήματα TaeKwonDo για όλες τις ηλικίες με έμπειρους
                        προπονητές και ζεστό κλίμα.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="mt-3 flex items-center gap-2 text-[11px] text-slate-400">
                  <span className="inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400" />
                  <span>Πιστοποιημένη σχολή TaeKwonDo στο Ηράκλειο Κρήτης</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SCHOOL */}
        <section
          id="school"
          className="border-b border-slate-800/80 bg-black/60 backdrop-blur-md"
        >
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

        {/* CLASSES */}
        <section
          id="classes"
          className="border-b border-slate-800/80 bg-slate-950/95"
        >
          <div className="mx-auto max-w-6xl px-4 py-12 md:py-14">
            <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
              <div>
                <h2 className="text-xl font-semibold text-slate-50">
                  Μαθήματα TaeKwonDo για όλες τις ηλικίες
                </h2>
                <p className="mt-1 text-sm text-slate-300">
                  Εξειδικευμένα τμήματα ανά ηλικία και επίπεδο.
                </p>
              </div>
              <p className="text-[11px] text-slate-400">
                Μπορούμε να σε βοηθήσουμε να διαλέξεις το κατάλληλο τμήμα.
              </p>
            </div>

            <div className="mt-5 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  title: "Baby Τμήμα (4–6)",
                  level: "Για τα πρώτα βήματα",
                  desc: "Παιχνιώδη εισαγωγή στο TaeKwonDo, με έμφαση στην κίνηση, την ισορροπία και την χαρά.",
                },
                {
                  title: "Παιδικό Τμήμα (6–12)",
                  level: "Βάσεις & πειθαρχία",
                  desc: "Ανάπτυξη τεχνικής, πειθαρχίας και συνεργασίας μέσα από δομημένη προπόνηση.",
                },
                {
                  title: "Αγωνιστικό & Προαγωνιστικό (12+)",
                  level: "Για υψηλούς στόχους",
                  desc: "Προετοιμασία για αγώνες με πρόγραμμα, στόχους και συνεχή καθοδήγηση.",
                },
                {
                  title: "Αυτοάμυνα Ενηλίκων",
                  level: "Πρακτικές δεξιότητες",
                  desc: "Προπόνηση με έμφαση στην αυτοάμυνα, τη φυσική κατάσταση και την αποφόρτιση από το στρες.",
                },
                {
                  title: "Poomsae",
                  level: "Τεχνική & ακρίβεια",
                  desc: "Εξειδικευμένη προπόνηση στα Poomsae για αθλητές όλων των επιπέδων.",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="group rounded-2xl border border-slate-700/70 bg-slate-900/60 p-4 shadow-[0_18px_55px_rgba(15,23,42,0.95)] backdrop-blur-md transition-transform duration-150 hover:-translate-y-1 hover:border-amber-400/60"
                >
                  <div className="flex items-center justify-between gap-2">
                    <h3 className="text-sm font-semibold text-slate-50">
                      {item.title}
                    </h3>
                    <span className="rounded-full bg-amber-400/10 px-2 py-0.5 text-[10px] font-medium text-amber-200">
                      {item.level}
                    </span>
                  </div>
                  <p className="mt-1 text-xs text-slate-300">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* BENEFITS */}
        <section
          id="benefits"
          className="border-b border-slate-800/80 bg-gradient-to-b from-slate-950 via-slate-950 to-black"
        >
          <div className="mx-auto max-w-6xl px-4 py-12 md:py-14">
            <h2 className="text-xl font-semibold text-slate-50">
              Οφέλη του TaeKwonDo
            </h2>
            <div className="mt-5 grid gap-4 md:grid-cols-2">
              <div className="rounded-2xl border border-emerald-500/30 bg-emerald-500/5 p-4 backdrop-blur-md">
                <h3 className="text-sm font-semibold text-emerald-100">
                  Σώμα &amp; φυσική κατάσταση
                </h3>
                <p className="mt-1 text-xs text-emerald-50/90">
                  Βελτίωση δύναμης, αντοχής και ευελιξίας μέσα από
                  συστηματική προπόνηση.
                </p>
              </div>
              <div className="rounded-2xl border border-sky-500/30 bg-sky-500/5 p-4 backdrop-blur-md">
                <h3 className="text-sm font-semibold text-sky-100">
                  Νους &amp; συγκέντρωση
                </h3>
                <p className="mt-1 text-xs text-sky-50/90">
                  Ανάπτυξη πειθαρχίας, αυτοελέγχου και πνευματικής
                  διαύγειας.
                </p>
              </div>
              <div className="rounded-2xl border border-fuchsia-500/30 bg-fuchsia-500/5 p-4 backdrop-blur-md">
                <h3 className="text-sm font-semibold text-fuchsia-100">
                  Αυτοπεποίθηση &amp; αυτοάμυνα
                </h3>
                <p className="mt-1 text-xs text-fuchsia-50/90">
                  Πρακτικές δεξιότητες αυτοάμυνας και ενίσχυση
                  αυτοπεποίθησης στην καθημερινότητα.
                </p>
              </div>
              <div className="rounded-2xl border border-amber-500/30 bg-amber-500/5 p-4 backdrop-blur-md">
                <h3 className="text-sm font-semibold text-amber-100">
                  Κοινότητα &amp; ομαδικό πνεύμα
                </h3>
                <p className="mt-1 text-xs text-amber-50/90">
                  Ζεστό περιβάλλον με προπονητές και αθλητές που
                  στηρίζουν ο ένας τον άλλον.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* LOCATION */}
        <section
          id="location"
          className="border-b border-slate-800/80 bg-slate-950/95"
        >
          <div className="mx-auto max-w-6xl px-4 py-12 md:py-14">
            <h2 className="text-xl font-semibold text-slate-50">
              Πού θα μας βρείτε
            </h2>
            <div className="mt-4 grid gap-6 md:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)]">
              <div className="space-y-2 text-sm text-slate-300">
                <p>Διεύθυνση: Οθωνος Γιαννουλη 7, Ηράκλειο Κρήτης</p>
                <p>
                  Τηλέφωνο:{" "}
                  <a
                    href="tel:6974938501"
                    className="font-medium text-amber-200 hover:text-amber-100"
                  >
                    697 493 8501
                  </a>
                </p>
                <p>
                  Μπορείς να ανοίξεις τον χάρτη στο κινητό ή στον υπολογιστή
                  σου και να δεις οδηγίες πρόσβασης:
                </p>
                <a
                  href="https://www.google.com/maps"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 rounded-full border border-slate-700/80 bg-black/30 px-3 py-1.5 text-[11px] font-medium text-slate-100 backdrop-blur-md hover:border-amber-300/70 hover:text-amber-100"
                >
                  Δες στο χάρτη
                </a>
              </div>
              <div className="h-44 overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/70 shadow-[0_18px_55px_rgba(15,23,42,0.9)] backdrop-blur-md" />
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section
          id="contact"
          className="border-b border-slate-800/80 bg-black/70 backdrop-blur-md"
        >
          <div className="mx-auto max-w-6xl px-4 py-12 md:py-14">
            <h2 className="text-xl font-semibold text-slate-50">
              Επικοινωνία
            </h2>
            <p className="mt-2 max-w-xl text-sm text-slate-300">
              Συμπλήρωσε τη φόρμα ή κάλεσέ μας για προπόνηση γνωριμίας,
              πληροφορίες για τμήματα και τιμές.
            </p>
            <div className="mt-5 max-w-md rounded-2xl border border-slate-800 bg-slate-950/80 p-4 shadow-[0_18px_55px_rgba(15,23,42,0.9)] backdrop-blur-md">
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
                    className="w-full rounded-full border border-slate-700 bg-black/40 px-3 py-2 text-xs text-slate-100 outline-none ring-0 placeholder:text-slate-500 focus:border-amber-300 focus:ring-1 focus:ring-amber-400/70"
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
                    className="w-full rounded-full border border-slate-700 bg-black/40 px-3 py-2 text-xs text-slate-100 outline-none ring-0 placeholder:text-slate-500 focus:border-amber-300 focus:ring-1 focus:ring-amber-400/70"
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
                    className="w-full rounded-2xl border border-slate-700 bg-black/40 px-3 py-2 text-xs text-slate-100 outline-none ring-0 placeholder:text-slate-500 focus:border-amber-300 focus:ring-1 focus:ring-amber-400/70"
                    placeholder="Γράψε μας λίγα λόγια για το τι σε ενδιαφέρει…"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full rounded-full bg-gradient-to-r from-amber-400 via-amber-300 to-emerald-300 px-4 py-2 text-xs font-semibold text-slate-950 shadow-[0_18px_45px_rgba(250,204,21,0.6)] hover:from-amber-300 hover:to-emerald-200"
                >
                  Στείλε μήνυμα
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-slate-800/80 bg-black/90">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-2 px-4 py-4 text-[11px] text-slate-500 md:flex-row">
          <span>© {year} Minoites TaeKwonDo | Ηράκλειο</span>
          <span>Built with Next.js &amp; Tailwind CSS</span>
        </div>
      </footer>
    </div>
  );
}