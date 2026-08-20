import Head from 'next/head';
import Link from 'next/link';

import BaggedPage, {
  BaggedButtonLink,
  BaggedCard,
  BaggedKicker,
  BaggedSection,
} from '../../../components/apps/bagged-page';

const SUPPORT_EMAIL = 'wasif.jameel1@gmail.com';

export default function BaggedSupport() {
  return (
    <>
      <Head>
        <title>Bagged Support</title>
        <meta
          name="description"
          content="Need help with Bagged? Contact wasif.jameel1@gmail.com for support with trip lists, packing progress, and general questions."
        />
        <link rel="canonical" href="https://wasifjameel.com/apps/bagged/support" />
        <meta property="og:title" content="Bagged Support" />
        <meta
          property="og:description"
          content="Contact Bagged support at wasif.jameel1@gmail.com for help with trip lists and packing questions."
        />
        <meta
          property="og:url"
          content="https://wasifjameel.com/apps/bagged/support"
        />
        <meta property="og:type" content="website" />
      </Head>

      <BaggedPage>
        <BaggedSection id="hero" className="mt-0">
          <BaggedKicker>Support</BaggedKicker>
          <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
            Bagged Support
          </h1>
          <p className="mt-4 max-w-2xl text-[#6B7280]">
            Need help with Bagged? Email us at{' '}
            <a
              className="text-[#2563EB] font-semibold underline decoration-[#D6E3FF] underline-offset-4 hover:text-[#1D4ED8]"
              href={`mailto:${SUPPORT_EMAIL}`}
            >
              {SUPPORT_EMAIL}
            </a>
            .
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <BaggedButtonLink href="/apps/bagged/privacy" variant="secondary">
              Privacy Policy
            </BaggedButtonLink>
          </div>
        </BaggedSection>

        <BaggedSection id="about-me">
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
            What we can help with
          </h2>
          <p className="mt-4 max-w-2xl text-[#6B7280]">
            If something in Bagged is unclear or not working as expected, this
            is the best place to reach out.
          </p>
        </BaggedSection>

        <BaggedSection id="featured-work">
          <div className="mt-0 grid gap-4 sm:grid-cols-2">
            <BaggedCard>
              <h3 className="text-lg font-semibold">
                Creating and editing lists
              </h3>
              <p className="mt-3 text-[#6B7280]">
                Questions about building a list and adjusting it for a specific
                trip.
              </p>
            </BaggedCard>

            <BaggedCard>
              <h3 className="text-lg font-semibold">
                Checking items & progress
              </h3>
              <p className="mt-3 text-[#6B7280]">
                Help with checking items off and understanding list progress.
              </p>
            </BaggedCard>

            <BaggedCard>
              <h3 className="text-lg font-semibold">Offline use</h3>
              <p className="mt-3 text-[#6B7280]">
                Help using Bagged when you are offline.
              </p>
            </BaggedCard>

            <BaggedCard>
              <h3 className="text-lg font-semibold">Trip suggestions</h3>
              <p className="mt-3 text-[#6B7280]">
                Questions about suggestions based on trip type, duration,
                weather, and activities.
              </p>
            </BaggedCard>
          </div>
        </BaggedSection>

        <BaggedSection id="expertise">
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
            To get the fastest help
          </h2>
          <p className="mt-4 max-w-2xl text-[#6B7280]">
            A short, specific email usually makes it easier to help quickly.
          </p>
          <div className="mt-7 grid gap-4 sm:grid-cols-2">
            <BaggedCard>
              <h3 className="text-lg font-semibold">Your device</h3>
              <p className="mt-3 text-[#6B7280]">
                Share whether you are using iPhone, iPad, or Android.
              </p>
            </BaggedCard>
            <BaggedCard>
              <h3 className="text-lg font-semibold">What you expected</h3>
              <p className="mt-3 text-[#6B7280]">
                Include what happened and what you expected instead.
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
              Contact email:{' '}
              <a
                className="text-[#2563EB] font-semibold underline decoration-[#D6E3FF] underline-offset-4 hover:text-[#1D4ED8]"
                href={`mailto:${SUPPORT_EMAIL}`}
              >
                {SUPPORT_EMAIL}
              </a>
              .
            </p>
            <div className="mt-5">
              <BaggedButtonLink
                href={`mailto:${SUPPORT_EMAIL}`}
                variant="primary"
              >
                Email support
              </BaggedButtonLink>
            </div>
          </div>
        </BaggedSection>

        <BaggedSection id="contact">
          <p className="text-sm text-[#6B7280]">
            For privacy questions, see{' '}
            <Link
              href="/apps/bagged/privacy"
              className="text-[#2563EB] font-semibold underline decoration-[#D6E3FF] underline-offset-4 hover:text-[#1D4ED8]"
            >
              the Bagged privacy policy
            </Link>
            .
          </p>
        </BaggedSection>
      </BaggedPage>
    </>
  );
}

