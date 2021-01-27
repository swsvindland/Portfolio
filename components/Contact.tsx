import React, { FC } from "react";

const Contact: FC = () => {
  return (
    <form className="w-100 mw-600 text-light">
      <div className="mb-3">
        <label htmlFor="email" className="form-label">
          Email address
        </label>
        <input
          type="email"
          className="form-control"
          id="email"
          aria-describedby="email"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="phone" className="form-label">
          Phone Number (Optional)
        </label>
        <input type="phone" className="form-control" id="phone" />
      </div>
      <div className="mb-3">
        <label htmlFor="message" className="form-label">
          Message
        </label>
        <textarea
          rows={4}
          className="form-control"
          id="message"
          placeholder="Hi, I would like to hire you!"
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
};

export default Contact;
