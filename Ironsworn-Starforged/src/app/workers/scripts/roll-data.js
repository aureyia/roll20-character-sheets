const assetTriggers = {
  "starship": {
    "ability_1": {
      "moves": [
        "Advance"
      ]
    },
    "ability_2": {
      "moves": [
        "Finish an Expedition"
      ],
      "options": [
        {
          "text": "In your starship &#40;dangerous or greater&#41;",
          "method": "inherit",
          "stats": []
        }
      ]
    },
    "ability_3": {
      "moves": [
        "Withstand Damage"
      ],
      "options": [
        {
          "text": "To your Starship",
          "method": "any",
          "stats": [
            "heart"
          ]
        }
      ]
    }
  },
  "engine_upgrade": {
    "ability_1": {
      "moves": [
        "Undertake an Expedition"
      ],
      "options": [
        {
          "text": "In your vehicle",
          "method": "inherit",
          "stats": [
            "edge"
          ]
        }
      ]
    },
    "ability_2": {
      "moves": [
        "Enter the Fray"
      ],
      "options": [
        {
          "text": "In your vehicle &#40;and you choose to boost&#41;",
          "method": "inherit",
          "stats": []
        }
      ]
    },
    "ability_3": {
      "options": [
        {
          "text": "When you make a desperate move to pursue a foe&#44; escape a threat&#44; or get in range &#40;in your vehicle&#41;",
          "method": "inherit",
          "stats": []
        }
      ]
    }
  },
  "expanded_hold": {
    "ability_2": {
      "options": [
        {
          "text": "You make a move to barter or negotiate&#44; and you have at least 1 cargo",
          "method": "inherit",
          "stats": []
        }
      ]
    },
    "ability_3": {
      "options": [
        {
          "text": "When you make a move to outrun a threat and have at least 1 cargo",
          "method": "inherit",
          "stats": []
        }
      ]
    }
  },
  "grappler": {
    "ability_2": {
      "moves": [
        "Ready Grappler"
      ]
    },
    "ability_3": {
      "moves": [
        "Take Decisive Action"
      ],
      "options": [
        {
          "text": "By firing the grappler",
          "method": "inherit",
          "stats": []
        }
      ]
    }
  },
  "heavy_cannons": {
    "ability_1": {
      "moves": [
        "Strike"
      ],
      "options": [
        {
          "text": "When you aim your cannons and use them to [Strike]&#40;Starforged/Moves/Combat/Strike&#41;",
          "method": "inherit",
          "stats": []
        }
      ]
    },
    "ability_2": {
      "moves": [
        "Clash"
      ],
      "options": [
        {
          "text": "Once per fight&#44; when you [Clash]&#40;Starforged/Moves/Combat/Clash&#41; by committing to an all&#45;or&#45;nothing exchange of fire",
          "method": "inherit",
          "stats": []
        }
      ]
    },
    "ability_3": {
      "moves": [
        "Compel",
        "Enter the Fray",
        "Gain Ground"
      ],
      "options": [
        {
          "text": "By bringing your cannons to bear and sending a promise of violence to your foe over communication channels",
          "method": "inherit",
          "stats": []
        }
      ]
    }
  },
  "internal_refit": {
    "ability_1": {
      "moves": [
        "Undertake an Expedition"
      ],
      "options": [
        {
          "text": "On the first leg of your journey &#40;dangerous or greater&#41;",
          "method": "inherit",
          "stats": []
        }
      ]
    },
    "ability_3": {
      "moves": [
        "Enter the Fray"
      ],
      "options": [
        {
          "text": "To oppose an invader within your vessel",
          "method": "inherit",
          "stats": []
        }
      ]
    }
  },
  "medbay": {
    "ability_1": {
      "moves": [
        "Heal"
      ],
      "options": [
        {
          "text": "When you use your medbay to [Heal]&#40;Starforged/Moves/Recover/Heal&#41; yourself or another patient",
          "method": "inherit",
          "stats": []
        }
      ]
    },
    "ability_2": {
      "moves": [
        "Heal"
      ],
      "options": [
        {
          "text": "When you or an ally mark the permanently harmed impact and are brought to the medbay without delay &#40;less than an hour or so&#41;",
          "method": "inherit",
          "stats": []
        }
      ]
    },
    "ability_3": {
      "moves": [
        "Gather Information"
      ],
      "options": [
        {
          "text": "Through an autopsy or medical examination",
          "method": "inherit",
          "stats": []
        }
      ]
    }
  },
  "missile_array": {
    "ability_1": {
      "moves": [
        "Resupply"
      ],
      "options": [
        {
          "text": "In a place where your missiles can be replenished",
          "method": "inherit",
          "stats": []
        }
      ]
    },
    "ability_2": {
      "moves": [
        "Gain Ground"
      ],
      "options": [
        {
          "text": "By locking a missile on target",
          "method": "inherit",
          "stats": []
        }
      ]
    },
    "ability_3": {
      "moves": [
        "Take Decisive Action"
      ],
      "options": [
        {
          "text": "When you have at least 3 ammo and [Take Decisive Action]&#40;Starforged/Moves/Combat/Take_Decisive_Action&#41; by unleashing all of your missiles",
          "method": "inherit",
          "stats": []
        }
      ]
    }
  },
  "overseer": {
    "ability_1": {
      "moves": [
        "Secure an Advantage",
        "Scene Challenge - Scene Challenge",
        "Gain Ground"
      ],
      "options": [
        {
          "text": "By talking through a situation with the overseer AI",
          "method": "any",
          "stats": [
            "attached_asset_condition_meter"
          ]
        }
      ]
    },
    "ability_2": {
      "moves": [
        "Withstand Damage"
      ]
    },
    "ability_3": {
      "moves": [
        "Face Danger",
        "Scene Challenge - Scene Challenge"
      ],
      "options": [
        {
          "text": "By handing over control to the AI in an emergency&#44; or to summon the vehicle remotely within a hazardous situation",
          "method": "any",
          "stats": [
            "attached_asset_condition_meter"
          ]
        }
      ]
    }
  },
  "reinforced_hull": {
    "ability_1": {
      "moves": [
        "Withstand Damage"
      ],
      "options": [
        {
          "text": "To your vehicle with a Reinforced Hull",
          "method": "inherit",
          "stats": []
        }
      ]
    },
    "ability_2": {
      "moves": [
        "Enter the Fray"
      ],
      "options": [
        {
          "text": "Against a foe who knows your reputation",
          "method": "inherit",
          "stats": []
        }
      ]
    },
    "ability_3": {
      "moves": [
        "React Under Fire"
      ],
      "options": [
        {
          "text": "By letting your reinforced hull take the hit",
          "method": "inherit",
          "stats": []
        }
      ]
    }
  },
  "research_lab": {
    "ability_1": {
      "moves": [
        "Secure an Advantage",
        "Scene Challenge - Scene Challenge",
        "Gather Information"
      ],
      "options": [
        {
          "text": "Through careful analysis or experimentation &#40;in your research lab&#41;",
          "method": "inherit",
          "stats": []
        }
      ]
    },
    "ability_2": {
      "moves": [
        "Face Danger",
        "Scene Challenge - Scene Challenge"
      ],
      "options": [
        {
          "text": "To isolate or secure a hazardous specimen",
          "method": "inherit",
          "stats": []
        }
      ]
    },
    "ability_3": {
      "moves": [
        "Fulfill Your Vow"
      ],
      "options": [
        {
          "text": "To undertake a long&#45;term research project &#40;extreme or greater&#41;",
          "method": "inherit",
          "stats": []
        }
      ]
    }
  },
  "sensor_array": {
    "ability_1": {
      "moves": [
        "Undertake an Expedition"
      ],
      "options": [
        {
          "text": "In your vehicle",
          "method": "inherit",
          "stats": [
            "wits"
          ]
        }
      ]
    },
    "ability_2": {
      "moves": [
        "Gather Information"
      ],
      "options": [
        {
          "text": "By scanning your vehicle&#39;s surroundings or analyzing a nearby object &#40;and choosing an automated scan&#41;",
          "method": "inherit",
          "stats": []
        }
      ]
    },
    "ability_3": {
      "moves": [
        "Face Danger",
        "Scene Challenge - Scene Challenge"
      ],
      "options": [
        {
          "text": "To detect a hidden threat",
          "method": "any",
          "stats": [
            "attached_asset_condition_meter"
          ]
        }
      ]
    }
  },
  "shields": {
    "ability_2": {
      "moves": [
        "React Under Fire"
      ],
      "options": [
        {
          "text": "By letting your shields take the blow",
          "method": "any",
          "stats": [
            "starforged/assets/module/shields/condition_meter"
          ]
        }
      ]
    },
    "ability_3": {
      "moves": [
        "Enter the Fray"
      ],
      "options": [
        {
          "text": "In your vehicle",
          "method": "inherit",
          "stats": []
        }
      ]
    }
  },
  "stealth_tech": {
    "ability_1": {
      "moves": [
        "Enter the Fray"
      ],
      "options": [
        {
          "text": "By ambushing an unaware foe &#40;in your vehicle&#41;",
          "method": "inherit",
          "stats": []
        }
      ]
    },
    "ability_2": {
      "moves": [
        "Undertake an Expedition"
      ],
      "options": [
        {
          "text": "When you travel stealthily &#40;in your vehicle&#41;",
          "method": "inherit",
          "stats": [
            "shadow"
          ]
        }
      ]
    },
    "ability_3": {
      "moves": [
        "Strike"
      ],
      "options": [
        {
          "text": "You are poised to [Strike]&#40;Starforged/Moves/Combat/Strike&#41; from hiding &#40;and choose to strike hard&#41;",
          "method": "any",
          "stats": [
            "shadow"
          ]
        }
      ]
    }
  },
  "vehicle_bay": {
    "ability_1": {
      "moves": [
        "Repair"
      ],
      "options": [
        {
          "text": "When you [Repair]&#40;Starforged/Moves/Recover/Repair&#41; a battered support vehicle",
          "method": "inherit",
          "stats": []
        }
      ]
    },
    "ability_2": {
      "moves": [
        "Withstand Damage"
      ]
    },
    "ability_3": {
      "options": [
        {
          "text": "When you make a move to launch from or land on your command vehicle in a perilous situation or environment",
          "method": "inherit",
          "stats": []
        }
      ]
    }
  },
  "workshop": {
    "ability_1": {
      "moves": [
        "Repair"
      ],
      "options": [
        {
          "text": "In the field &#40;with your workshop&#41;",
          "method": "inherit",
          "stats": []
        }
      ]
    },
    "ability_2": {
      "options": [
        {
          "text": "When you make a move in your workshop to craft&#44; modify&#44; deactivate&#44; or disassemble a device or machine",
          "method": "inherit",
          "stats": []
        }
      ]
    },
    "ability_3": {
      "moves": [
        "Fulfill Your Vow"
      ],
      "options": [
        {
          "text": "To undertake a long&#45;term engineering project &#40;extreme or greater&#41;",
          "method": "inherit",
          "stats": []
        }
      ]
    }
  },
  "exosuit": {
    "ability_1": {
      "options": [
        {
          "text": "When you make a forceful&#44; damaging&#44; or resistant move in your Exosuit",
          "method": "inherit",
          "stats": []
        }
      ]
    },
    "ability_2": {
      "options": [
        {
          "text": "You use your Exosuit&#39;s thrusters to maneuver in zero&#45;g&#44; make thrust&#45;assisted leaps&#44; or drop to a surface from altitude",
          "method": "inherit",
          "stats": []
        }
      ]
    },
    "ability_3": {
      "moves": [
        "Withstand Damage"
      ],
      "options": [
        {
          "text": "To your Exosuit",
          "method": "inherit",
          "stats": []
        }
      ]
    }
  },
  "hoverbike": {
    "ability_1": {
      "moves": [
        "Undertake an Expedition"
      ],
      "options": [
        {
          "text": "On your hoverbike",
          "method": "inherit",
          "stats": [
            "edge"
          ]
        }
      ]
    },
    "ability_2": {
      "options": [
        {
          "text": "When you fire your hoverbike&#39;s afterburner and make a move to perform a risky maneuver",
          "method": "inherit",
          "stats": []
        }
      ]
    }
  },
  "rover": {
    "ability_1": {
      "moves": [
        "Finish an Expedition"
      ],
      "options": [
        {
          "text": "In your rover",
          "method": "inherit",
          "stats": []
        }
      ]
    },
    "ability_3": {
      "moves": [
        "Face Danger",
        "Scene Challenge - Scene Challenge",
        "React Under Fire"
      ],
      "options": [
        {
          "text": "By taking a hit or crashing through an obstacle",
          "method": "any",
          "stats": [
            "starforged/assets/support_vehicle/rover/condition_meter"
          ]
        }
      ]
    }
  },
  "service_pod": {
    "ability_1": {
      "options": [
        {
          "text": "When you make a move using the pod’s manipulator arms to perform a delicate or forceful task",
          "method": "inherit",
          "stats": []
        }
      ]
    },
    "ability_2": {
      "moves": [
        "Face Danger",
        "Scene Challenge - Scene Challenge",
        "Gain Ground",
        "React Under Fire"
      ],
      "options": [
        {
          "text": "By maneuvering your pod through a hazardous or obstructed area",
          "method": "any",
          "stats": [
            "starforged/assets/support_vehicle/service_pod/condition_meter"
          ]
        }
      ]
    },
    "ability_3": {
      "options": [
        {
          "text": "When you make a move while controlling the pod and push its capabilities to the limit",
          "method": "inherit",
          "stats": []
        }
      ]
    }
  },
  "shuttle": {
    "ability_2": {
      "moves": [
        "Face Danger",
        "Scene Challenge - Scene Challenge",
        "React Under Fire"
      ],
      "options": [
        {
          "text": "To navigate through hazardous skies&#44; avoid obstacles&#44; or evade an attack",
          "method": "inherit",
          "stats": []
        }
      ]
    },
    "ability_3": {
      "moves": [
        "Withstand Damage"
      ],
      "options": [
        {
          "text": "To your shuttle",
          "method": "any",
          "stats": []
        }
      ]
    }
  },
  "skiff": {
    "ability_1": {
      "moves": [
        "Undertake an Expedition",
        "Set a Course"
      ],
      "options": [
        {
          "text": "Rely on the skiff&#39;s simple durability",
          "method": "any",
          "stats": [
            "starforged/assets/support_vehicle/skiff/condition_meter"
          ]
        }
      ]
    },
    "ability_2": {
      "moves": [
        "Strike",
        "Clash"
      ],
      "options": [
        {
          "text": "By firing the skiff&#39;s cannon",
          "method": "any",
          "stats": [
            "starforged/assets/support_vehicle/skiff/condition_meter"
          ]
        }
      ]
    }
  },
  "snub_fighter": {
    "ability_1": {
      "moves": [
        "Enter the Fray"
      ],
      "options": [
        {
          "text": "In your snub fighter",
          "method": "any",
          "stats": [
            "starforged/assets/support_vehicle/snub_fighter/condition_meter"
          ]
        }
      ]
    },
    "ability_2": {
      "moves": [
        "Strike",
        "Clash"
      ],
      "options": [
        {
          "text": "In your snub fighter",
          "method": "inherit",
          "stats": []
        }
      ]
    }
  },
  "ace": {
    "ability_1": {
      "moves": [
        "Face Danger",
        "Scene Challenge - Scene Challenge",
        "React Under Fire"
      ],
      "options": [
        {
          "text": "By guiding your vehicle through a hazard or out of harm’s way",
          "method": "inherit",
          "stats": []
        }
      ]
    },
    "ability_2": {
      "moves": [
        "Gain Ground"
      ],
      "options": [
        {
          "text": "By maneuvering your vehicle against a foe",
          "method": "any",
          "stats": []
        }
      ]
    },
    "ability_3": {
      "moves": [
        "Endure Stress"
      ],
      "options": [
        {
          "text": "While piloting a vehicle",
          "method": "any",
          "stats": [
            "vehicle_integrity"
          ]
        }
      ]
    }
  },
  "archer": {
    "ability_2": {
      "moves": [
        "Enter the Fray"
      ],
      "options": [
        {
          "text": "By unleashing a volley of bow shots",
          "method": "any",
          "stats": [
            "starforged/assets/path/archer/condition_meter"
          ]
        }
      ]
    },
    "ability_3": {
      "options": [
        {
          "text": "Using a specialized projectile such as a zip line&#44; explosive&#44; or electromagnetic disrupter",
          "method": "inherit",
          "stats": []
        }
      ]
    }
  },
  "armored": {
    "ability_1": {
      "moves": [
        "Face Danger",
        "Scene Challenge - Scene Challenge",
        "React Under Fire",
        "Clash"
      ],
      "options": [
        {
          "text": "While putting trust in your armor’s strength against physical attacks or impact",
          "method": "inherit",
          "stats": []
        }
      ]
    },
    "ability_2": {},
    "ability_3": {
      "moves": [
        "Endure Harm"
      ],
      "options": [
        {
          "text": "By letting your armor take the hit",
          "method": "inherit",
          "stats": []
        }
      ]
    }
  },
  "artist": {
    "ability_1": {
      "options": [
        {
          "text": "When you make a move to craft an artistic work&#44; present an artistic gift or performance&#44; or leave your artistic mark on an item or location",
          "method": "inherit",
          "stats": []
        }
      ]
    },
    "ability_2": {
      "moves": [
        "Gather Information",
        "Secure an Advantage",
        "Scene Challenge - Scene Challenge"
      ],
      "options": [
        {
          "text": "By studying the aesthetics of a being or culture",
          "method": "inherit",
          "stats": []
        }
      ]
    }
  },
  "augmented": {
    "ability_1": {
      "options": [
        {
          "text": "When you make a move directly aided by your augment",
          "method": "inherit",
          "stats": []
        }
      ]
    },
    "ability_3": {
      "moves": [
        "Endure Harm",
        "Face Death"
      ]
    }
  },
  "bannersworn": {
    "ability_1": {
      "moves": [
        "Swear an Iron Vow"
      ],
      "options": [
        {
          "text": "In service to your bound clan&#44; faction&#44; or creed",
          "method": "inherit",
          "stats": []
        }
      ]
    },
    "ability_2": {
      "moves": [
        "Forge a Bond"
      ],
      "options": [
        {
          "text": "With anyone of your ideology",
          "method": "inherit",
          "stats": []
        }
      ]
    },
    "ability_3": {
      "options": [
        {
          "text": "When you make a progress move in direct service to your ideology",
          "method": "inherit",
          "stats": []
        }
      ]
    }
  },
  "blademaster": {
    "ability_1": {
      "moves": [
        "Clash",
        "Strike"
      ],
      "options": [
        {
          "text": "When you wield a bladed weapon in close quarters",
          "method": "inherit",
          "stats": []
        }
      ]
    },
    "ability_2": {
      "moves": [
        "Gain Ground"
      ],
      "options": [
        {
          "text": "By moving into close quarters against your foe &#40;and choosing to evade&#41;",
          "method": "inherit",
          "stats": [
            "edge"
          ]
        }
      ]
    },
    "ability_3": {
      "moves": [
        "Swear an Iron Vow"
      ],
      "options": [
        {
          "text": "By binding your promise to your iconic blade",
          "method": "any",
          "stats": []
        }
      ]
    }
  },
  "bounty_hunter": {
    "ability_1": {
      "moves": [
        "Fulfill Your Vow"
      ],
      "options": [
        {
          "text": "On a hunt",
          "method": "inherit",
          "stats": []
        }
      ]
    },
    "ability_2": {
      "moves": [
        "Gather Information"
      ],
      "options": [
        {
          "text": "Related to a bounty",
          "method": "inherit",
          "stats": []
        }
      ]
    },
    "ability_3": {
      "moves": [
        "Take Decisive Action"
      ],
      "options": [
        {
          "text": "In a fight against a bounty target or their agents",
          "method": "inherit",
          "stats": []
        }
      ]
    }
  },
  "brawler": {
    "ability_1": {
      "moves": [
        "Gain Ground"
      ],
      "options": [
        {
          "text": "By attempting to disarm&#44; trip&#44; shove&#44; grapple&#44; or stun your foe &#40;while fighting unarmed or with a close quarters weapon&#41;",
          "method": "inherit",
          "stats": []
        }
      ]
    },
    "ability_2": {
      "moves": [
        "Clash"
      ],
      "options": [
        {
          "text": "Defensively",
          "method": "inherit",
          "stats": []
        }
      ]
    },
    "ability_3": {
      "moves": [
        "Enter the Fray"
      ],
      "options": [
        {
          "text": "Already positioned in close quarters against your foe",
          "method": "inherit",
          "stats": []
        }
      ]
    }
  },
  "courier": {
    "ability_1": {
      "moves": [
        "Undertake an Expedition",
        "Set a Course"
      ]
    },
    "ability_2": {
      "moves": [
        "Fulfill Your Vow"
      ],
      "options": [
        {
          "text": "To an unbonded connection by completing a courier mission",
          "method": "any",
          "stats": []
        }
      ]
    },
    "ability_3": {
      "moves": [
        "Sojourn"
      ],
      "options": [
        {
          "text": "During a courier mission",
          "method": "any",
          "stats": [
            "starforged/assets/path/courier/condition_meter"
          ]
        }
      ]
    }
  },
  "demolitionist": {
    "ability_1": {
      "options": [
        {
          "text": "To attack&#44; destroy&#44; or sabotage by deploying or triggering an explosive device",
          "method": "inherit",
          "stats": []
        }
      ]
    },
    "ability_2": {
      "options": [
        {
          "text": "To craft&#44; modify&#44; or disarm an explosive device&#44; or if you threaten or provoke by arming an explosive device",
          "method": "any",
          "stats": []
        }
      ]
    },
    "ability_3": {
      "moves": [
        "Take Decisive Action"
      ],
      "options": [
        {
          "text": "When your momentum is at its max&#44; and you reset momentum &#40;before rolling&#41; to trigger an explosive device",
          "method": "inherit",
          "stats": []
        }
      ]
    }
  },
  "devotant": {
    "ability_1": {
      "moves": [
        "Secure an Advantage",
        "Scene Challenge - Scene Challenge",
        "Gain Ground"
      ],
      "options": [
        {
          "text": "By calling on your god&#44; power&#44; or entity for guidance or aid",
          "method": "any",
          "stats": [
            "starforged/assets/path/devotant"
          ]
        }
      ]
    },
    "ability_2": {
      "moves": [
        "Fulfill Your Vow"
      ],
      "options": [
        {
          "text": "On a divine quest &#40;formidable or greater&#41;",
          "method": "any",
          "stats": []
        }
      ]
    },
    "ability_3": {
      "moves": [
        "Hearten"
      ],
      "options": [
        {
          "text": "Through contemplation or sharing of your faith",
          "method": "any",
          "stats": [
            "starforged/assets/path/devotant"
          ]
        }
      ]
    }
  },
  "diplomat": {
    "ability_1": {
      "moves": [
        "Fulfill Your Vow"
      ],
      "options": [
        {
          "text": "On a diplomatic mission &#40;formidable or greater&#41;",
          "method": "inherit",
          "stats": []
        }
      ]
    },
    "ability_2": {
      "options": [
        {
          "text": "To defuse&#44; reason&#44; or negotiate",
          "method": "inherit",
          "stats": []
        }
      ]
    },
    "ability_3": {
      "moves": [
        "Sojourn"
      ]
    }
  },
  "empath": {
    "ability_2": {
      "moves": [
        "Read Heart"
      ]
    },
    "ability_3": {
      "moves": [
        "Face Danger",
        "Scene Challenge - Scene Challenge"
      ],
      "options": [
        {
          "text": "To soothe a being&#39;s distress by creating an empathic bond",
          "method": "any",
          "stats": [
            "spirit"
          ]
        }
      ]
    }
  },
  "explorer": {
    "ability_1": {
      "moves": [
        "Finish an Expedition"
      ]
    },
    "ability_3": {
      "moves": [
        "Secure an Advantage",
        "Scene Challenge - Scene Challenge"
      ],
      "options": [
        {
          "text": "By studying a newfound place from a safe position",
          "method": "inherit",
          "stats": []
        }
      ]
    }
  },
  "fated": {
    "ability_1": {
      "moves": [
        "Fulfill Your Vow"
      ],
      "options": [
        {
          "text": "On your background vow",
          "method": "strong hit",
          "stats": []
        }
      ]
    },
    "ability_2": {
      "moves": [
        "Face Death",
        "Face Desolation"
      ],
      "options": [
        {
          "text": "While your background vow is unfulfilled",
          "method": "strong hit",
          "stats": []
        }
      ]
    },
    "ability_3": {
      "options": [
        {
          "text": "When you make any progress move directly related to your background vow",
          "method": "inherit",
          "stats": []
        }
      ]
    }
  },
  "firebrand": {
    "ability_2": {
      "moves": [
        "Endure Harm"
      ]
    },
    "ability_3": {
      "moves": [
        "Gain Ground",
        "Strike"
      ],
      "options": [
        {
          "text": "When you have at least +3 fire and unleash hell",
          "method": "strong hit",
          "stats": []
        }
      ]
    }
  },
  "fugitive": {
    "ability_2": {
      "options": [
        {
          "text": "By hiding&#44; concealing your identity&#44; or fleeing from a pursuer",
          "method": "inherit",
          "stats": []
        }
      ]
    }
  },
  "gearhead": {
    "ability_1": {
      "options": [
        {
          "text": "To craft&#44; repair&#44; repurpose&#44; or modify equipment or technology",
          "method": "inherit",
          "stats": []
        }
      ]
    },
    "ability_2": {
      "moves": [
        "Gather Information"
      ],
      "options": [
        {
          "text": "By studying or disassembling a machine or device",
          "method": "inherit",
          "stats": []
        }
      ]
    },
    "ability_3": {
      "moves": [
        "Secure an Advantage",
        "Scene Challenge - Scene Challenge"
      ],
      "options": [
        {
          "text": "By spending sufficient time &#40;a couple of hours or more&#41; to assemble or enhance a device for a powerful but limited role",
          "method": "inherit",
          "stats": []
        }
      ]
    }
  },
  "gunner": {
    "ability_1": {
      "moves": [
        "Strike"
      ],
      "options": [
        {
          "text": "If you [Strike]&#40;Starforged/Moves/Combat/Strike&#41; with a heavy ranged personal weapon and choose to make them hurt",
          "method": "inherit",
          "stats": []
        }
      ]
    },
    "ability_2": {
      "moves": [
        "Take Decisive Action"
      ],
      "options": [
        {
          "text": "By emptying your gun as you [Sacrifice Resources]&#40;Starforged/Moves/Suffer/Sacrifice_Resources&#41; &#40;&#45;1&#41;",
          "method": "inherit",
          "stats": []
        }
      ]
    },
    "ability_3": {
      "moves": [
        "Enter the Fray",
        "Endure Stress"
      ],
      "options": [
        {
          "text": "While wielding your favorite gun",
          "method": "inherit",
          "stats": []
        }
      ]
    }
  },
  "gunslinger": {
    "ability_1": {
      "moves": [
        "Enter the Fray"
      ],
      "options": [
        {
          "text": "By facing off against your foe",
          "method": "inherit",
          "stats": [
            "heart"
          ]
        },
        {
          "text": "By preparing to act without tipping off your foe",
          "method": "inherit",
          "stats": [
            "shadow"
          ]
        }
      ]
    },
    "ability_2": {
      "moves": [
        "Gain Ground",
        "React Under Fire"
      ],
      "options": [
        {
          "text": "By moving into cover",
          "method": "inherit",
          "stats": []
        }
      ]
    },
    "ability_3": {
      "moves": [
        "Compel",
        "Gain Ground"
      ],
      "options": [
        {
          "text": "With the threat of violence by holding someone at gunpoint",
          "method": "inherit",
          "stats": []
        }
      ]
    }
  },
  "haunted": {
    "ability_1": {
      "options": [
        {
          "text": "When you make a move to call upon the insight of the spirit that haunts you",
          "method": "inherit",
          "stats": []
        }
      ]
    },
    "ability_2": {
      "moves": [
        "Face Death"
      ],
      "options": [
        {
          "text": "Guided by the spirit that haunts you",
          "method": "inherit",
          "stats": []
        }
      ]
    },
    "ability_3": {}
  },
  "healer": {
    "ability_1": {
      "moves": [
        "Heal"
      ],
      "options": [
        {
          "text": "Give medical care to another character",
          "method": "inherit",
          "stats": []
        }
      ]
    },
    "ability_2": {
      "moves": [
        "Gather Information"
      ],
      "options": [
        {
          "text": "By studying medical evidence or biological remains",
          "method": "inherit",
          "stats": []
        }
      ]
    }
  },
  "infiltrator": {
    "ability_1": {
      "options": [
        {
          "text": "To break into a secure site&#44; infiltrate a protected area&#44; or hack or manipulate a secure system",
          "method": "inherit",
          "stats": []
        }
      ]
    },
    "ability_2": {
      "moves": [
        "Face Danger",
        "Scene Challenge - Scene Challenge",
        "Secure an Advantage",
        "Scene Challenge - Scene Challenge"
      ],
      "options": [
        {
          "text": "To establish a false identity",
          "method": "inherit",
          "stats": []
        }
      ]
    },
    "ability_3": {
      "moves": [
        "Check Your Gear"
      ],
      "options": [
        {
          "text": "For a device with a specific function to aid in infiltration&#44; espionage&#44; or sabotage",
          "method": "inherit",
          "stats": []
        }
      ]
    }
  },
  "kinetic": {
    "ability_1": {
      "options": [
        {
          "text": "When you are in a risky situation and draw on your kinetic powers to make a move",
          "method": "inherit",
          "stats": []
        }
      ]
    },
    "ability_3": {
      "options": [
        {
          "text": "Your momentum is at its max&#44; and you attempt great kinetic feats &#40;such as manipulating large objects and creating destructive bursts of concussive force&#41;",
          "method": "strong hit",
          "stats": []
        }
      ]
    }
  },
  "leader": {
    "ability_1": {
      "moves": [
        "Aid Your Ally",
        "Secure an Advantage",
        "Scene Challenge - Scene Challenge",
        "Gain Ground"
      ],
      "options": [
        {
          "text": "When you [Aid Your Ally]&#40;Starforged/Moves/Adventure/Aid_Your_Ally&#41; through leadership&#44; coordination&#44; or planning",
          "method": "inherit",
          "stats": []
        }
      ]
    },
    "ability_2": {
      "moves": [
        "Enter the Fray"
      ],
      "options": [
        {
          "text": "By coordinating with your team as they wade into the fight",
          "method": "inherit",
          "stats": []
        }
      ]
    },
    "ability_3": {
      "options": [
        {
          "text": "To influence someone &#40;not an ally&#41; through leadership",
          "method": "inherit",
          "stats": []
        }
      ]
    }
  },
  "looper": {
    "ability_1": {
      "moves": [
        "Endure Harm",
        "Companion Takes a Hit",
        "Withstand Damage"
      ]
    }
  },
  "lore_hunter": {
    "ability_1": {
      "moves": [
        "Fulfill Your Vow"
      ],
      "options": [
        {
          "text": "To recover valuable knowledge or an extraordinary relic &#40;formidable or greater&#41;",
          "method": "inherit",
          "stats": []
        }
      ]
    },
    "ability_2": {
      "options": [
        {
          "text": "To conduct extended research or study",
          "method": "inherit",
          "stats": []
        }
      ]
    },
    "ability_3": {
      "moves": [
        "Secure an Advantage",
        "Scene Challenge - Scene Challenge",
        "Gain Ground"
      ],
      "options": [
        {
          "text": "When you recall esoteric knowledge",
          "method": "inherit",
          "stats": []
        }
      ]
    }
  },
  "loyalist": {
    "ability_1": {
      "moves": [
        "Aid Your Ally",
        "Secure an Advantage",
        "Scene Challenge - Scene Challenge",
        "Gain Ground"
      ],
      "options": [
        {
          "text": "When you [Aid Your Ally]&#40;Starforged/Moves/Adventure/Aid_Your_Ally&#41;",
          "method": "inherit",
          "stats": []
        }
      ]
    },
    "ability_3": {
      "options": [
        {
          "text": "When you stand with your ally as they make a progress move",
          "method": "inherit",
          "stats": []
        }
      ]
    }
  },
  "mercenary": {
    "ability_1": {
      "moves": [
        "Fulfill Your Vow"
      ],
      "options": [
        {
          "text": "To wage war or defend others from war in exchange for payment or promises",
          "method": "inherit",
          "stats": []
        }
      ]
    },
    "ability_2": {
      "moves": [
        "Make a Connection"
      ],
      "options": [
        {
          "text": "By searching out or making contact with someone in need of your services",
          "method": "inherit",
          "stats": []
        }
      ]
    },
    "ability_3": {
      "moves": [
        "Resupply"
      ],
      "options": [
        {
          "text": "By looting the field of battle in the aftermath of a fight",
          "method": "inherit",
          "stats": []
        }
      ]
    }
  },
  "naturalist": {
    "ability_1": {
      "moves": [
        "Secure an Advantage",
        "Scene Challenge - Scene Challenge",
        "Gather Information"
      ],
      "options": [
        {
          "text": "Using your knowledge of lifeforms or planetside ecosystems",
          "method": "inherit",
          "stats": []
        }
      ]
    },
    "ability_2": {
      "options": [
        {
          "text": "By taking a risky action to pacify&#44; avoid&#44; or outwit a creature",
          "method": "inherit",
          "stats": []
        }
      ]
    },
    "ability_3": {
      "moves": [
        "Face Danger",
        "Scene Challenge - Scene Challenge"
      ],
      "options": [
        {
          "text": "Against an environmental threat",
          "method": "inherit",
          "stats": []
        }
      ]
    }
  },
  "navigator": {
    "ability_1": {
      "moves": [
        "Set a Course"
      ]
    },
    "ability_2": {
      "moves": [
        "Gather Information"
      ],
      "options": [
        {
          "text": "About a location by studying your charts",
          "method": "inherit",
          "stats": []
        }
      ]
    },
    "ability_3": {
      "moves": [
        "Undertake an Expedition"
      ]
    }
  },
  "outcast": {
    "ability_1": {
      "moves": [
        "Hearten"
      ],
      "options": [
        {
          "text": "In isolation&#44; attempting find solace in fond memories or a hopeful wish.",
          "method": "inherit",
          "stats": []
        }
      ]
    },
    "ability_3": {
      "moves": [
        "Sojourn"
      ]
    }
  },
  "scavenger": {
    "ability_1": {
      "moves": [
        "Gather Information"
      ],
      "options": [
        {
          "text": "By scavenging a wreck&#44; ruin&#44; or abandoned site",
          "method": "inherit",
          "stats": []
        }
      ]
    },
    "ability_2": {
      "moves": [
        "Secure an Advantage",
        "Scene Challenge - Scene Challenge"
      ],
      "options": [
        {
          "text": "To cobble together an ad hoc tool&#44; device&#44; or weapon",
          "method": "inherit",
          "stats": []
        }
      ]
    },
    "ability_3": {
      "moves": [
        "Check Your Gear"
      ],
      "options": [
        {
          "text": "Scavenger",
          "method": "highest",
          "stats": [
            "wits",
            "supply"
          ]
        }
      ]
    }
  },
  "scoundrel": {
    "ability_1": {
      "options": [
        {
          "text": "By lying&#44; bluffing&#44; stealing&#44; or cheating",
          "method": "inherit",
          "stats": []
        }
      ]
    },
    "ability_2": {
      "moves": [
        "Make a Connection"
      ],
      "options": [
        {
          "text": "To search out a new contact",
          "method": "any",
          "stats": [
            "shadow"
          ]
        }
      ]
    }
  },
  "seer": {
    "ability_2": {
      "moves": [
        "Gather Information"
      ],
      "options": [
        {
          "text": "When you focus or meditate to [Gather Information]&#40;Starforged/Moves/Adventure/Gather_Information&#41; about a place&#44; being&#44; or situation &#40;in person or remotely&#41;",
          "method": "any",
          "stats": [
            "spirit"
          ]
        }
      ]
    },
    "ability_3": {
      "moves": [
        "Sojourn"
      ]
    }
  },
  "shade": {
    "ability_1": {
      "options": [
        {
          "text": "When you are veiled and make a move to ambush&#44; hide&#44; or sneak &#40;in darkness&#41;",
          "method": "inherit",
          "stats": []
        }
      ]
    }
  },
  "slayer": {
    "ability_1": {
      "options": [
        {
          "text": "To investigate&#44; track&#44; or stalk an inhuman foe",
          "method": "inherit",
          "stats": []
        }
      ]
    },
    "ability_2": {
      "moves": [
        "Fulfill Your Vow"
      ],
      "options": [
        {
          "text": "To slay an inhuman foe in service to a community &#40;formidable or greater&#41;",
          "method": "inherit",
          "stats": []
        }
      ]
    },
    "ability_3": {
      "moves": [
        "Enter the Fray"
      ],
      "options": [
        {
          "text": "With an objective to slay an inhuman foe",
          "method": "inherit",
          "stats": []
        }
      ]
    }
  },
  "sleuth": {
    "ability_1": {
      "moves": [
        "Swear an Iron Vow"
      ],
      "options": [
        {
          "text": "To solve a murder&#44; disappearance&#44; theft&#44; or other mystery &#40;no greater than formidable&#41;",
          "method": "inherit",
          "stats": []
        }
      ]
    },
    "ability_2": {
      "options": [
        {
          "text": "To avoid detection as you put a person or place under surveillance",
          "method": "inherit",
          "stats": []
        }
      ]
    },
    "ability_3": {
      "moves": [
        "Make a Connection"
      ],
      "options": [
        {
          "text": "With a potential informant",
          "method": "weak hit",
          "stats": []
        }
      ]
    }
  },
  "sniper": {
    "ability_2": {
      "moves": [
        "Strike"
      ],
      "options": [
        {
          "text": "From a distance with time enough to line up your shot",
          "method": "any",
          "stats": [
            "wits"
          ]
        }
      ]
    },
    "ability_3": {
      "moves": [
        "Gain Ground"
      ],
      "options": [
        {
          "text": "By taking careful aim",
          "method": "inherit",
          "stats": []
        }
      ]
    }
  },
  "tech": {
    "ability_1": {
      "options": [
        {
          "text": "To configure&#44; optimize&#44; hack&#44; or disrupt an electronic system",
          "method": "inherit",
          "stats": []
        }
      ]
    },
    "ability_2": {
      "moves": [
        "Withstand Damage"
      ]
    },
    "ability_3": {
      "moves": [
        "Face Danger",
        "Scene Challenge - Scene Challenge"
      ],
      "options": [
        {
          "text": "By creating a computer program to perform a specific&#44; complex function",
          "method": "inherit",
          "stats": []
        }
      ]
    }
  },
  "trader": {
    "ability_1": {
      "moves": [
        "Sojourn",
        "Compel"
      ],
      "options": [
        {
          "text": "Trader",
          "method": "any",
          "stats": [
            "supply"
          ]
        }
      ]
    },
    "ability_2": {
      "moves": [
        "Resupply"
      ],
      "options": [
        {
          "text": "By bartering with a merchant or supplier connection",
          "method": "inherit",
          "stats": []
        }
      ]
    },
    "ability_3": {
      "moves": [
        "Make a Connection"
      ]
    }
  },
  "vestige": {
    "ability_1": {
      "moves": [
        "Face Death",
        "Face Desolation"
      ]
    },
    "ability_2": {
      "moves": [
        "Secure an Advantage",
        "Scene Challenge - Scene Challenge",
        "Compel"
      ],
      "options": [
        {
          "text": "Through a tale&#44; performance&#44; or ceremony",
          "method": "inherit",
          "stats": []
        }
      ]
    },
    "ability_3": {
      "options": [
        {
          "text": "When you make a move directly aided by the relic",
          "method": "inherit",
          "stats": []
        }
      ]
    }
  },
  "veteran": {
    "ability_2": {
      "moves": [
        "Make a Connection"
      ]
    },
    "ability_3": {
      "moves": [
        "Secure an Advantage",
        "Scene Challenge - Scene Challenge",
        "Gain Ground"
      ],
      "options": [
        {
          "text": "By recounting or recalling a hard&#45;won lesson from your battlefield experiences",
          "method": "inherit",
          "stats": []
        }
      ]
    }
  },
  "voidborn": {
    "ability_2": {
      "moves": [
        "Hearten"
      ],
      "options": [
        {
          "text": "Within a spacebound community",
          "method": "inherit",
          "stats": []
        }
      ]
    },
    "ability_3": {
      "options": [
        {
          "text": "To perform an agile physical maneuver &#40;such as leaping or evading&#41; in a low gravity environment",
          "method": "inherit",
          "stats": []
        }
      ]
    }
  },
  "weapon_master": {
    "ability_1": {
      "moves": [
        "Gain Ground"
      ],
      "options": [
        {
          "text": "By switching weapons or changing tactics in personal combat &#40;once per fight&#41;",
          "method": "strong hit",
          "stats": []
        }
      ]
    },
    "ability_2": {
      "moves": [
        "Strike"
      ],
      "options": [
        {
          "text": "Using a personal weapon which has limited ammo or a single&#45;use mode",
          "method": "inherit",
          "stats": []
        }
      ]
    },
    "ability_3": {
      "moves": [
        "Secure an Advantage",
        "Scene Challenge - Scene Challenge"
      ],
      "options": [
        {
          "text": "By suiting up and gathering your gear for a perilous encounter or mission",
          "method": "any",
          "stats": [
            "supply"
          ]
        }
      ]
    }
  },
  "crew_commander": {
    "ability_1": {
      "moves": [
        "Face Danger"
      ],
      "options": [
        {
          "text": "As a test of your leadership",
          "method": "any",
          "stats": [
            "starforged/assets/path/crew_commander/condition_meter"
          ]
        }
      ]
    },
    "ability_3": {
      "moves": [
        "Compel"
      ],
      "options": [
        {
          "text": "[Compel]&#40;Starforged/Moves/Adventure/Compel&#41; your crew to action when when your command is 0 and the situation desperate",
          "method": "any",
          "stats": []
        }
      ]
    }
  },
  "banshee": {
    "ability_1": {
      "moves": [
        "Undertake an Expedition",
        "Set a Course"
      ],
      "options": [
        {
          "text": "While riding your banshee",
          "method": "any",
          "stats": [
            "starforged/assets/companion/banshee/condition_meter"
          ]
        }
      ]
    },
    "ability_2": {
      "options": [
        {
          "text": "To detect a threat or avoid a fight &#40;while astride your banshee&#41;",
          "method": "inherit",
          "stats": []
        }
      ]
    },
    "ability_3": {
      "moves": [
        "Enter the Fray",
        "Gain Ground",
        "React Under Fire",
        "Strike",
        "Clash",
        "Battle"
      ],
      "options": [
        {
          "text": "When aided by your banshee",
          "method": "inherit",
          "stats": []
        }
      ]
    }
  },
  "combat_bot": {
    "ability_1": {
      "moves": [
        "Clash"
      ],
      "options": [
        {
          "text": "Aided by your combat bot",
          "method": "inherit",
          "stats": []
        }
      ]
    },
    "ability_2": {
      "moves": [
        "Compel",
        "Gain Ground"
      ],
      "options": [
        {
          "text": "Using the threat of violence while the bot brings its weapons to bear",
          "method": "any",
          "stats": [
            "starforged/assets/companion/combat_bot/condition_meter"
          ]
        }
      ]
    },
    "ability_3": {
      "moves": [
        "React Under Fire"
      ],
      "options": [
        {
          "text": "Once per fight&#44; by using the combat bot to draw fire or create a diversion",
          "method": "any",
          "stats": [
            "starforged/assets/companion/combat_bot/condition_meter"
          ]
        }
      ]
    }
  },
  "glowcat": {
    "ability_1": {
      "moves": [
        "Secure an Advantage",
        "Scene Challenge - Scene Challenge"
      ],
      "options": [
        {
          "text": "By studying your glowcat’s reactions in a charged interaction",
          "method": "inherit",
          "stats": []
        }
      ]
    },
    "ability_2": {
      "moves": [
        "Compel"
      ],
      "options": [
        {
          "text": "When your glowcat’s reactions help guide your approach",
          "method": "inherit",
          "stats": []
        }
      ]
    },
    "ability_3": {
      "moves": [
        "Endure Stress"
      ],
      "options": [
        {
          "text": "In the company of the glowcat",
          "method": "inherit",
          "stats": []
        }
      ]
    }
  },
  "protocol_bot": {
    "ability_1": {
      "options": [
        {
          "text": "When you are aided by the bot as you make a move in a formal social interaction",
          "method": "inherit",
          "stats": []
        }
      ]
    },
    "ability_3": {
      "options": [
        {
          "text": "In a charged interaction",
          "method": "inherit",
          "stats": []
        }
      ]
    }
  },
  "rockhorn": {
    "ability_1": {
      "options": [
        {
          "text": "By sending the rockhorn to directly attack a foe or smash an obstacle",
          "method": "any",
          "stats": [
            "starforged/assets/companion/rockhorn/condition_meter"
          ]
        }
      ]
    },
    "ability_2": {
      "moves": [
        "Companion Takes a Hit"
      ],
      "options": [
        {
          "text": "For the rockhorn",
          "method": "inherit",
          "stats": []
        }
      ]
    },
    "ability_3": {
      "moves": [
        "Endure Harm",
        "Endure Stress"
      ]
    }
  },
  "sidekick": {
    "ability_1": {
      "options": [
        {
          "text": "Directly aided by your sidekick&#39;s expertise &#40;outside of a fight&#41;",
          "method": "inherit",
          "stats": []
        }
      ]
    },
    "ability_2": {
      "moves": [
        "Clash"
      ],
      "options": [
        {
          "text": "Together with your sidekick",
          "method": "any",
          "stats": []
        }
      ]
    },
    "ability_3": {
      "moves": [
        "Face Danger",
        "Scene Challenge - Scene Challenge",
        "React Under Fire"
      ],
      "options": [
        {
          "text": "Your sidekick acts to get you out of a tough spot",
          "method": "any",
          "stats": [
            "starforged/assets/companion/sidekick/condition_meter"
          ]
        }
      ]
    }
  },
  "sprite": {
    "ability_1": {
      "options": [
        {
          "text": "By sending your sprite to perform trickery &#40;such as creating a distraction&#44; sneaking into a protected location&#44; or stealing an object&#41;",
          "method": "inherit",
          "stats": []
        }
      ]
    },
    "ability_2": {
      "moves": [
        "Secure an Advantage",
        "Scene Challenge - Scene Challenge",
        "Gather Information"
      ],
      "options": [
        {
          "text": "By remotely observing a situation from your sprite&#39;s perspective",
          "method": "inherit",
          "stats": []
        }
      ]
    }
  },
  "survey_bot": {
    "ability_1": {
      "moves": [
        "Undertake an Expedition"
      ],
      "options": [
        {
          "text": "Overland or within a site &#40;assisted by your survey bot&#41;",
          "method": "inherit",
          "stats": [
            "wits"
          ]
        }
      ]
    },
    "ability_2": {
      "moves": [
        "Secure an Advantage",
        "Scene Challenge - Scene Challenge"
      ],
      "options": [
        {
          "text": "Once per expedition&#44; by sending the survey bot to scout ahead",
          "method": "any",
          "stats": [
            "starforged/assets/companion/survey_bot/condition_meter"
          ]
        }
      ]
    },
    "ability_3": {
      "moves": [
        "Face Danger",
        "Scene Challenge - Scene Challenge"
      ],
      "options": [
        {
          "text": "To detect a threat",
          "method": "any",
          "stats": [
            "starforged/assets/companion/survey_bot/condition_meter"
          ]
        }
      ]
    }
  },
  "symbiote": {
    "ability_1": {
      "options": [
        {
          "text": "Make an aggressive move while giving yourself to the symbiote&#39;s power",
          "method": "inherit",
          "stats": []
        }
      ]
    },
    "ability_2": {}
  },
  "utility_bot": {
    "ability_1": {
      "options": [
        {
          "text": "By directing the utility bot to access a system&#44; cut through an obstacle&#44; analyze a mechanical issue&#44; or assemble or disassemble a device",
          "method": "any",
          "stats": [
            "starforged/assets/companion/utility_bot/condition_meter"
          ]
        }
      ]
    },
    "ability_2": {
      "moves": [
        "Repair"
      ],
      "options": [
        {
          "text": "Aided by the bot",
          "method": "inherit",
          "stats": []
        }
      ]
    },
    "ability_3": {
      "moves": [
        "Check Your Gear"
      ],
      "options": [
        {
          "text": "To see if your utility bot has a specific tool or technique available",
          "method": "any",
          "stats": [
            "starforged/assets/companion/utility_bot/condition_meter"
          ]
        }
      ]
    }
  },
  "voidglider": {
    "ability_1": {
      "moves": [
        "Undertake an Expedition"
      ],
      "options": [
        {
          "text": "On a spaceborne journey as your voidglider helps guide the way",
          "method": "inherit",
          "stats": []
        }
      ]
    },
    "ability_2": {
      "options": [
        {
          "text": "You are riding the voidglider and make a move to detect or evade a threat by relying on its instincts",
          "method": "any",
          "stats": [
            "starforged/assets/companion/voidglider/condition_meter"
          ]
        }
      ]
    },
    "ability_3": {
      "options": [
        {
          "text": "You make a move by signaling the voidglider to distract or attack a spaceborne foe",
          "method": "any",
          "stats": [
            "starforged/assets/companion/voidglider/condition_meter"
          ]
        }
      ]
    }
  },
  "bonded": {
    "ability_1": {
      "moves": [
        "Test Your Relationship",
        "Develop Your Relationship"
      ],
      "options": [
        {
          "text": "With your bond&#45;mate",
          "method": "inherit",
          "stats": []
        }
      ]
    },
    "ability_2": {
      "moves": [
        "Set a Course"
      ],
      "options": [
        {
          "text": "Back to your bond&#45;mate&#39;s location",
          "method": "inherit",
          "stats": []
        }
      ]
    },
    "ability_3": {}
  },
  "homesteader": {
    "ability_1": {
      "moves": [
        "Fulfill Your Vow"
      ],
      "options": [
        {
          "text": "In service to your home &#40;formidable or greater&#41;",
          "method": "inherit",
          "stats": []
        }
      ]
    },
    "ability_2": {
      "moves": [
        "Sojourn"
      ],
      "options": [
        {
          "text": "In your home &#40;and you stay a bit&#41;",
          "method": "weak hit",
          "stats": []
        }
      ]
    },
    "ability_3": {
      "moves": [
        "Set a Course"
      ],
      "options": [
        {
          "text": "For home",
          "method": "inherit",
          "stats": []
        }
      ]
    }
  },
  "marked": {
    "ability_1": {
      "moves": [
        "Compel",
        "Make a Connection"
      ],
      "options": [
        {
          "text": "Among those who would know your reputation",
          "method": "inherit",
          "stats": []
        }
      ]
    },
    "ability_2": {},
    "ability_3": {
      "moves": [
        "Gain Ground"
      ],
      "options": [
        {
          "text": "Through intimidation or command &#40;once per fight&#41;",
          "method": "inherit",
          "stats": []
        }
      ]
    }
  },
  "oathbreaker": {
    "ability_1": {
      "moves": [
        "Forsake Your Vow"
      ]
    },
    "ability_2": {
      "moves": [
        "Secure an Advantage",
        "Scene Challenge - Scene Challenge",
        "Compel"
      ],
      "options": [
        {
          "text": "By reaffirming your commitment to your marked vow",
          "method": "inherit",
          "stats": []
        }
      ]
    },
    "ability_3": {
      "moves": [
        "Fulfill Your Vow"
      ],
      "options": [
        {
          "text": "On your marked quest",
          "method": "inherit",
          "stats": []
        }
      ]
    }
  },
  "revenant": {
    "ability_1": {
      "moves": [
        "Endure Harm",
        "Face Death"
      ],
      "options": [
        {
          "text": "When you are at 0 health",
          "method": "inherit",
          "stats": []
        }
      ]
    },
    "ability_2": {
      "moves": [
        "Take Decisive Action"
      ],
      "options": [
        {
          "text": "By bringing death to a foe",
          "method": "inherit",
          "stats": []
        }
      ]
    },
    "ability_3": {
      "moves": [
        "Gather Information"
      ],
      "options": [
        {
          "text": "By studying a place where death left its mark",
          "method": "any",
          "stats": [
            "heart"
          ]
        }
      ]
    }
  },
  "survivor": {
    "ability_1": {
      "moves": [
        "Endure Stress"
      ],
      "options": [
        {
          "text": "When you are haunted by past experiences",
          "method": "inherit",
          "stats": []
        }
      ]
    }
  },
  "vanguard": {
    "ability_2": {
      "options": [
        {
          "text": "Vanguard",
          "method": "inherit",
          "stats": [
            "wits"
          ]
        }
      ]
    },
    "ability_3": {
      "moves": [
        "Endure Stress"
      ],
      "options": [
        {
          "text": "Vanguard",
          "method": "any",
          "stats": [
            "wits"
          ]
        }
      ]
    }
  },
  "cohort": {
    "ability_1": {
      "moves": [
        "Pay the Price"
      ]
    },
    "ability_3": {
      "moves": [
        "Secure an Advantage"
      ],
      "options": [
        {
          "text": "By gathering your specialists to strategize or problem&#45;solve",
          "method": "any",
          "stats": []
        }
      ]
    }
  },
  "fleet_commander": {
    "ability_1": {
      "moves": [
        "Sojourn"
      ]
    },
    "ability_3": {
      "moves": [
        "Undertake an Expedition"
      ],
      "options": [
        {
          "text": "With your fleet",
          "method": "any",
          "stats": []
        }
      ]
    }
  }
}