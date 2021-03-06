import * as React from 'react';

export interface TestimonialProps {
  firstName: string;
  lastName: string;
  phrase: string;
}

export const Testimonial: React.FC<TestimonialProps> = ({ firstName, lastName, phrase }) => (
  <div className="testimonial">
    <div className="testimonial-item">
      <div className="testimonial-item-content">
        <p>— {phrase}</p>
      </div>
      <div className="testimonial-item-footer">
        <span className="testimonial-item-name">{firstName}</span>
        <span className="testimonial-item-name">{lastName}</span>
      </div>
    </div>
  </div>
);
