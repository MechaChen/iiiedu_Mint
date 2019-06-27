function move() {
  TweenMax.to(".box_01", 1, {
    x: 50,
    y: 100
  });

  TweenMax.from(".box_02", 1, {
    x: 300
  });

  TweenMax.fromTo(
    ".box_03",
    1,
    {
      y: 400
    },
    {
      x: 300,
      ease: Power0.easeNone
    }
  );

  TweenMax.staggerFromTo(
    [".same01", ".same02"],
    1,
    {
      x: 100
    },
    {
      x: 300
    },
    1
  );

  var controller = new ScrollMagic.Controller();

  function alerts() {
    alert("Hello");
  }

  var tl = new TimelineMax({
    //屬性
    repeat: 1,
    yoyo: true
    // onComplete: alerts
  });

  tl.to(".third_01", 1, {
    x: 300
  })
    .to(".third_02", 1, {
      y: 300
    })
    .to(".third_03", 1, {
      x: 100,
      y: 100
    });

  var scene_01 = new ScrollMagic.Scene({
    triggerElement: "#keypoint",
    // duration: 1000,
    reverse: true,
    // triggerHook: 0,
    offset: 200
  })
    .setTween(tl)
    .addIndicators()
    .addTo(controller);

  var animation_02 = TweenMax.to("h1", 1, {
    y: 600,
    ease: Bounce.easeout
  });

  var secen_02 = new ScrollMagic.Scene({
    triggerElement: "#keypoint01"
  })
    .setClassToggle("h1", "active")
    .setClassToggle(".scene", "active")
    .setTween(animation_02) //(選擇器 , classname)
    .addIndicators()
    .addTo(controller);

  var tlts = new TimelineMax();

  tlts.add(
    TweenMax.to(".scrollbox_01", 1, {
      x: 200
    })
  );
  tlts.add(
    TweenMax.to(".scrollbox_02", 1, {
      x: 300
    })
  );
  tlts.add(
    TweenMax.to(".scrollbox_03", 1, {
      x: 400
    })
  );

  var scene_s = new ScrollMagic.Scene({
    triggerElement: "#trigger_05",
    duration: "300%",
    //畫面最上緣
    triggerHook: 0
    //只出現一次
    // reverse: false,
  })
    .setPin(".section_08")
    .setTween(tlts)
    .addIndicators()
    .addTo(controller);
}

window.addEventListener("load", move);
