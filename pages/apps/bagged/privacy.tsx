import Head from 'next/head';

import BaggedPage, {
  BaggedButtonLink,
  BaggedCard,
  BaggedKicker,
  BaggedSection,
} from '../../../components/apps/bagged-page';

const SUPPORT_EMAIL = 'wasif.jameel1@gmail.com';

export default function BaggedPrivacy() {
  return (
    <>
      <Head>
        <title>Bagged Privacy Policy</title>
        <meta
          name="description"
          content="Bagged stores trip and packing checklist data locally on your device. No account is required, and your list data is not uploaded to a server."
        />
        <link
          rel="canonical"
          href="https://wasifjameel.com/apps/bagged/privacy"
        />
        <meta property="og:title" content="Bagged Privacy Policy" />
        <meta
          property="og:description"
          content="Bagged stores your trip and packing checklist data locally on your device. No account required and no server upload for your list data."
        />
        <meta
          property="og:url"
          content="https://wasifjameel.com/apps/bagged/privacy"
        />
        <meta property="og:type" content="website" />
      </Head>

      <BaggedPage>
        <BaggedSection id="hero" className="mt-0">
          <BaggedKicker>Privacy</BaggedKicker>
          <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
            Bagged Privacy Policy
          </h1>
          <p className="mt-4 max-w-2xl text-[#6B7280]">
            Effective August 20, 2026
          </p>
        </BaggedSection>

        <BaggedSection id="about-me">
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
            Privacy at a glance
          </h2>
          <p className="mt-4 max-w-3xl text-[#6B7280]">
            Bagged is designed to work without an account. The trip and packing
            checklist data you create is stored locally on your device.
          </p>
        </BaggedSection>

        <BaggedSection id="featured-work">
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
            What Bagged stores
          </h2>
          <p className="mt-4 max-w-3xl text-[#6B7280]">
            Bagged stores the information needed to help you manage your own
            packing lists inside the app.
          </p>
          <div className="mt-7 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <BaggedCard>
              <h3 className="text-lg font-semibold">Trip lists</h3>
              <p className="mt-3 text-[#6B7280]">
                Trip details and packing checklist content you create.
              </p>
            </BaggedCard>
            <BaggedCard>
              <h3 className="text-lg font-semibold">Progress</h3>
              <p className="mt-3 text-[#6B7280]">
                Check-off status and progress across trips.
              </p>
            </BaggedCard>
            <BaggedCard>
              <h3 className="text-lg font-semibold">Local-only</h3>
              <p className="mt-3 text-[#6B7280]">
                Stored on your device and used by the app on that device.
              </p>
            </BaggedCard>
          </div>
        </BaggedSection>

        <BaggedSection id="expertise">
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
            No account. No server upload.
          </h2>
          <p className="mt-4 max-w-3xl text-[#6B7280]">
            Bagged does not require sign-in. Your trip and packing checklist
            data is not uploaded to a server, which also helps keep the app
            usable offline.
          </p>

          <div className="mt-7 grid gap-4 sm:grid-cols-2">
            <BaggedCard>
              <h3 className="text-lg font-semibold">No account required</h3>
              <p className="mt-3 text-[#6B7280]">
                You can create and manage lists without creating an account.
              </p>
            </BaggedCard>
            <BaggedCard>
              <h3 className="text-lg font-semibold">Works offline</h3>
              <p className="mt-3 text-[#6B7280]">
                You can access and use your lists without an internet
                connection.
              </p>
            </BaggedCard>
          </div>
        </BaggedSection>

        <BaggedSection id="resume">
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
            Contact
          </h2>
          <div className="mt-7 rounded-3xl border border-[#E6E9F2] bg-[#EDF1FD] p-6 sm:p-8">
            <p className="text-[#6B7280]">
              Questions about this policy or your privacy while using Bagged?
              Email{' '}
              <a
                className="text-[#2563EB] font-semibold underline decoration-[#D6E3FF] underline-offset-4 hover:text-[#1D4ED8]"
                href={`mailto:${SUPPORT_EMAIL}`}
              >
                {SUPPORT_EMAIL}
              </a>
              .
            </p>
            <div className="mt-5 flex flex-wrap gap-3">
              <BaggedButtonLink
                href="/apps/bagged/support"
                variant="secondary"
              >
                Support
              </BaggedButtonLink>
            </div>
          </div>
        </BaggedSection>

        <BaggedSection id="contact">
          <p className="text-sm text-[#6B7280]">
            This privacy policy is provided for App Store and Google Play
            review.
          </p>
        </BaggedSection>
      </BaggedPage>
    </>
  );
}

