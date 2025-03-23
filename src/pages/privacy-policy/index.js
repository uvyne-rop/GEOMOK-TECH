import React from 'react';
import { Link } from 'react-router-dom';

// Libraries
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

// Component
import SectionTitle from '../../component/section-title/section-title';

function PrivacyPolicy() {
  return (
    <>
      <div className="site-content">
        <div className="content-wrapper">
          <section className="section-ptb">
            <Container>
              <Row className="justify-content-center">
                <Col lg={8}>
                  <SectionTitle
                    extraClass="text-center mb-0"
                    tag="h1"
                    title="Privacy Policy"
                    content="Use a past defeat as a motivator. Remind yourself you have nowhere to go except up as you have already been at the bottom."
                  />
                </Col>
              </Row>
            </Container>
          </section>
          <section className="section-pb">
            <Container>
              <p>
                Our Privacy Policy was last updated on June 26, 2023.
              </p>
              <p>
                This Privacy Policy describes Our policies and procedures on the collection, use and disclosure of Your
                information when You use the Service and tells You about Your privacy rights and how the law protects You.
                We use Your Personal data to provide and improve the Service. By using the Service, You agree to the
               collection and use of information in accordance with this Privacy Policy. This Privacy Policy was generated
               by TermsFeed Privacy Policy Generator.
              </p>
              <p>
                Positive pleasure-oriented goals are much more powerful
                motivators than negative fear-based ones. Although each is
                successful separately, the right combination of both is the most
                powerful motivational force known to humankind.
              </p>
              <h4 className="mt-4 text-primary">Personal Information</h4>
              <ul className="list-unstyled">
                <li className="mb-2">
                  {' '}
                  <i className="fa fa-angle-right pe-2 mb-2"></i> Now go push
                  your own limits and succeed!{' '}
                </li>
                <li className="mb-2">
                  {' '}
                  <i className="fa fa-angle-right pe-2 mb-2"></i> Success is
                  something of which we all want more.
                </li>
                <li className="mb-2">
                  {' '}
                  <i className="fa fa-angle-right pe-2 mb-2"></i> They’re wrong
                  – it’s not!
                </li>
                <li className="mb-2">
                  {' '}
                  <i className="fa fa-angle-right pe-2 mb-2"></i> Most people
                  believe that success is difficult.
                </li>
                <li>
                  {' '}
                  <i className="fa fa-angle-right pe-2 mb-2"></i> There are
                  basically six key areas to higher achievement
                </li>
              </ul>
              <p className="mt-3">
                Some people will tell you there are four while others may tell
                you there are eight. One thing for certain though, is that
                irrespective of the number of steps the experts talk about, they
                all originate from the same roots..{' '}
              </p>
              <h4 className="mt-4 text-primary">Use of User Information.</h4>
              <p>
                LBenjamin Franklin, inventor, statesman, writer, publisher and
                economist relates in his autobiography that early in his life he
                decided to focus on arriving at moral perfection. He made a list
                of 13 virtues, assigning a page to each. Under each virtue he
                wrote a summary that gave it fuller meaning. Then he practiced
                each one for a certain length of time. To make these virtues a
                habit, Franklin can up with a method to grade himself on his
                daily actions. In a journal he drew a table with a row for every
                virtue and a column for every day of the week. Every time he
                made a fault, he made a mark in the appropriate column.
              </p>
              <h4 className="mt-4 text-primary">
                Disclosure of User Information.
              </h4>
              <p>
                Introspection is the trick. Understand what you want, why you
                want it and what it will do for you. This is a critical factor,
                and as such, is probably the most difficult step. For this
                reason.<Link to="mailto:support@exatif.com"> support@geomok.com</Link>{' '}
              </p>
              <ul className="list-unstyled">
                <li className="mb-2">
                  {' '}
                  <i className="fa fa-angle-right pe-2 mb-2"></i> You will run
                  aground and become hopelessly stuck in the mud.
                </li>
                <li className="mb-2">
                  {' '}
                  <i className="fa fa-angle-right pe-2 mb-2"></i> You will drift
                  aimlessly until you arrive back at the original dock.
                </li>
                <li className="mb-2">
                  {' '}
                  <i className="fa fa-angle-right pe-2 mb-2"></i> Trying to go
                  through life without clarity is similar to sailing.{' '}
                </li>
                <li>
                  {' '}
                  <i className="fa fa-angle-right pe-2 mb-2"></i> The sad thing
                  is the majority of people.
                </li>
              </ul>
              <p className="mt-3 mb-0">
                So how do we get clarity? Simply by asking ourselves lots of
                questions: What do I really want? What does success look like to
                me? Why do I want a particular thing? How will this achievement
                change my life? How can I use this success.
                <Link to="mailto:support@hisoft.com"> support@geomok.com</Link>
              </p>
            </Container>
          </section>
        </div>
      </div>
    </>
  );
}

export default PrivacyPolicy;
