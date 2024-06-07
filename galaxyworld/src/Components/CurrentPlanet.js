
const CurrentPlanet = (props) => {
  console.log(props.apod);

  return (
    <div>
      <div class="center">
        <div class="property-card">
          <a href={props.apod.url}>
            <div
              class="property-image"
              style={{ backgroundImage: `url(${props.apod.url})` }}
            >
              <div class="property-image-title">
                <h5>Astronomy Picture of the Day</h5>
              </div>
            </div>
          </a>
          <div class="property-description">
            <h5> {props.apod.title} </h5>
            <h5> {props.apod.date} </h5>
            <p>{props.apod.explanation}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurrentPlanet;
