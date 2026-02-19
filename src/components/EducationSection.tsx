export function EducationSection() {
  return (
    <section
      id="education"
      className="grid gap-6 rounded-3xl surface p-6 sm:grid-cols-[minmax(0,_2fr)_minmax(0,_3fr)] sm:p-8"
    >
      <div>
        <h2 className="text-lg font-semibold tracking-tight sm:text-xl">
          Education
        </h2>
        <div className="mt-4 space-y-2 text-sm text-zinc-600 sm:text-base">
          <p className="font-medium text-zinc-900">
            Newton School Of Technology, Rishihood University
          </p>
          <p className="text-sm">
            Bachelor of Technology in Computer Science &amp; Artificial
            Intelligence
          </p>
          <p className="text-xs text-zinc-500 sm:text-sm">2023 – May 2027</p>
        </div>
      </div>
      <div>
        <h3 className="text-sm font-semibold text-zinc-900 sm:text-base">
          Honors &amp; Awards
        </h3>
        <ul className="mt-3 space-y-4 text-sm text-zinc-600 sm:text-base">
          <li>
            <p className="font-semibold text-zinc-900">
              JEE ADVANCED '23 — AIR-6522
            </p>
            <p className="text-xs text-zinc-500">
              Issued by IIT Delhi · Jun 2023
            </p>
            <p className="mt-1">
              Secured AIR - 6522 in JEE (Advanced) 2023 amongst 185k+
              candidates. SCORE: 142/360. OBC-NCL Category Rank - 1390.
            </p>
          </li>

          <li>
            <p className="font-semibold text-zinc-900">
              JEE MAINS '23 — AIR-24875
            </p>
            <p className="text-xs text-zinc-500">Issued by NTA · Apr 2023</p>
            <p className="mt-1">
              Secured AIR-24875 in JEE MAINS 2023 with 97.84 percentile. OBC-NCL
              Category Rank - 6397.
            </p>
          </li>

          <li>
            <p className="font-semibold text-zinc-900">
              Under-16 Jaipur Cricket Team
            </p>
            <p className="text-xs text-zinc-500">2017 – 2018</p>
            <p className="mt-1">
              Part of Jaipur Under-16 Cricket Team as an opening batsman and
              part-time wicket keeper.
            </p>
          </li>
        </ul>
      </div>
    </section>
  );
}
