// import component
import { useSelector } from 'react-redux';
import Question from './Question';

// import styles
import './styles.scss';

const Faq = () => {
  // select state
  const questionsList = useSelector((state) => state.faq.questions);
  return (
    <main className="faq">
      <section className="faq__head">
        <h1 className="faq__head__title">Foires aux Questions</h1>
      </section>

      {/* question componnent */}

      <section className="faq__list">
        {
          questionsList.map(
            (item) => (
              <Question
                key={item.id}
                title={item.title}
                content={item.content}
              />
            ),
          )
        }
      </section>
    </main>
  );
};

export default Faq;
