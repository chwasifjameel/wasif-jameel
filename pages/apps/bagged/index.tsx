import Head from 'next/head';

import BaggedPage, {
  BaggedButtonLink,
  BaggedCard,
  BaggedKicker,
  BaggedSection,
} from '../../../components/apps/bagged-page';

const SUPPORT_EMAIL = 'wasif.jameel1@gmail.com';

export default function BaggedMarketing() {
  return (
    <>
      <Head>
        <title>Bagged — Smart packing lists in 60 seconds</title>
        <meta
          name="description"
          content="Bagged helps you create packing lists in under a minute. Build reusable trip checklists with suggestions based on trip type, duration, weather, and activities."
        />
        <link rel="canonical" href="https://wasifjameel.com/apps/bagged" />
        <meta property="og:title" content="Bagged — Smart packing lists" />
        <meta
          property="og:description"
          content="Create packing lists in under a minute with suggestions based on trip type, duration, weather, and activities. Works offline with local-only data."
        />
        <meta property="og:url" content="https://wasifjameel.com/apps/bagged" />
        <meta property="og:type" content="website" />
      </Head>

      <BaggedPage>
        <BaggedSection id="hero" className="mt-0">
          <div className="max-w-3xl">
            <BaggedKicker>Travel / Productivity</BaggedKicker>

            <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
              Bagged
            </h1>

            <p className="mt-4 text-xl leading-relaxed text-[#6B7280]">
              Pack smarter for every trip.
            </p>

            <p className="mt-4 text-[#6B7280]">
              Bagged helps you create packing lists in under a minute, so you
              can stop second-guessing what to bring and start each trip feeling
              prepared.
            </p>

            <p className="mt-4 text-[#6B7280]">
              It is built for people who travel often enough to want a simple
              system, but not a complicated one. Create a list quickly, reuse it
              later, and check things off as you pack.
            </p>

            <div className="mt-7 flex flex-wrap items-center gap-3">
              <BaggedButtonLink href="/apps/bagged/support" variant="primary">
                Support
              </BaggedButtonLink>
              <BaggedButtonLink href="/apps/bagged/privacy" variant="secondary">
                Privacy Policy
              </BaggedButtonLink>
            </div>

            <div className="mt-6 text-sm text-[#6B7280]">
              Works offline. No account required. Data stays on your device.
            </div>
          </div>
        </BaggedSection>

        <BaggedSection id="about-me">
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
            Built for trips you repeat.
          </h2>
          <p className="mt-4 max-w-2xl text-[#6B7280]">
            Whether it is a weekend getaway, a family visit, or a work trip,
            Bagged helps you avoid rebuilding the same list every time. Turn one
            trip into a checklist you can reuse, edit, duplicate, and archive.
          </p>
        </BaggedSection>

        <BaggedSection id="featured-work">
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
            Key benefits
          </h2>

          <div className="mt-7 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <BaggedCard>
              <h3 className="text-lg font-semibold">Build lists fast</h3>
              <p className="mt-3 text-[#6B7280]">
                Create a trip-ready packing checklist in about a minute.
              </p>
            </BaggedCard>

            <BaggedCard>
              <h3 className="text-lg font-semibold">Trip-based suggestions</h3>
              <p className="mt-3 text-[#6B7280]">
                Start with suggestions that match the kind of trip you are
                taking.
              </p>
            </BaggedCard>

            <BaggedCard>
              <h3 className="text-lg font-semibold">Duration, weather, activities</h3>
              <p className="mt-3 text-[#6B7280]">
                Refine your list using trip length, expected weather, and planned
                activities.
              </p>
            </BaggedCard>

            <BaggedCard>
              <h3 className="text-lg font-semibold">Pack with confidence</h3>
              <p className="mt-3 text-[#6B7280]">
                Check items off as you pack and track progress across trips.
              </p>
            </BaggedCard>

            <BaggedCard>
              <h3 className="text-lg font-semibold">Reuse and archive</h3>
              <p className="mt-3 text-[#6B7280]">
                Duplicate past trips and archive finished lists so your process
                stays organized.
              </p>
            </BaggedCard>

            <BaggedCard>
              <h3 className="text-lg font-semibold">Offline by default</h3>
              <p className="mt-3 text-[#6B7280]">
                Use Bagged without an account, without a connection, and without
                moving your list data off your device.
              </p>
            </BaggedCard>
          </div>
        </BaggedSection>

        <BaggedSection id="expertise">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
            <div>
              <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
                Privacy you can understand
              </h2>
              <p className="mt-4 max-w-2xl text-[#6B7280]">
                Bagged keeps the essentials simple: no sign-up flow, no need to
                be online, and your trip lists remain stored locally on your
                device.
              </p>
            </div>
          </div>

          <div className="mt-7 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <BaggedCard>
              <h3 className="text-lg font-semibold">No account required</h3>
              <p className="mt-3 text-[#6B7280]">
                Open the app and start building lists without creating an
                account.
              </p>
            </BaggedCard>

            <BaggedCard>
              <h3 className="text-lg font-semibold">Stored locally</h3>
              <p className="mt-3 text-[#6B7280]">
                Your trip and checklist data stays stored on your device.
              </p>
            </BaggedCard>

            <BaggedCard>
              <h3 className="text-lg font-semibold">Works offline</h3>
              <p className="mt-3 text-[#6B7280]">
                Keep planning and packing even when you do not have service.
              </p>
            </BaggedCard>
          </div>
        </BaggedSection>

        <BaggedSection id="resume">
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
            How Bagged helps (in a few steps)
          </h2>
          <p className="mt-4 max-w-2xl text-[#6B7280]">
            Bagged is meant to reduce small packing decisions before they become
            last-minute stress.
          </p>
          <ol className="mt-7 space-y-4">
            <li className="flex gap-3">
              <span className="mt-0.5 inline-flex h-7 w-7 items-center justify-center rounded-full bg-[#EDF1FD] text-sm font-semibold text-[#2563EB]">
                1
              </span>
              <p className="text-[#6B7280]">
                Start with your trip type, then add details like duration,
                weather, and activities.
              </p>
            </li>
            <li className="flex gap-3">
              <span className="mt-0.5 inline-flex h-7 w-7 items-center justify-center rounded-full bg-[#EDF1FD] text-sm font-semibold text-[#2563EB]">
                2
              </span>
              <p className="text-[#6B7280]">
                Generate your packing list and adjust it to match your plan.
              </p>
            </li>
            <li className="flex gap-3">
              <span className="mt-0.5 inline-flex h-7 w-7 items-center justify-center rounded-full bg-[#EDF1FD] text-sm font-semibold text-[#2563EB]">
                3
              </span>
              <p className="text-[#6B7280]">
                Pack against the list, check items off, and keep your progress
                easy to follow.
              </p>
            </li>
          </ol>
        </BaggedSection>

        <BaggedSection id="contact">
          <div className="rounded-3xl border border-[#E6E9F2] bg-[#EDF1FD] p-6 sm:p-8">
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
              Need help?
            </h2>
            <p className="mt-3 text-[#6B7280]">
              Email us at{' '}
              <a
                className="text-[#2563EB] font-semibold underline decoration-[#D6E3FF] underline-offset-4 hover:text-[#1D4ED8]"
                href={`mailto:${SUPPORT_EMAIL}`}
              >
                {SUPPORT_EMAIL}
              </a>
              .
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <BaggedButtonLink href="/apps/bagged/support" variant="primary">
                Support page
              </BaggedButtonLink>
              <BaggedButtonLink href="/apps/bagged/privacy" variant="secondary">
                Privacy policy
              </BaggedButtonLink>
            </div>
          </div>
        </BaggedSection>
      </BaggedPage>
    </>
  );
}

