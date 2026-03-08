import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Community',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        Wir freuen uns über jede neue Person in unserere Commmunity!
        Probiert es einfach aus und kommt auf den Discord. :) 
      </>
    ),
  },
  {
    title: 'Design & Aufbau',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        Wir möchten für jeden einen ansprechenden und "schönen" Server haben.
      </>
    ),
  },
  {
    title: 'Leitung & Team',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Der Server wird von 3 Ownern geleitet, dazu haben wir noch ein fantastisches Team bestehend aus
        Mods, Supportern uvm.! Falls ihr auch Interesse habt kann man sich auf dem Discord bewerben.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
