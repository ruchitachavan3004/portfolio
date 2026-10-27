import { achievements, education } from '../data/portfolio'
import { EYEBROW, SECTION } from '../styles'

export function Education() {
  return (
    <section
      id="education"
      className={SECTION}
      aria-labelledby="education-title"
    >
      <div className="mx-auto max-w-6xl md:grid md:grid-cols-12 md:gap-8">
        <div className="md:col-span-5">
          <h2 id="education-title" className={EYEBROW}>
            Education
          </h2>
          <ul className="mt-7 flex flex-col gap-6">
            {education.map((item) => (
              <li key={item.school}>
                <p className="text-[15px] font-semibold text-white">{item.school}</p>
                <p className="mt-1 text-[14px] text-white/60">{item.detail}</p>
                <p className="mt-1 text-[13px] text-white/35">
                  <span className="tabular-nums">{item.years}</span>
                  {item.where && ` · ${item.where}`}
                </p>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-14 md:col-span-6 md:col-start-7 md:mt-0">
          <h2 className={EYEBROW}>Achievements</h2>
          <ul className="mt-7 flex flex-col gap-6">
            {achievements.map((item) => (
              <li
                key={item}
                className="border-l border-white/15 pl-5 text-[15px] leading-relaxed text-white/65"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
