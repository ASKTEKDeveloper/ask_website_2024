import { useCallback, useEffect, useState } from "react";
import axios from "axios";
import { Accordion } from "react-bootstrap";

const normalizeFaqItem = (item, index) => ({
  id: item?.DetailID || item?.id || index + 1,
  title: item?.Question || item?.title || "Question",
  answer: item?.Answer || item?.answer || "",
});

const FAQ = ({ defaultActive = 0, accordions, accordionsData, code, productCode }) => {
  const productShortCode = (code || productCode || "").trim();
  const [active, setActive] = useState(defaultActive ?? 0);
  const [data, setData] = useState(Array.isArray(accordionsData) ? accordionsData : []);
  const [loading, setLoading] = useState(false);

  const fetchFaqByProductCode = useCallback(async () => {
    if (!productShortCode) {
      setData(Array.isArray(accordionsData) ? accordionsData : []);
      return;
    }

    setLoading(true);

    try {
      const response = await axios.get(`/api/FAQ?code=${encodeURIComponent(productShortCode)}`);
      const faqItems = Array.isArray(response.data) ? response.data : [];
      setData(faqItems.map((item, index) => normalizeFaqItem(item, index)));
    } catch (error) {
      console.error("Error fetching FAQ data:", error);
      setData([]);
    } finally {
      setLoading(false);
    }
  }, [accordionsData, productShortCode]);

  useEffect(() => {
    if (Array.isArray(accordionsData) && accordionsData.length) {
      setData(accordionsData);
      return;
    }

    fetchFaqByProductCode();
  }, [accordionsData, fetchFaqByProductCode]);

  const toggleAccordion = useCallback((value) => {
    setActive((current) => (current === value ? null : value));
  }, []);

  const visibleData =
    Array.isArray(accordions) && accordions.length
      ? data.filter(
          (item) =>
            accordions.includes(item.id) ||
            accordions.includes(String(item.id)),
        )
      : data;

  if (!loading && !visibleData.length) return null;

  return (
    <>
      {loading && <p style={{ margin: 0, color: "#666" }}>Loading FAQs...</p>}
      <Accordion defaultActiveKey={String(active)}>
        {visibleData.map((accordion, index) => {
          const eventKey = String(accordion.id ?? index);

          return (
            <div
              className="accordion-item"
              key={accordion.id ?? `${accordion.title}-${index}`}
            >
              <h5 className="accordion-header">
                <Accordion.Toggle
                  as="button"
                  className={`accordion-button ${
                    String(accordion.id ?? index) === String(active) ? "" : "collapsed"
                  }`}
                  eventKey={eventKey}
                  onClick={() => toggleAccordion(accordion.id ?? index)}
                >
                  {accordion.title}
                </Accordion.Toggle>
              </h5>
              <Accordion.Collapse
                eventKey={eventKey}
                data-bs-parent="#faq-accordion"
              >
                <div className="accordion-body">
                  <p>{accordion.answer}</p>
                </div>
              </Accordion.Collapse>
            </div>
          );
        })}
      </Accordion>
    </>
  );
};

export default FAQ;
