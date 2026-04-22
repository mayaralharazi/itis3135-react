import PageTitle from "../components/PageTitle";

function Survey() {
  return (
    <>
      <PageTitle title="Mayar Alharazi's Jolly Dolphin ~ ITIS 3135 ~ Survey" />

      <main>
        <h2>Survey</h2>

        <h3 id="title">Jolly Dolphin Study Club Signup Survey</h3>
        <p id="description">
          Help us learn what you want from the Jolly Dolphin Study Club. This survey takes about 1 minute.
        </p>

        <form id="survey-form" action="#" method="post">
          <p>
            <label id="name-label" htmlFor="name">Full Name:</label>
            <br />
            <input
              id="name"
              name="name"
              type="text"
              placeholder="Enter your name"
              required
            />
          </p>

          <p>
            <label id="email-label" htmlFor="email">Email:</label>
            <br />
            <input
              id="email"
              name="email"
              type="email"
              placeholder="Enter your email"
              required
            />
          </p>

          <p>
            <label id="number-label" htmlFor="number">Weekly study hours (0–40):</label>
            <br />
            <input
              id="number"
              name="hours"
              type="number"
              min="0"
              max="40"
              placeholder="e.g., 8"
            />
          </p>

          <p>
            <label htmlFor="dropdown">What is your main goal?</label>
            <br />
            <select id="dropdown" name="goal" required defaultValue="">
              <option value="" disabled>
                Select one
              </option>
              <option value="grades">Improve my grades</option>
              <option value="projects">Build projects/portfolio</option>
              <option value="friends">Meet study friends</option>
              <option value="career">Career & internship prep</option>
            </select>
          </p>

          <fieldset>
            <legend>Preferred meeting time</legend>
            <label>
              <input type="radio" name="meeting-time" value="morning" required />
              Morning
            </label>
            <br />
            <label>
              <input type="radio" name="meeting-time" value="afternoon" />
              Afternoon
            </label>
            <br />
            <label>
              <input type="radio" name="meeting-time" value="evening" />
              Evening
            </label>
          </fieldset>

          <fieldset>
            <legend>What topics should we focus on? (choose all that apply)</legend>
            <label>
              <input type="checkbox" name="topics" value="html-css" />
              HTML/CSS (Web Design)
            </label>
            <br />
            <label>
              <input type="checkbox" name="topics" value="python" />
              Python Practice
            </label>
            <br />
            <label>
              <input type="checkbox" name="topics" value="data-structures" />
              Data Structures
            </label>
            <br />
            <label>
              <input type="checkbox" name="topics" value="cybersecurity" />
              Cybersecurity Basics
            </label>
            <br />
            <label>
              <input type="checkbox" name="topics" value="interview" />
              Interview Prep
            </label>
          </fieldset>

          <p>
            <label htmlFor="comments">Anything else you want to tell us?</label>
            <br />
            <textarea
              id="comments"
              name="comments"
              rows="5"
              cols="35"
              placeholder="Type your message here..."
            ></textarea>
          </p>

          <p>
            <button id="submit" type="submit">Submit</button>
          </p>
        </form>
      </main>
    </>
  );
}

export default Survey;
