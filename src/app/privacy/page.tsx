import { ArticleContent } from '@shared/components/common/content'
import * as defaultMetadata from '@shared/libs/shared-metadata'
import { Metadata } from 'next'
import Link from 'next/link'
import * as React from 'react'

export const metadata: Metadata = {
  title: 'Privacy policy',
  description: 'Read the privacy and policy',
  openGraph: {
    ...defaultMetadata.openGraph,
    title: 'Privacy policy',
    description: 'Read the privacy and policy',
  },
  twitter: {
    ...defaultMetadata.twitter,
    title: 'Privacy policy',
    description: 'Read the privacy and policy',
  },
}

export default function TermsPage(): React.ReactElement {
  return (
    <main className="flex flex-col">
      <section className="flex py-36 container mx-auto px-5 tablet:px-0">
        <div className="flex tablet:w-6/12 mx-auto w-full">
          <ArticleContent>
            <h1>Privacy policy</h1>

            <strong>Effective Date: Friday, 12 April 2024</strong>

            <p>
              This privacy policy outlines the information practices and
              procedures followed by{' '}
              <Link href={'https://brookcodetheme.vercel.app'}>
                https://brookcodetheme.vercel.app
              </Link>{' '}
              ("we," "us," or "our") regarding the collection, use, and
              disclosure of personal information when you access and use our
              website (the "Website"). We are committed to protecting your
              privacy and ensuring the security of your personal information. By
              accessing or using our Website, you consent to the collection,
              use, and disclosure of your personal information as described in
              this Privacy Policy.
            </p>

            <h2>Information We Collect</h2>

            <h3>Personal Information</h3>

            <p>
              We may collect personal information that you voluntarily provide
              to us when you interact with our Website, such as your name, email
              address, and any other information you choose to provide.
            </p>

            <h3>Usage Information</h3>

            <p>
              When you visit our Website, we may automatically collect certain
              information about your visit, such as your IP address, browser
              type, operating system, referring URLs, and other technical
              information.
            </p>

            <h2>Use of Information</h2>

            <p>We may use the personal information we collect to:</p>

            <ul>
              <li>Respond to your inquiries or requests</li>
              <li>Provide the services or information you requested</li>
              <li>Personalize and enhance your experience on our Website</li>
              <li>
                Communicate with you about updates, promotions, or other news
                about our services
              </li>
              <li>
                Conduct analytics and research to improve our Website and
                services
              </li>
              <li>
                Detect, prevent, and address technical issues or security
                breaches
              </li>
              <li>
                Comply with applicable laws, regulations, or legal processes.
              </li>
            </ul>

            <p>
              We may use usage information to analyze trends, administer our
              Website, track users' movements, and gather demographic
              information for aggregate use. This information is collected on an
              anonymous basis and does not personally identify you.
            </p>

            <h2>Cookies and Tracking Technologies</h2>

            <p>
              We may use cookies, web beacons, and similar technologies to
              enhance your experience on our Website, analyze trends, track
              users' movements, and gather demographic information. You can
              control the use of cookies through your browser settings.
            </p>

            <h2>Information Sharing and Disclosure</h2>

            <p>
              We do not sell, trade, or otherwise transfer your personal
              information to third parties for their marketing purposes.
              However, we may share your personal information in the following
              circumstances:
            </p>

            <ul>
              <li>
                With trusted third-party service providers who assist us in
                operating our Website, conducting business, or providing
                services to you, subject to their agreement to maintain the
                confidentiality of your information
              </li>
              <li>
                When we believe in good faith that disclosure is necessary to
                protect our rights, investigate potential violations, or enforce
                our policies
              </li>
              <li>
                In connection with a corporate transaction, such as a merger,
                acquisition, or sale of assets, where your personal information
                may be transferred to the acquiring entity.
              </li>
            </ul>

            <h2>Data Security</h2>

            <p>
              We implement reasonable security measures to protect the personal
              information we collect from unauthorized access, disclosure,
              alteration, or destruction. However, no method of transmission or
              storage is completely secure, and we cannot guarantee absolute
              security.
            </p>

            <h2>Third-Party Links</h2>

            <p>
              Our Website may contain links to third-party websites or services
              that are not owned or controlled by us. This Privacy Policy
              applies only to our Website. We have no control over and assume no
              responsibility for the privacy practices of third-party websites
              or services. We encourage you to review the privacy policies of
              any third-party websites or services that you visit.
            </p>

            <h2>Changes to this Privacy Policy</h2>

            <p>
              We may update this Privacy Policy from time to time. Any changes
              we make will be posted on this page, and the "Effective Date" at
              the top of this policy will be revised. We encourage you to review
              this Privacy Policy periodically to stay informed about our
              information practices.
            </p>

            <h2>Contact</h2>

            <p>
              If you have any questions, concerns, or requests regarding this
              privacy policy or the handling of your personal information,
              please{' '}
              <Link
                href={'https://github.com/orgs/brook-code-theme/discussions'}
                target="_blank"
              >
                contact us
              </Link>
              .
            </p>
          </ArticleContent>
        </div>
      </section>
    </main>
  )
}
