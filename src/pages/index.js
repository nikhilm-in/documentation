import React from "react";
import classnames from "classnames";
import Layout from "@theme/Layout";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import useBaseUrl from "@docusaurus/useBaseUrl";
import Footer from "../core/Footer";
import styles from "./styles.module.css";
import StillNotFind from "../components/StillNotFind";
import Header from "../components/Header";
import Topics from "../components/Topics";
import Community from "../components/Community";
import QuickReads from "../components/QuickReads";

const features = [
  {
    title: <>Getting Started</>,
    imageUrl: "img/getting-started.svg",
    description: (
      <>
        A step-by-step guide to setup Axioms according to your authentication
        and access-control requirements.
      </>
    ),
    pageUrl: "docs/getting-started/index",
  },
  {
    title: <>SDKs & Samples</>,
    imageUrl: "img/sdks-samples.svg",
    description: (
      <>
        Use our languages and framework specific SDKs and samples to integrate
        Axioms with your apps and services.
      </>
    ),
    pageUrl: "docs/sdks-samples/index",
  },
  {
    title: <>OpenID & OAuth 2</>,
    imageUrl: "img/standard-compliance.svg",
    description: (
      <>
        Deep-dive into all OpenID Connect (OIDC) and OAuth 2 compliant platform
        features using our advanced guides.
      </>
    ),
    pageUrl: "docs/openid-connect/index",
  },
];

function Feature({ imageUrl, title, description, pageUrl }) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={classnames("col col--4", styles.feature)}>
      {imgUrl && (
        <div className="text--center">
          <img className={styles.featureImage} src={imgUrl} alt={title} />
        </div>
      )}
      <h2>{title}</h2>
      <p>{description}</p>
      <p className="learn-more">
        <a href={pageUrl}>Learn more →</a>
      </p>
    </div>
  );
}

const iframe =
  '<iframe src="https://d3metalab.substack.com/embed" width="480" height="320" style="border:1px solid #EEE; background:white;" frameborder="0" scrolling="no"></iframe>';

function Iframe(props) {
  return (
    <div
      dangerouslySetInnerHTML={{ __html: props.iframe ? props.iframe : "" }}
    />
  );
}

function Home() {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;

  const topics = [
    {
      title: "Get started with Concepts",
      description:
        "Learn the platform basics, review channel intergration and security compilance documents.",
      icon: "ri-booklet-line",
      url: "/docs/platform_concepts/getting-started",
    },
    {
      title: "Template Bots",
      description:
        "Zero to one of building bots for simple usecases at lightening speed.",
      icon: "ri-lightbulb-flash-line",
      url: "/docs/cookbooks/template-bots/model-bot",
    },
    {
      title: "Video Tutorials",
      description:
        "Video based tutorials for one shot learning of major sections of the platform",
      icon: "ri-question-line",
      url: "/docs/tutorials/basics",
    },
  ];
  return (
    <Layout
      title="Home"
      description="Add strong authentication, fine-grained authorization in your apps, devices, and APIs."
    >
      <main className={styles.main_wrapper}>
        {/* <div className={styles.buttons}>
            <Link
              className={classnames(
                "button cta-btn button--outline button--primary button--lg",
                styles.getStarted
              )}
              to={"https://cloud.yellowmessenger.com"}
            >
              <i className="feather icon-arrow-right"></i> Get started for free
            </Link>
            <Link
              className={classnames(
                "button cta-btn button--outline button--success button--lg",
                styles.getStarted
              )}
              to={useBaseUrl("docs/cookbooks")}
            >
              <i className="feather icon-github"></i> Explore Cookbooks
            </Link>
          </div> */}
        <Header
          title="Hi, how can we help you?"
          description=" Refer Platform Concepts to build and deploy bots on channels where your
          customers are!"
          placeholder="Search by keyword ( Eg. How to build a bot, Journeys, steps)"
        />        
        <section className={styles.section_container}>
          <h2 className={styles.title}>Browse topics</h2>
          <p className={styles.description}>
            Set up simple bots within minutes or learn about how to develop a
            complex bot that caters to your usecase
          </p>
          <div className={styles.contents}>
            <div className={styles.details}>
              {topics.map((topic, index) => (
                <Topics
                  key={index}
                  title={topic.title}
                  description={topic.description}
                  icon={topic.icon}
                  url={topic.url}
                />
              ))}
            </div>
            <div className={styles.right_sidebar}>
              <QuickReads
                description="We gathered some handy resources so that you can get quickly started."
                list={[
                  {
                    value: "How to build your lead gen bot ?",
                    to: "/docs/cookbooks/template-bots/lead-generation",
                  },
                  {
                    value: "Create a database table ?",
                    to: "/docs/platform_concepts/data/create-tables",
                  },
                  {
                    value: "How to setup a WhatsApp Bot ?",
                    to: "/docs/cookbooks/whatsapp%20cookbook/whatsapp-bot",
                  },
                  {
                    value: "How to add FAQs ?",
                    to: "/docs/platform_concepts/studio/knowledge-management/add-faqs",
                  },
                  {
                    value: "How to share bot access ?",
                    to: "/docs/platform_concepts/configurations/signup-post-bot-invite",
                  },
                ]}
              />
              <Community />
            </div>
          </div>
        </section>
        <StillNotFind />
      </main>
      <Footer />
    </Layout>
  );
}

export default Home;
