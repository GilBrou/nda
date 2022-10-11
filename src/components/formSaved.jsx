var NewComponent = React.createClass({
  render: function() {
    return (

      <form id="form">
        <div className="input_group">
          <label htmlFor>name</label>
          <input type="text" name="name" placeholder="Your Full Name" required />
        </div>
        <div className="input_group">
          <label htmlFor>email</label>
          <input type="email" name="email" placeholder="Your email" required />
        </div>
        <div className="input_group">
          <label htmlFor="content">Message</label>
          <textarea name="content" placeholder="Your message" required defaultValue={""} />
        </div>
        <div className="input_group">
          <button type="submit">Submit Form</button>
        </div>
      </form>
    );
  }
});