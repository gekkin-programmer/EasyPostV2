import React from 'react';

const testimonials = [
  {
    quote: "Buffer has transformed how we manage our social presence. Game-changer!",
    author: "Sarah Johnson, Marketing Lead",
    avatar: "https://via.placeholder.com/60?text=SJ" // Replace with real photo
  },
  // Add 2 more similar objects for accuracy
  {
    quote: "Easy to use and incredibly effective. Highly recommend.",
    author: "Mike Chen, Founder",
    avatar: "https://via.placeholder.com/60?text=MC"
  },
  {
    quote: "The analytics alone are worth it. Grew our audience by 40%.",
    author: "Emma Davis, Content Creator",
    avatar: "https://via.placeholder.com/60?text=ED"
  }
];

const Testimonials: React.FC = () => {
  return (
    <section style={{ padding: '6rem 0' }}>
      <div className="container">
        <h2 style={{ textAlign: 'center', fontSize: '2.5rem', marginBottom: '4rem' }}>
          Loved by creators and brands
        </h2>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '2rem'
        }}>
          {testimonials.map((testimonial, index) => (
            <div key={index} style={{
              padding: '2rem',
              background: 'var(--bg-light)',
              borderRadius: '1rem',
              textAlign: 'center'
            }}>
              <img
                src={testimonial.avatar}
                alt={testimonial.author}
                style={{ width: '60px', height: '60px', borderRadius: '50%', marginBottom: '1rem' }}
              />
              <p style={{ fontStyle: 'italic', marginBottom: '1rem' }}>"{testimonial.quote}"</p>
              <p style={{ fontWeight: 600 }}>{testimonial.author}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;