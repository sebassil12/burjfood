import award from "./burjaward.module.css"
function BurjAward() {
  return (
    <div className={award.container}>
      <section className={award.firstAward}>
        <h1>Culinary Harmony Award</h1> 
        Celebrating the Seamless Fusion of Flavors This
        prestigious award recognizes BurjFood for achieving the perfect
        symphony of tastes.
      </section>
      <section className={award.secondAward}>
        <h1>Fresh Fusion Excellence Prize</h1> 
        Elevating the Art of Blending Freshness
        and Creativity BurjFood proudly receives the Fresh Fusion
        Excellence Prize for its unparalleled commitment to combining the
        freshest ingredients with imaginative culinary flair. 
      </section>
    </div>
  );
}

export default BurjAward;
