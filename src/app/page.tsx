"use client";

export default function Home() {
  const year = new Date().getFullYear();

  return (
    <div className="min-h-screen bg-slate-950 text-slate-50">
      {/* BACKGROUND GLOW */}
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute inset-x-0 top-0 h-64 bg-gradient-to-b from-amber-400/25 via-transparent to-transparent" />
        <div className="absolute -left-32 top-40 h-64 w-64 rounded-full bg-emerald-400/15 blur-3xl" />
        <div className="absolute right-0 bottom-0 h-80 w-80 rounded-full bg-sky-400/10 blur-3xl" />
      </div>

      {/* HEADER */}
      <header className="sticky top-0 z-30 border-b border-slate-800/80 bg-slate-950/80 backdrop-blur-xl">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-3 md:py-4">
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-tr from-amber-400 to-emerald-400 text-[11px] font-semibold tracking-[0.24em] text-slate-950 shadow-[0_14px_35px_rgba(250,204,21,0.55)]">
              MT
            </div>
            <div className="space-y-0.5">
              <div className="text-[11px] font-semibold uppercase tracking-[0.28em] text-slate-300">
                Minoites TaeKwonDo
              </div>
              <div className="text-[11px] text-slate-500">
                Premium TaeKwonDo Studio · Ηράκλειο
              </div>
            </div>
          </div>

          <nav className="hidden gap-6 text-[11px] font-medium text-slate-300 md:flex">
            <a href="#hero" className="hover:text-amber-200">
              Αρχική
            </a>
            <a href="#experience" className="hover:text-amber-200">
              Εμπειρία
            </a>
            <a href="#programs" className="hover:text-amber-200">
              Προγράμματα
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
            className="hidden rounded-full bg-slate-50 px-4 py-1.5 text-[11px] font-semibold text-slate-900 shadow-[0_14px_40px_rgba(15,23,42,0.75)] hover:bg-amber-200 md:inline-flex"
          >
            Προπόνηση γνωριμίας
          </a>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-4 pb-16 pt-8 md:pt-12">
        {/* HERO */}
        <section
          id="hero"
          className="grid gap-10 border-b border-slate-800/80 pb-12 md:grid-cols-[minmax(0,1.35fr)_minmax(0,1fr)] md:pb-16"
        >
          <div className="space-y-6">
            <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-amber-300">
              TaeKwonDo Studio · Ηράκλειο
            </p>
            <h1 className="text-3xl font-semibold leading-tight text-slate-50 md:text-[2.35rem]">
              Premium TaeKwonDo εμπειρία
              <span className="block text-[1.5rem] font-normal text-slate-400">
                ήσυχη δύναμη, καθαρός χώρος, προσεγμένη προπόνηση.
              </span>
            </h1>
            <p className="max-w-xl text-sm text-slate-300">
              Η Minoites TaeKwonDo είναι μια σύγχρονη, λιτή σχολή TaeKwonDo στο
              Ηράκλειο, σχεδιασμένη για όσους θέλουν ποιότητα στην προπόνηση,
              προσοχή στη λεπτομέρεια και σεβασμό στον ρυθμό κάθε αθλητή.
            </p>
            <div className="flex flex-wrap gap-3 pt-1">
              <a
                href="#programs"
                className="inline-flex items-center justify-center rounded-full bg-slate-50 px-5 py-2 text-xs font-semibold text-slate-900 shadow-[0_18px_45px_rgba(15,23,42,0.85)] hover:bg-amber-200"
              >
                Δες τα προγράμματα
              </a>
              <a
                href="#experience"
                className="inline-flex items-center justify-center rounded-full border border-slate-600 bg-slate-900/50 px-4 py-2 text-xs font-medium text-slate-200 backdrop-blur-md hover:border-amber-300 hover:text-amber-100"
              >
                Τι κάνει τη σχολή μας διαφορετική
              </a>
            </div>
            <div className="flex flex-wrap gap-4 pt-3 text-[11px] text-slate-400">
              <span>Baby, παιδικά, αγωνιστικά &amp; ενηλίκων</span>
              <span className="hidden h-3 w-px bg-slate-700 md:inline-block" />
              <span>Μικρές ομάδες · σύγχρονη minimal αισθητική</span>
            </div>
          </div>

          <div className="flex items-center">
            <div className="w-full rounded-3xl border border-slate-800/80 bg-slate-950/80 p-3 shadow-[0_30px_80px_rgba(15,23,42,1)] backdrop-blur-xl">
              <div className="space-y-3 rounded-2xl bg-gradient-to-br from-slate-900 via-slate-950 to-black px-4 py-4 text-[11px] text-slate-100">
                <div className="flex items-center justify-between gap-3">
                  <div className="space-y-0.5">
                    <p className="text-[10px] font-medium uppercase tracking-[0.22em] text-amber-300">
                      Minoites TaeKwonDo Studio
                    </p>
                    <p className="text-xs text-slate-100">
                      Καθαρός, ήρεμος χώρος προπόνησης με premium αίσθηση και
                      ουσιαστική καθοδήγηση.
                    </p>
                  </div>
                  <div className="rounded-full border border-amber-300/40 bg-amber-300/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-amber-200">
                    Focus
                  </div>
                </div>
                <div className="h-px bg-gradient-to-r from-transparent via-slate-700 to-transparent" />
                <div className="grid grid-cols-3 gap-3 text-[10px]">
                  <div className="space-y-0.5">
                    <p className="text-slate-400">Τμήματα</p>
                    <p className="font-medium text-slate-50">4+ ηλικιακές</p>
                  </div>
                  <div className="space-y-0.5">
                    <p className="text-slate-400">Στυλ</p>
                    <p className="font-medium text-slate-50">
                      ήρεμη, απαιτητική προπόνηση
                    </p>
                  </div>
                  <div className="space-y-0.5">
                    <p className="text-slate-400">Στόχος</p>
                    <p className="font-medium text-slate-50">
                      αυτοπεποίθηση &amp; ισορροπία
                    </p>
                  </div>
                </div>
              </div>
              <p className="mt-3 text-[11px] text-slate-400">
                Σχεδιάσαμε τη σχολή σαν ένα μικρό, premium studio: λιτή
                αισθητική, καθαρές γραμμές, έμφαση στην εμπειρία.
              </p>
            </div>
          </div>
        </section>

        {/* EXPERIENCE */}
        <section
          id="experience"
          className="grid gap-6 border-b border-slate-800/80 py-10 md:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)] md:py-12"
        >
          <div className="space-y-3">
            <h2 className="text-xl font-semibold text-slate-50">
              Τι σημαίνει premium TaeKwonDo εμπειρία
            </h2>
            <p className="text-sm text-slate-300">
              Για εμάς το TaeKwonDo είναι κάτι περισσότερο από προπόνηση.
              Συνδυάζουμε την παραδοσιακή πειθαρχία με σύγχρονο, minimal
              περιβάλλον: λιγότερος “θόρυβος”, περισσότερη συγκέντρωση στην
              κίνηση, την αναπνοή και την εξέλιξη.
            </p>
            <p className="text-sm text-slate-300">
              Δημιουργούμε μικρές, προσεγμένες ομάδες ώστε κάθε αθλητής – παιδί
              ή ενήλικας – να έχει χώρο, χρόνο και καθοδήγηση. Θέλουμε
              να νιώθεις ότι ο χώρος “δουλεύει” για εσένα, όχι το αντίστροφο.
            </p>
          </div>
          <div className="space-y-2 rounded-2xl border border-slate-800/80 bg-slate-950/80 p-4 text-[11px] text-slate-300 shadow-[0_18px_55px_rgba(15,23,42,0.9)] backdrop-blur-md">
            <p className="font-medium text-slate-50">
              Στη Minoites TaeKwonDo θα βρεις:
            </p>
            <ul className="mt-1 space-y-1.5">
              <li>• Καθαρό, οργανωμένο χώρο με ησυχία και σεβασμό</li>
              <li>• Πραγματική προσοχή στη στάση σώματος και στην τεχνική</li>
              <li>• Ισορροπία ανάμεσα σε σώμα, νου και χαρακτήρα</li>
              <li>• Αίσθηση “μικρής, προσεγμένης σχολής” και όχι μαζικού χώρου</li>
            </ul>
          </div>
        </section>

        {/* PROGRAMS */}
        <section
          id="programs"
          className="border-b border-slate-800/80 py-10 md:py-12"
        >
          <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <div>
              <h2 className="text-xl font-semibold text-slate-50">
                Προγράμματα για κάθε ηλικία
              </h2>
              <p className="mt-1 text-sm text-slate-300">
                Τμήματα σχεδιασμένα για το στάδιο και τον στόχο σου – από τα
                πρώτα βήματα μέχρι αγωνιστικό επίπεδο.
              </p>
            </div>
            <p className="text-[11px] text-slate-400">
              Θα σε βοηθήσουμε να επιλέξεις το ιδανικό πρόγραμμα για εσένα ή το
              παιδί σου.
            </p>
          </div>

          <div className="mt-5 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Baby (4–6)",
                tag: "Πρώτη επαφή",
                desc: "Ήπια, παιχνιώδης εισαγωγή στην κίνηση, την ισορροπία και τους βασικούς κανόνες.",
              },
              {
                title: "Παιδικό (6–12)",
                tag: "Βάσεις",
                desc: "Χτίσιμο τεχνικής, πειθαρχίας και συνεργασίας σε ασφαλές, φιλικό περιβάλλον.",
              },
              {
                title: "Αγωνιστικό / Προαγωνιστικό (12+)",
                tag: "Αγώνες",
                desc: "Στοχευμένη προπόνηση για όσους θέλουν να δοκιμάσουν ή να εξελίξουν αγωνιστική πορεία.",
              },
              {
                title: "Αυτοάμυνα Ενηλίκων",
                tag: "Ενδυνάμωση",
                desc: "Πρακτικές τεχνικές αυτοάμυνας, ενδυνάμωση και αποφόρτιση από την καθημερινότητα.",
              },
              {
                title: "Poomsae",
                tag: "Τεχνική",
                desc: "Επικέντρωση στην ακρίβεια, στη ροή και στην τεχνική έκφραση του TaeKwonDo.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="group flex flex-col justify-between rounded-2xl border border-slate-800/80 bg-slate-950/80 p-4 text-sm text-slate-300 shadow-[0_18px_45px_rgba(15,23,42,0.9)] backdrop-blur-md transition-transform duration-150 hover:-translate-y-1 hover:border-amber-300/70"
              >
                <div className="space-y-1.5">
                  <div className="flex items-center justify-between gap-2">
                    <h3 className="text-sm font-semibold text-slate-50">
                      {item.title}
                    </h3>
                    <span className="whitespace-nowrap rounded-full border border-slate-700 bg-slate-900/70 px-2 py-0.5 text-[10px] font-medium text-slate-300">
                      {item.tag}
                    </span>
                  </div>
                  <p className="text-xs text-slate-300">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* BENEFITS */}
        <section
          id="benefits"
          className="border-b border-slate-800/80 bg-slate-950/80 py-10 backdrop-blur-md md:py-12"
        >
          <div className="grid gap-6 md:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)]">
            <div>
              <h2 className="text-xl font-semibold text-slate-50">
                Οφέλη μέσα &amp; έξω από τη σχολή
              </h2>
              <p className="mt-1 text-sm text-slate-300">
                Το TaeKwonDo επηρεάζει τον τρόπο που στεκόμαστε, που
                συγκεντρωνόμαστε και που αντιμετωπίζουμε τις καθημερινές
                προκλήσεις – ειδικά σε παιδιά και εφήβους.
              </p>
            </div>
            <p className="text-sm text-slate-300">
              Στόχος μας είναι κάθε αθλητής να φεύγει από τη σχολή λίγο πιο
              δυνατός σωματικά, λίγο πιο ήρεμος ψυχικά και λίγο πιο σίγουρος
              για τον εαυτό του.
            </p>
          </div>

          <div className="mt-5 grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl border border-emerald-500/30 bg-emerald-500/10 p-4 text-xs text-emerald-50 backdrop-blur-md">
              <h3 className="text-sm font-semibold text-emerald-50">
                Σώμα &amp; φυσική κατάσταση
              </h3>
              <p className="mt-1">
                Ενδυνάμωση, αντοχή και ευελιξία μέσα από προπόνηση που
                προσαρμόζεται στο επίπεδό σου.
              </p>
            </div>
            <div className="rounded-2xl border border-sky-500/30 bg-sky-500/10 p-4 text-xs text-sky-50 backdrop-blur-md">
              <h3 className="text-sm font-semibold text-sky-50">
                Νους &amp; συγκέντρωση
              </h3>
              <p className="mt-1">
                Βοηθά στη διαχείριση έντασης, την εστίαση και τον αυτοέλεγχο –
                πολύτιμα στοιχεία για σχολείο και δουλειά.
              </p>
            </div>
            <div className="rounded-2xl border border-fuchsia-500/30 bg-fuchsia-500/10 p-4 text-xs text-fuchsia-50 backdrop-blur-md">
              <h3 className="text-sm font-semibold text-fuchsia-50">
                Αυτοπεποίθηση &amp; αυτοάμυνα
              </h3>
              <p className="mt-1">
                Σταδιακή ενίσχυση αυτοπεποίθησης, σεβασμού και πρακτικής
                αυτοάμυνας στην πράξη.
              </p>
            </div>
            <div className="rounded-2xl border border-amber-500/30 bg-amber-500/10 p-4 text-xs text-amber-50 backdrop-blur-md">
              <h3 className="text-sm font-semibold text-amber-50">
                Κοινότητα &amp; σταθερότητα
              </h3>
              <p className="mt-1">
                Σταθερό περιβάλλον, γνωστά πρόσωπα και ομαδικό πνεύμα – κάτι
                πολύ σημαντικό ειδικά για παιδιά και εφήβους.
              </p>
            </div>
          </div>
        </section>

        {/* LOCATION */}
        <section
          id="location"
          className="border-b border-slate-800/80 py-10 md:py-12"
        >
          <div className="grid gap-6 md:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)]">
            <div className="space-y-2">
              <h2 className="text-xl font-semibold text-slate-50">
                Πού θα μας βρεις
              </h2>
              <p className="text-sm text-slate-300">
                Η σχολή βρίσκεται σε εύκολα προσβάσιμο σημείο στο Ηράκλειο, με
                πρόσβαση από κεντρικούς δρόμους και στάθμευση στην περιοχή.
              </p>
              <p className="mt-2 text-sm text-slate-200">
                Διεύθυνση:{" "}
                <span className="font-medium">
                  Οθωνος Γιαννουλη 7, Ηράκλειο Κρήτης
                </span>
              </p>
              <p className="text-sm text-slate-200">
                Τηλέφωνο:{" "}
                <a
                  href="tel:6944934501"
                  className="font-medium text-amber-200 underline-offset-2 hover:underline"
                >
                  694 493 4501
                </a>
              </p>
              <a
                href="https://www.google.com/maps"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 inline-flex items-center justify-center rounded-full border border-slate-600 bg-slate-900/70 px-4 py-2 text-[11px] font-medium text-slate-100 hover:border-amber-300 hover:text-amber-100"
              >
                Άνοιγμα στο Google Maps
              </a>
            </div>
            <div className="h-44 rounded-2xl border border-slate-800 bg-slate-900/80 shadow-[0_18px_45px_rgba(15,23,42,0.9)] backdrop-blur-md" />
          </div>
        </section>

        {/* CONTACT */}
        <section
          id="contact"
          className="grid gap-8 py-10 md:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)] md:py-12"
        >
          <div className="space-y-3">
            <h2 className="text-xl font-semibold text-slate-50">
              Επικοινώνησε μαζί μας
            </h2>
            <p className="text-sm text-slate-300">
              Θέλεις να κλείσεις προπόνηση γνωριμίας ή να ρωτήσεις για τα
              τμήματα; Συμπλήρωσε τη φόρμα ή κάλεσέ μας – θα χαρούμε να
              σε καθοδηγήσουμε.
            </p>
            <p className="text-sm text-slate-300">
              Μπορούμε να συζητήσουμε τον στόχο σου (άσκηση, αυτοάμυνα,
              αγωνιστική πορεία) και να σου προτείνουμε το κατάλληλο πρόγραμμα.
            </p>
          </div>
          <div className="rounded-2xl border border-slate-800 bg-slate-950/80 p-4 text-xs text-slate-200 shadow-[0_18px_55px_rgba(15,23,42,0.9)] backdrop-blur-md">
            <form
              className="space-y-3"
              onSubmit={(e) => {
                e.preventDefault();
                alert(
                  "Η φόρμα είναι δοκιμαστική σε αυτή τη φάση. Αργότερα θα τη συνδέσουμε με πραγματική αποστολή μηνύματος."
                );
              }}
            >
              <div className="space-y-1">
                <label
                  htmlFor="name"
                  className="block text-[11px] text-slate-300"
                >
                  Όνομα
                </label>
                <input
                  id="name"
                  type="text"
                  required
                  className="w-full rounded-full border border-slate-700 bg-slate-900 px-3 py-2 text-xs text-slate-50 outline-none ring-0 placeholder:text-slate-500 focus:border-amber-300 focus:ring-1 focus:ring-amber-400/70"
                  placeholder="Το όνομά σου"
                />
              </div>
              <div className="space-y-1">
                <label
                  htmlFor="email"
                  className="block text-[11px] text-slate-300"
                >
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  className="w-full rounded-full border border-slate-700 bg-slate-900 px-3 py-2 text-xs text-slate-50 outline-none ring-0 placeholder:text-slate-500 focus:border-amber-300 focus:ring-1 focus:ring-amber-400/70"
                  placeholder="you@example.com"
                />
              </div>
              <div className="space-y-1">
                <label
                  htmlFor="message"
                  className="block text-[11px] text-slate-300"
                >
                  Μήνυμα
                </label>
                <textarea
                  id="message"
                  rows={4}
                  required
                  className="w-full rounded-2xl border border-slate-700 bg-slate-900 px-3 py-2 text-xs text-slate-50 outline-none ring-0 placeholder:text-slate-500 focus:border-amber-300 focus:ring-1 focus:ring-amber-400/70"
                  placeholder="Γράψε μας λίγα λόγια για το τι σε ενδιαφέρει…"
                />
              </div>
              <button
                type="submit"
                className="w-full rounded-full bg-slate-50 px-4 py-2 text-xs font-semibold text-slate-900 shadow-[0_18px_40px_rgba(15,23,42,0.85)] hover:bg-amber-200"
              >
                Στείλε μήνυμα
              </button>
            </form>
          </div>
        </section>
      </main>

      <footer className="border-t border-slate-800/80 bg-slate-950/90 py-4">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-2 px-4 text-[11px] text-slate-500 md:flex-row">
          <span>© {year} Minoites TaeKwonDo · Ηράκλειο</span>
          <span>Ιστοσελίδα με Next.js &amp; Tailwind CSS</span>
        </div>
      </footer>
    </div>
  );
}