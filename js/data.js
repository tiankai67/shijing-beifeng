// 诗经·邶风 数据
// 十九篇顺序依《诗经》十五国风之《邶风》
// 字段：full=完整原文(多章)  en=英文(标题/名句/全文/译文/赏析/注释)

const THEMES = [
  {
    "key": "爱情之美",
    "nameEn": "Love",
    "color": "#b03a2e",
    "desc": "相守相知，千年爱情圣地",
    "descEn": "Devotion and knowing love — a sacred land of romance for millennia"
  },
  {
    "key": "亲情之厚",
    "nameEn": "Kinship",
    "color": "#a0522d",
    "desc": "孝亲感恩，母爱深沉",
    "descEn": "Filial love and gratitude — a mother's deep affection"
  },
  {
    "key": "乡愁之深",
    "nameEn": "Homesickness",
    "color": "#4a6b6b",
    "desc": "故园之念，根脉情怀",
    "descEn": "Longing for home — the feeling of one's roots"
  },
  {
    "key": "品格之坚",
    "nameEn": "Character",
    "color": "#7a5230",
    "desc": "坚守初心，不移不屈",
    "descEn": "Steadfast character — unyielding, unmoved"
  },
  {
    "key": "自然之韵",
    "nameEn": "Nature",
    "color": "#5b7a4b",
    "desc": "诗意邶风，质朴典雅",
    "descEn": "The rhythm of nature — plain and elegant"
  },
  {
    "key": "讽喻怨刺",
    "nameEn": "Satire",
    "color": "#6b6b6b",
    "desc": "讽时怨上，社会之镜",
    "descEn": "Satire and remonstrance — a mirror of society"
  }
];

const POEMS = [
  {
    "id": 1,
    "title": "柏舟",
    "pinyin": "bǎi zhōu",
    "theme": "品格之坚",
    "lines": [
      "我心匪石，不可转也。",
      "我心匪席，不可卷也。"
    ],
    "trans": "我心并非卵石圆，不能随便来滚转；我心并非草席软，不能任意来翻卷。",
    "notes": [
      {
        "w": "匪",
        "p": "fěi",
        "m": "非，不是。"
      },
      {
        "w": "转",
        "p": "zhuǎn",
        "m": "转动、移动。"
      },
      {
        "w": "卷",
        "p": "juǎn",
        "m": "卷起。"
      }
    ],
    "appreciation": "以“石”“席”为喻，表心志坚贞、不可移易。后世常以“我心匪石”喻坚守本心、不为外物所动，是中华品格精神的经典意象。",
    "scene": "主干道宣传牌、精神文化展示区、城市形象宣传。",
    "recommend": 5,
    "full": [
      "泛彼柏舟，亦泛其流。耿耿不寐，如有隐忧。微我无酒，以敖以游。",
      "我心匪鉴，不可以茹。亦有兄弟，不可以据。薄言往愬，逢彼之怒。",
      "我心匪石，不可转也。我心匪席，不可卷也。威仪棣棣，不可选也。",
      "忧心悄悄，愠于群小。觏闵既多，受侮不少。静言思之，寤辟有摽。",
      "日居月诸，胡迭而微？心之忧矣，如匪浣衣。静言思之，不能奋飞。"
    ],
    "en": {
      "title": "The Cypress Boat",
      "lines": [
        "My heart is not a stone, that it should be rolled away.",
        "My heart is not a mat, that it should be rolled up."
      ],
      "full": [
        "Drifting, the cypress boat floats with the current. Sleepless, I bear a hidden sorrow; it is not that I lack wine to wander and roam.",
        "My heart is not a mirror, that it should take in all. I have brothers, but cannot rely on them; I went to complain, and met only their anger.",
        "My heart is not a stone, that it should be rolled away; my heart is not a mat, that it should be rolled up. My bearing is composed, beyond compare.",
        "Anxious in heart, I am resented by the petty crowd. Much afflicted, much insulted; I ponder in stillness, beating my breast awake.",
        "Sun and moon, why dim you in turns? My heart's sorrow is like unwashed clothes. I ponder in stillness, yet cannot take flight."
      ],
      "trans": "My heart is no round pebble, that it should be rolled at will; my heart is no soft mat, that it should be rolled up at random.",
      "appreciation": "Using 'stone' and 'mat' as metaphors, the poem declares a resolve that is firm and unshakable. Later ages cite 'my heart is not a stone' for holding to one's true self unmoved by outward things — a classic image of Chinese character.",
      "notes": [
        {
          "w": "匪",
          "p": "fěi",
          "m": "Not; is not."
        },
        {
          "w": "转",
          "p": "zhuǎn",
          "m": "To turn; to move."
        },
        {
          "w": "卷",
          "p": "juǎn",
          "m": "To roll up."
        }
      ],
      "scene": "Promotional boards on main thoroughfares, spirit-and-culture display zones, and city-image publicity.",
      "fullTr": [
        [
          {
            "zh": "泛彼柏舟，",
            "tw": "荡起那柏木小船，",
            "en": "A cypress boat drifts,"
          },
          {
            "zh": "亦泛其流。",
            "tw": "它也随波漂流。",
            "en": "floating upon the stream."
          },
          {
            "zh": "耿耿不寐，",
            "tw": "长夜耿耿难成眠，",
            "en": "Sleepless and wakeful,"
          },
          {
            "zh": "如有隐忧。",
            "tw": "似有隐忧在心头。",
            "en": "as if with hidden care."
          },
          {
            "zh": "微我无酒，",
            "tw": "并非我无美酒，",
            "en": "It is not that I lack wine,"
          },
          {
            "zh": "以敖以游。",
            "tw": "聊以遨游消愁。",
            "en": "to wander and roam at ease."
          }
        ],
        [
          {
            "zh": "我心匪鉴，",
            "tw": "我的心并非明镜，",
            "en": "My heart is not a mirror,"
          },
          {
            "zh": "不可以茹。",
            "tw": "不能什么都容纳。",
            "en": "that takes in all it sees."
          },
          {
            "zh": "亦有兄弟，",
            "tw": "虽也有兄弟在，",
            "en": "Though I have brothers,"
          },
          {
            "zh": "不可以据。",
            "tw": "却不能够依靠。",
            "en": "I cannot lean on them."
          },
          {
            "zh": "薄言往愬，",
            "tw": "曾前去诉说苦衷，",
            "en": "I went to plead my case,"
          },
          {
            "zh": "逢彼之怒。",
            "tw": "却惹得他恼怒。",
            "en": "and met only his wrath."
          }
        ],
        [
          {
            "zh": "我心匪石，",
            "tw": "我的心不是石头，",
            "en": "My heart is no stone,"
          },
          {
            "zh": "不可转也。",
            "tw": "不可随意转动。",
            "en": "that it should be rolled away."
          },
          {
            "zh": "我心匪席，",
            "tw": "我的心不是草席，",
            "en": "My heart is no mat,"
          },
          {
            "zh": "不可卷也。",
            "tw": "不可任意卷起。",
            "en": "that it should be rolled up."
          },
          {
            "zh": "威仪棣棣，",
            "tw": "仪容闲雅端庄，",
            "en": "My bearing is composed,"
          },
          {
            "zh": "不可选也。",
            "tw": "不可随便挑选。",
            "en": "beyond all compare."
          }
        ],
        [
          {
            "zh": "忧心悄悄，",
            "tw": "忧心悄悄深藏，",
            "en": "My heart is quietly grieved;"
          },
          {
            "zh": "愠于群小。",
            "tw": "得罪了众小人。",
            "en": "I am resented by the petty."
          },
          {
            "zh": "觏闵既多，",
            "tw": "遭逢苦难已多，",
            "en": "Much affliction have I met,"
          },
          {
            "zh": "受侮不少。",
            "tw": "受辱也不算少。",
            "en": "and no little insult borne."
          },
          {
            "zh": "静言思之，",
            "tw": "静下心来细想，",
            "en": "In stillness I ponder it,"
          },
          {
            "zh": "寤辟有摽。",
            "tw": "醒时捶胸心焦。",
            "en": "and wake to beat my breast."
          }
        ],
        [
          {
            "zh": "日居月诸，",
            "tw": "太阳啊月亮啊，",
            "en": "O sun, O moon,"
          },
          {
            "zh": "胡迭而微？心之忧矣，",
            "tw": "为何轮替无光？我心忧伤，",
            "en": "why do you dim in turn? My heart is sorrowful;"
          },
          {
            "zh": "如匪浣衣。",
            "tw": "如脏衣未曾洗。",
            "en": "like unwashed linen."
          },
          {
            "zh": "静言思之，",
            "tw": "静心思量，",
            "en": "In stillness I ponder,"
          },
          {
            "zh": "不能奋飞。",
            "tw": "却无力奋飞远走。",
            "en": "yet cannot take my flight."
          }
        ]
      ]
    },
    "fullNotes": [
      {
        "zh": "泛舟漂流，耿耿不寐，心怀隐忧，并非无酒可消遣。",
        "en": "A cypress boat drifts with the current; sleepless with hidden sorrow, I am not without wine to roam and forget.",
        "words": [
          {
            "w": "泛",
            "p": "fàn",
            "m": "漂浮；泛舟",
            "em": "to float; to drift"
          },
          {
            "w": "耿",
            "p": "gěng",
            "m": "耿耿，心中不安",
            "em": "restless; troubled"
          }
        ]
      },
      {
        "zh": "我心非镜，难纳一切；虽有兄弟，却不可依傍。",
        "en": "My heart is no mirror to take in all; I have brothers, yet none to lean upon.",
        "words": [
          {
            "w": "镜",
            "p": "jìng",
            "m": "镜子",
            "em": "mirror"
          }
        ]
      },
      {
        "zh": "我心非石非席，不可转卷；威仪闲雅，不可拣选。",
        "en": "My heart is no stone or mat, that it be turned or rolled; my bearing is composed, beyond compare.",
        "words": [
          {
            "w": "卷",
            "p": "juǎn",
            "m": "卷起",
            "em": "to roll up"
          },
          {
            "w": "威仪",
            "p": "wēiyí",
            "m": "端庄的仪表",
            "em": "dignified bearing"
          }
        ]
      },
      {
        "zh": "忧心忡忡，见怨于群小；遭闵受侮，夜半抚胸长叹。",
        "en": "Anxious at heart, I am resented by the petty; afflicted and insulted, I beat my breast at midnight.",
        "words": [
          {
            "w": "忡忡",
            "p": "chōngchōng",
            "m": "忧虑不安",
            "em": "anxious"
          },
          {
            "w": "闵",
            "p": "mǐn",
            "m": "忧患；痛心",
            "em": "sorrow; distress"
          }
        ]
      },
      {
        "zh": "日月光微，忧如未浣之衣；静思难解，不能奋飞。",
        "en": "Sun and moon dim in turns; my grief is like unwashed cloth. I ponder in stillness, unable to take flight.",
        "words": [
          {
            "w": "浣",
            "p": "huàn",
            "m": "洗涤",
            "em": "to wash"
          },
          {
            "w": "奋",
            "p": "fèn",
            "m": "振翅；奋发",
            "em": "to rise; to strive"
          }
        ]
      }
    ],
    "fullTr": [
      [
        {
          "zh": "泛彼柏舟，",
          "tw": "荡起那柏木小船，",
          "en": "A cypress boat drifts,"
        },
        {
          "zh": "亦泛其流。",
          "tw": "它也随波漂流。",
          "en": "floating upon the stream."
        },
        {
          "zh": "耿耿不寐，",
          "tw": "长夜耿耿难成眠，",
          "en": "Sleepless and wakeful,"
        },
        {
          "zh": "如有隐忧。",
          "tw": "似有隐忧在心头。",
          "en": "as if with hidden care."
        },
        {
          "zh": "微我无酒，",
          "tw": "并非我无美酒，",
          "en": "It is not that I lack wine,"
        },
        {
          "zh": "以敖以游。",
          "tw": "聊以遨游消愁。",
          "en": "to wander and roam at ease."
        }
      ],
      [
        {
          "zh": "我心匪鉴，",
          "tw": "我的心并非明镜，",
          "en": "My heart is not a mirror,"
        },
        {
          "zh": "不可以茹。",
          "tw": "不能什么都容纳。",
          "en": "that takes in all it sees."
        },
        {
          "zh": "亦有兄弟，",
          "tw": "虽也有兄弟在，",
          "en": "Though I have brothers,"
        },
        {
          "zh": "不可以据。",
          "tw": "却不能够依靠。",
          "en": "I cannot lean on them."
        },
        {
          "zh": "薄言往愬，",
          "tw": "曾前去诉说苦衷，",
          "en": "I went to plead my case,"
        },
        {
          "zh": "逢彼之怒。",
          "tw": "却惹得他恼怒。",
          "en": "and met only his wrath."
        }
      ],
      [
        {
          "zh": "我心匪石，",
          "tw": "我的心不是石头，",
          "en": "My heart is no stone,"
        },
        {
          "zh": "不可转也。",
          "tw": "不可随意转动。",
          "en": "that it should be rolled away."
        },
        {
          "zh": "我心匪席，",
          "tw": "我的心不是草席，",
          "en": "My heart is no mat,"
        },
        {
          "zh": "不可卷也。",
          "tw": "不可任意卷起。",
          "en": "that it should be rolled up."
        },
        {
          "zh": "威仪棣棣，",
          "tw": "仪容闲雅端庄，",
          "en": "My bearing is composed,"
        },
        {
          "zh": "不可选也。",
          "tw": "不可随便挑选。",
          "en": "beyond all compare."
        }
      ],
      [
        {
          "zh": "忧心悄悄，",
          "tw": "忧心悄悄深藏，",
          "en": "My heart is quietly grieved;"
        },
        {
          "zh": "愠于群小。",
          "tw": "得罪了众小人。",
          "en": "I am resented by the petty."
        },
        {
          "zh": "觏闵既多，",
          "tw": "遭逢苦难已多，",
          "en": "Much affliction have I met,"
        },
        {
          "zh": "受侮不少。",
          "tw": "受辱也不算少。",
          "en": "and no little insult borne."
        },
        {
          "zh": "静言思之，",
          "tw": "静下心来细想，",
          "en": "In stillness I ponder it,"
        },
        {
          "zh": "寤辟有摽。",
          "tw": "醒时捶胸心焦。",
          "en": "and wake to beat my breast."
        }
      ],
      [
        {
          "zh": "日居月诸，",
          "tw": "太阳啊月亮啊，",
          "en": "O sun, O moon,"
        },
        {
          "zh": "胡迭而微？心之忧矣，",
          "tw": "为何轮替无光？我心忧伤，",
          "en": "why do you dim in turn? My heart is sorrowful;"
        },
        {
          "zh": "如匪浣衣。",
          "tw": "如脏衣未曾洗。",
          "en": "like unwashed linen."
        },
        {
          "zh": "静言思之，",
          "tw": "静心思量，",
          "en": "In stillness I ponder,"
        },
        {
          "zh": "不能奋飞。",
          "tw": "却无力奋飞远走。",
          "en": "yet cannot take my flight."
        }
      ]
    ]
  },
  {
    "id": 2,
    "title": "绿衣",
    "pinyin": "lǜ yī",
    "theme": "亲情之厚",
    "lines": [
      "绿兮丝兮，女所治兮。",
      "我思古人，俾无訧兮。"
    ],
    "trans": "绿丝线啊绿丝线，是你亲手来缝制。我思亡故的贤妻，使我平时少过失。",
    "notes": [
      {
        "w": "治",
        "p": "zhì",
        "m": "缝制、料理。"
      },
      {
        "w": "古人",
        "p": "gǔ rén",
        "m": "故去的人，指亡妻。"
      },
      {
        "w": "訧",
        "p": "yóu",
        "m": "过失、过错。"
      }
    ],
    "appreciation": "睹物思人，由一件绿衣追念亡妻。以日常织物寄深沉哀思，是中国悼亡诗的源头之一，情真意切。",
    "scene": "亲子活动、家庭主题景观、乡村文化墙、研学教育基地。",
    "recommend": 3,
    "full": [
      "绿兮衣兮，绿衣黄里。心之忧矣，曷维其已？",
      "绿兮衣兮，绿衣黄裳。心之忧矣，曷维其亡？",
      "绿兮丝兮，女所治兮。我思古人，俾无訧兮。",
      "絺兮绤兮，凄其以风。我思古人，实获我心。"
    ],
    "en": {
      "title": "The Green Coat",
      "lines": [
        "Green, the silk thread — by your own hands prepared.",
        "I think of the dead, who kept me from blame."
      ],
      "full": [
        "Green, O green the coat, green coat with yellow lining. The sorrow of my heart — when will it ever end?",
        "Green, O green the coat, green coat with yellow skirt. The sorrow of my heart — when will it ever cease?",
        "Green, O green the silk, by your own hands prepared. I think of the dead, who kept me from fault.",
        "Fine or coarse the cloth, chill in the wind it lies. I think of the dead — truly they had my heart."
      ],
      "trans": "Green thread, green thread, it was you who wrought it. I think of my departed wife, who kept my daily faults away.",
      "appreciation": "Seeing the object, he thinks of its maker — mourning his late wife through a green coat. With everyday cloth he bears deep grief; it is a source of China's elegiac poetry, sincere and tender.",
      "notes": [
        {
          "w": "治",
          "p": "zhì",
          "m": "To sew; to tend."
        },
        {
          "w": "古人",
          "p": "gǔ rén",
          "m": "The departed, here the late wife."
        },
        {
          "w": "訧",
          "p": "yóu",
          "m": "Fault; blame."
        }
      ],
      "scene": "Family activities, family-themed landscapes, rural culture walls, and study-tour education bases.",
      "fullTr": [
        [
          {
            "zh": "绿兮衣兮，",
            "tw": "绿衣裳啊绿衣裳，",
            "en": "O robe of green,"
          },
          {
            "zh": "绿衣黄里。",
            "tw": "绿衣衬着黄里子。",
            "en": "green without, yellow within."
          },
          {
            "zh": "心之忧矣，",
            "tw": "心中的忧思啊，",
            "en": "My heart is full of care;"
          },
          {
            "zh": "曷维其已？",
            "tw": "何时才能止息？",
            "en": "when will it ever end?"
          }
        ],
        [
          {
            "zh": "绿兮衣兮，",
            "tw": "绿衣裳啊绿衣裳，",
            "en": "O robe of green,"
          },
          {
            "zh": "绿衣黄裳。",
            "tw": "绿衣配着黄下裳。",
            "en": "green coat, yellow skirt."
          },
          {
            "zh": "心之忧矣，",
            "tw": "心中的忧思啊，",
            "en": "My heart is full of care;"
          },
          {
            "zh": "曷维其亡？",
            "tw": "何时才能忘怀？",
            "en": "when will it pass away?"
          }
        ],
        [
          {
            "zh": "绿兮丝兮，",
            "tw": "绿丝线啊绿丝线，",
            "en": "O threads of green,"
          },
          {
            "zh": "女所治兮。",
            "tw": "是你亲手所织。",
            "en": "it was you who spun them."
          },
          {
            "zh": "我思古人，",
            "tw": "我思念亡故的你，",
            "en": "I think of the dead one,"
          },
          {
            "zh": "俾无訧兮。",
            "tw": "使我不犯过错。",
            "en": "who kept me from blame."
          }
        ],
        [
          {
            "zh": "絺兮绤兮，",
            "tw": "细葛啊粗葛啊，",
            "en": "Fine and coarse cloth,"
          },
          {
            "zh": "凄其以风。",
            "tw": "风吹来阵阵凉。",
            "en": "chilly in the wind."
          },
          {
            "zh": "我思古人，",
            "tw": "我思念亡故的你，",
            "en": "I think of the dead one,"
          },
          {
            "zh": "实获我心。",
            "tw": "实得我心所想。",
            "en": "who truly knew my heart."
          }
        ]
      ]
    },
    "fullNotes": [
      {
        "zh": "绿衣黄里，忧心无已。",
        "en": "Green the coat, yellow the lining; my sorrow knows no end.",
        "words": [
          {
            "w": "里",
            "p": "lǐ",
            "m": "衣里；衬里",
            "em": "lining"
          }
        ]
      },
      {
        "zh": "绿衣黄裳，忧心难忘。",
        "en": "Green the coat, yellow the skirt; grief I cannot forget.",
        "words": [
          {
            "w": "裳",
            "p": "cháng",
            "m": "下裙",
            "em": "skirt; lower garment"
          }
        ]
      },
      {
        "zh": "绿丝乃亡妻所治，思之使我少过。",
        "en": "The green silk was wrought by my late wife; thinking of her keeps me from fault.",
        "words": [
          {
            "w": "治",
            "p": "zhì",
            "m": "制作",
            "em": "to make; to prepare"
          },
          {
            "w": "訧",
            "p": "yóu",
            "m": "过失；责怪",
            "em": "fault; blame"
          }
        ]
      },
      {
        "zh": "絺绤凄风，亡妻实得我心。",
        "en": "In thin summer cloth, the cold wind — she alone truly understood my heart.",
        "words": [
          {
            "w": "絺绤",
            "p": "chīxì",
            "m": "细葛布与粗葛布",
            "em": "fine and coarse grass cloth"
          },
          {
            "w": "凄",
            "p": "qī",
            "m": "寒冷；凄凉",
            "em": "cold; chill"
          }
        ]
      }
    ],
    "fullTr": [
      [
        {
          "zh": "绿兮衣兮，",
          "tw": "绿衣裳啊绿衣裳，",
          "en": "O robe of green,"
        },
        {
          "zh": "绿衣黄里。",
          "tw": "绿衣衬着黄里子。",
          "en": "green without, yellow within."
        },
        {
          "zh": "心之忧矣，",
          "tw": "心中的忧思啊，",
          "en": "My heart is full of care;"
        },
        {
          "zh": "曷维其已？",
          "tw": "何时才能止息？",
          "en": "when will it ever end?"
        }
      ],
      [
        {
          "zh": "绿兮衣兮，",
          "tw": "绿衣裳啊绿衣裳，",
          "en": "O robe of green,"
        },
        {
          "zh": "绿衣黄裳。",
          "tw": "绿衣配着黄下裳。",
          "en": "green coat, yellow skirt."
        },
        {
          "zh": "心之忧矣，",
          "tw": "心中的忧思啊，",
          "en": "My heart is full of care;"
        },
        {
          "zh": "曷维其亡？",
          "tw": "何时才能忘怀？",
          "en": "when will it pass away?"
        }
      ],
      [
        {
          "zh": "绿兮丝兮，",
          "tw": "绿丝线啊绿丝线，",
          "en": "O threads of green,"
        },
        {
          "zh": "女所治兮。",
          "tw": "是你亲手所织。",
          "en": "it was you who spun them."
        },
        {
          "zh": "我思古人，",
          "tw": "我思念亡故的你，",
          "en": "I think of the dead one,"
        },
        {
          "zh": "俾无訧兮。",
          "tw": "使我不犯过错。",
          "en": "who kept me from blame."
        }
      ],
      [
        {
          "zh": "絺兮绤兮，",
          "tw": "细葛啊粗葛啊，",
          "en": "Fine and coarse cloth,"
        },
        {
          "zh": "凄其以风。",
          "tw": "风吹来阵阵凉。",
          "en": "chilly in the wind."
        },
        {
          "zh": "我思古人，",
          "tw": "我思念亡故的你，",
          "en": "I think of the dead one,"
        },
        {
          "zh": "实获我心。",
          "tw": "实得我心所想。",
          "en": "who truly knew my heart."
        }
      ]
    ]
  },
  {
    "id": 3,
    "title": "燕燕",
    "pinyin": "yàn yàn",
    "theme": "自然之韵",
    "lines": [
      "燕燕于飞，下上其音。",
      "终温且惠，淑慎其身。"
    ],
    "trans": "燕子展开翅膀飞，下下上上发呢喃。性格温柔又和顺，行为善良又谨慎。",
    "notes": [
      {
        "w": "于飞",
        "p": "yú fēi",
        "m": "飞翔的样子。"
      },
      {
        "w": "终…且…",
        "p": "zhōng…qiě…",
        "m": "既…又…，并列连词。"
      },
      {
        "w": "淑慎",
        "p": "shū shèn",
        "m": "善良而谨慎。"
      }
    ],
    "appreciation": "以燕燕双飞起兴，寄送别之思。清代王士祯推为“万古送别之祖”，徐悲鸿名画《燕燕于飞》即源于此篇。",
    "scene": "湿地公园微场景、花卉种植造景、生态景观展示。",
    "recommend": 4,
    "full": [
      "燕燕于飞，差池其羽。之子于归，远送于野。瞻望弗及，泣涕如雨。",
      "燕燕于飞，颉之颃之。之子于归，远于将之。瞻望弗及，伫立以泣。",
      "燕燕于飞，下上其音。之子于归，远送于南。瞻望弗及，实劳我心。",
      "仲氏任只，其心塞渊。终温且惠，淑慎其身。先君之思，以勖寡人。"
    ],
    "en": {
      "title": "The Swallows",
      "lines": [
        "The swallows fly, their notes falling and rising.",
        "Ever gentle and kind, virtuous and circumspect in deed."
      ],
      "full": [
        "The swallows fly, their wings unequal in flight. That lady goes to her home, I see her off into the wilds. I watch till lost to sight, tears like rain.",
        "The swallows fly, now soaring, now descending. That lady goes to her home, I see her far away. I watch till lost to sight, standing and weeping.",
        "The swallows fly, their notes rising and falling. That lady goes to her home, I see her off to the south. I watch till lost to sight — truly it wears my heart.",
        "My sister Ren was trustworthy and deep. Ever gentle and kind, virtuous and circumspect. Thinking of the late lord, she exhorted the widowed one."
      ],
      "trans": "The swallows spread their wings and fly, chirping high and low. Gentle and gracious is her nature, good and prudent in her ways.",
      "appreciation": "Opening with swallows in flight, it carries the thought of parting. Wang Shizhen of the Qing called it 'the ancestor of all farewell poems'; Xu Beihong's famous painting takes its title from it.",
      "notes": [
        {
          "w": "于飞",
          "p": "yú fēi",
          "m": "Flying (of birds)."
        },
        {
          "w": "终…且…",
          "p": "zhōng…qiě…",
          "m": "Both…and…, a correlative conjunction."
        },
        {
          "w": "淑慎",
          "p": "shū shèn",
          "m": "Good and prudent."
        }
      ],
      "scene": "Wetland-park vignettes, floral landscaping, and ecological-scene displays.",
      "fullTr": [
        [
          {
            "zh": "燕燕于飞，",
            "tw": "燕子双双飞，",
            "en": "Swallow, swallow, flying;"
          },
          {
            "zh": "差池其羽。",
            "tw": "舒展着羽翼。",
            "en": "with unequal wings."
          },
          {
            "zh": "之子于归，",
            "tw": "这位姑娘出嫁，",
            "en": "That lady goes to her home,"
          },
          {
            "zh": "远送于野。",
            "tw": "远送她到郊野。",
            "en": "I see her off far in the wild."
          },
          {
            "zh": "瞻望弗及，",
            "tw": "伫望不见身影，",
            "en": "I look till she is lost,"
          },
          {
            "zh": "泣涕如雨。",
            "tw": "泪落如雨滂沱。",
            "en": "my tears fall like rain."
          }
        ],
        [
          {
            "zh": "燕燕于飞，",
            "tw": "燕子双双飞，",
            "en": "Swallow, swallow, flying;"
          },
          {
            "zh": "颉之颃之。",
            "tw": "上下翻飞起舞。",
            "en": "now up, now down."
          },
          {
            "zh": "之子于归，",
            "tw": "这位姑娘出嫁，",
            "en": "That lady goes to her home,"
          },
          {
            "zh": "远于将之。",
            "tw": "远送她上归途。",
            "en": "I escort her far away."
          },
          {
            "zh": "瞻望弗及，",
            "tw": "伫望不见身影，",
            "en": "I look till she is lost,"
          },
          {
            "zh": "伫立以泣。",
            "tw": "伫立暗自泣涕。",
            "en": "and stand weeping alone."
          }
        ],
        [
          {
            "zh": "燕燕于飞，",
            "tw": "燕子双双飞，",
            "en": "Swallow, swallow, flying;"
          },
          {
            "zh": "下上其音。",
            "tw": "鸣声忽高忽低。",
            "en": "its voice rising and falling."
          },
          {
            "zh": "之子于归，",
            "tw": "这位姑娘出嫁，",
            "en": "That lady goes to her home,"
          },
          {
            "zh": "远送于南。",
            "tw": "远送她去南方。",
            "en": "I see her off to the south."
          },
          {
            "zh": "瞻望弗及，",
            "tw": "伫望不见身影，",
            "en": "I look till she is lost,"
          },
          {
            "zh": "实劳我心。",
            "tw": "实令我心劳苦。",
            "en": "and my heart is sore."
          }
        ],
        [
          {
            "zh": "仲氏任只，",
            "tw": "二妹堪当重任，",
            "en": "O my second sister, so steadfast,"
          },
          {
            "zh": "其心塞渊。",
            "tw": "其心诚实深沉。",
            "en": "your heart is true and deep."
          },
          {
            "zh": "终温且惠，",
            "tw": "既温和又恭顺，",
            "en": "Gentle and gracious ever,"
          },
          {
            "zh": "淑慎其身。",
            "tw": "善良谨慎持身。",
            "en": "virtuous in all you do."
          },
          {
            "zh": "先君之思，",
            "tw": "常念先君遗训，",
            "en": "Mindful of our late lord,"
          },
          {
            "zh": "以勖寡人。",
            "tw": "以此勉励寡人。",
            "en": "you urge me on still."
          }
        ]
      ]
    },
    "fullNotes": [
      {
        "zh": "燕飞差池，送妹远野，望不见而泪如雨。",
        "en": "Swallows wing unevenly; I see my sister off to the far field, weeping like rain as she vanishes.",
        "words": [
          {
            "w": "差池",
            "p": "chāchí",
            "m": "参差不齐",
            "em": "uneven; in disarray"
          },
          {
            "w": "泪",
            "p": "lèi",
            "m": "眼泪",
            "em": "tears"
          }
        ]
      },
      {
        "zh": "燕飞颉颃，远送将之，伫立以泣。",
        "en": "Swallows rise and fall; I escort her far, then stand long and weep.",
        "words": [
          {
            "w": "颉颃",
            "p": "xiéháng",
            "m": "上下翻飞",
            "em": "to rise and fall in flight"
          },
          {
            "w": "伫",
            "p": "zhù",
            "m": "久立",
            "em": "to stand long"
          }
        ]
      },
      {
        "zh": "燕飞下上，远送于南，实劳我心。",
        "en": "Swallows dip and soar; I see her south, my heart worn with care.",
        "words": [
          {
            "w": "劳",
            "p": "láo",
            "m": "劳苦；忧心",
            "em": "to toil; weary"
          }
        ]
      },
      {
        "zh": "仲氏诚信渊深，温惠淑慎，以勖寡人。",
        "en": "My second sister, true and deep, gentle and prudent, urged me on.",
        "words": [
          {
            "w": "勖",
            "p": "xù",
            "m": "勉励",
            "em": "to encourage"
          },
          {
            "w": "淑",
            "p": "shū",
            "m": "善良",
            "em": "good; virtuous"
          }
        ]
      }
    ],
    "fullTr": [
      [
        {
          "zh": "燕燕于飞，",
          "tw": "燕子双双飞，",
          "en": "Swallow, swallow, flying;"
        },
        {
          "zh": "差池其羽。",
          "tw": "舒展着羽翼。",
          "en": "with unequal wings."
        },
        {
          "zh": "之子于归，",
          "tw": "这位姑娘出嫁，",
          "en": "That lady goes to her home,"
        },
        {
          "zh": "远送于野。",
          "tw": "远送她到郊野。",
          "en": "I see her off far in the wild."
        },
        {
          "zh": "瞻望弗及，",
          "tw": "伫望不见身影，",
          "en": "I look till she is lost,"
        },
        {
          "zh": "泣涕如雨。",
          "tw": "泪落如雨滂沱。",
          "en": "my tears fall like rain."
        }
      ],
      [
        {
          "zh": "燕燕于飞，",
          "tw": "燕子双双飞，",
          "en": "Swallow, swallow, flying;"
        },
        {
          "zh": "颉之颃之。",
          "tw": "上下翻飞起舞。",
          "en": "now up, now down."
        },
        {
          "zh": "之子于归，",
          "tw": "这位姑娘出嫁，",
          "en": "That lady goes to her home,"
        },
        {
          "zh": "远于将之。",
          "tw": "远送她上归途。",
          "en": "I escort her far away."
        },
        {
          "zh": "瞻望弗及，",
          "tw": "伫望不见身影，",
          "en": "I look till she is lost,"
        },
        {
          "zh": "伫立以泣。",
          "tw": "伫立暗自泣涕。",
          "en": "and stand weeping alone."
        }
      ],
      [
        {
          "zh": "燕燕于飞，",
          "tw": "燕子双双飞，",
          "en": "Swallow, swallow, flying;"
        },
        {
          "zh": "下上其音。",
          "tw": "鸣声忽高忽低。",
          "en": "its voice rising and falling."
        },
        {
          "zh": "之子于归，",
          "tw": "这位姑娘出嫁，",
          "en": "That lady goes to her home,"
        },
        {
          "zh": "远送于南。",
          "tw": "远送她去南方。",
          "en": "I see her off to the south."
        },
        {
          "zh": "瞻望弗及，",
          "tw": "伫望不见身影，",
          "en": "I look till she is lost,"
        },
        {
          "zh": "实劳我心。",
          "tw": "实令我心劳苦。",
          "en": "and my heart is sore."
        }
      ],
      [
        {
          "zh": "仲氏任只，",
          "tw": "二妹堪当重任，",
          "en": "O my second sister, so steadfast,"
        },
        {
          "zh": "其心塞渊。",
          "tw": "其心诚实深沉。",
          "en": "your heart is true and deep."
        },
        {
          "zh": "终温且惠，",
          "tw": "既温和又恭顺，",
          "en": "Gentle and gracious ever,"
        },
        {
          "zh": "淑慎其身。",
          "tw": "善良谨慎持身。",
          "en": "virtuous in all you do."
        },
        {
          "zh": "先君之思，",
          "tw": "常念先君遗训，",
          "en": "Mindful of our late lord,"
        },
        {
          "zh": "以勖寡人。",
          "tw": "以此勉励寡人。",
          "en": "you urge me on still."
        }
      ]
    ]
  },
  {
    "id": 4,
    "title": "日月",
    "pinyin": "rì yuè",
    "theme": "自然之韵",
    "lines": [
      "日居月诸，照临下土。",
      "日居月诸，出自东方。"
    ],
    "trans": "太阳月亮放光芒，光明照彻大地上。太阳月亮放光芒，每天升起在东方。",
    "notes": [
      {
        "w": "居、诸",
        "p": "jū、zhū",
        "m": "语助词，无实义。"
      },
      {
        "w": "照临",
        "p": "zhào lín",
        "m": "照耀、光临。"
      }
    ],
    "appreciation": "以日月永恒起兴，反衬人事变迁、忧思难遣。重章叠句，气象开阔，是《邶风》中格调高古之作。",
    "scene": "文化展示馆、返乡主题宣传、生态景观展示。",
    "recommend": 3,
    "full": [
      "日居月诸，照临下土。乃如之人兮，逝不古处。胡能有定？宁不我顾？",
      "日居月诸，下土是冒。乃如之人兮，逝不相好。胡能有定？宁不我报？",
      "日居月诸，出自东方。乃如之人兮，德音无良。胡能有定？俾也可忘。",
      "日居月诸，东方自出。父兮母兮，畜我不卒。胡能有定？报我不述。"
    ],
    "en": {
      "title": "Sun and Moon",
      "lines": [
        "Sun and moon, you shine upon the earth below.",
        "Sun and moon, you rise in the east."
      ],
      "full": [
        "Sun and moon, you shine upon the earth below. But such a one as he no longer dwells as of old. How can there be steadiness? Will he not regard me?",
        "Sun and moon, you overspread the earth below. But such a one as he no longer loves me. How can there be steadiness? Will he not requite me?",
        "Sun and moon, you come forth from the east. But such a one as he has a voice without goodness. How can there be steadiness? Might he be forgotten.",
        "Sun and moon, you rise in the east. O father, O mother, you reared me but not to the end. How can there be steadiness? He requites me without reason."
      ],
      "trans": "The sun and moon send forth their light, shining over the earth below. The sun and moon send forth their light, rising each day in the east.",
      "appreciation": "Setting off the eternal sun and moon against human change and unquiet sorrow, its repeated stanzas and open breadth make it one of the most archaic-toned poems of Beifeng.",
      "notes": [
        {
          "w": "居、诸",
          "p": "jū、zhū",
          "m": "Particle words, no literal meaning."
        },
        {
          "w": "照临",
          "p": "zhào lín",
          "m": "To shine upon; to look down."
        }
      ],
      "scene": "Culture exhibition halls, homecoming-themed publicity, and ecological-scene displays.",
      "fullTr": [
        [
          {
            "zh": "日居月诸，",
            "tw": "太阳啊月亮啊，",
            "en": "O sun, O moon,"
          },
          {
            "zh": "照临下土。",
            "tw": "光照这下界大地。",
            "en": "that shine upon the earth,"
          },
          {
            "zh": "乃如之人兮，",
            "tw": "竟有那样的人啊，",
            "en": "there is one such as he,"
          },
          {
            "zh": "逝不古处。",
            "tw": "不念旧情相处。",
            "en": "who will not treat me as of old."
          },
          {
            "zh": "胡能有定？宁不我顾？",
            "tw": "何时才能安定？竟不顾念我？",
            "en": "How can there be peace? He regards me not."
          }
        ],
        [
          {
            "zh": "日居月诸，",
            "tw": "太阳啊月亮啊，",
            "en": "O sun, O moon,"
          },
          {
            "zh": "下土是冒。",
            "tw": "覆照这下界大地。",
            "en": "that overspread the earth,"
          },
          {
            "zh": "乃如之人兮，",
            "tw": "竟有那样的人啊，",
            "en": "there is one such as he,"
          },
          {
            "zh": "逝不相好。",
            "tw": "不再与我相好。",
            "en": "who no longer loves me."
          },
          {
            "zh": "胡能有定？宁不我报？",
            "tw": "何时才能安定？竟不回报我？",
            "en": "How can there be peace? He repays me not."
          }
        ],
        [
          {
            "zh": "日居月诸，",
            "tw": "太阳啊月亮啊，",
            "en": "O sun, O moon,"
          },
          {
            "zh": "出自东方。",
            "tw": "升起自东方。",
            "en": "that rise in the east,"
          },
          {
            "zh": "乃如之人兮，",
            "tw": "竟有那样的人啊，",
            "en": "there is one such as he,"
          },
          {
            "zh": "德音无良。",
            "tw": "德行声名不良。",
            "en": "whose fame is nothing good."
          },
          {
            "zh": "胡能有定？俾也可忘。",
            "tw": "何时才能安定？教人也能淡忘。",
            "en": "How can there be peace? Would I could forget."
          }
        ],
        [
          {
            "zh": "日居月诸，",
            "tw": "太阳啊月亮啊，",
            "en": "O sun, O moon,"
          },
          {
            "zh": "东方自出。",
            "tw": "自东方升起。",
            "en": "that come from the east,"
          },
          {
            "zh": "父兮母兮，",
            "tw": "父亲啊母亲啊，",
            "en": "O father, O mother,"
          },
          {
            "zh": "畜我不卒。",
            "tw": "养我却不终老。",
            "en": "you reared me but not to the end."
          },
          {
            "zh": "胡能有定？报我不述。",
            "tw": "何时才能安定？待我全无道理。",
            "en": "How can there be peace? His care is unjust."
          }
        ]
      ]
    },
    "fullNotes": [
      {
        "zh": "日月照临，彼人不再故处，何能安定？宁不顾我？",
        "en": "Sun and moon shine down; she who left dwells here no more — how can I be at peace? Does she not care for me?",
        "words": [
          {
            "w": "居",
            "p": "jū",
            "m": "居处",
            "em": "to dwell"
          }
        ]
      },
      {
        "zh": "日月覆地，彼人不相好，何能安定？宁不报我？",
        "en": "Sun and moon cover the earth; she bears me no love — how can I rest? Does she not answer me?",
        "words": [
          {
            "w": "冒",
            "p": "mào",
            "m": "覆盖",
            "em": "to cover"
          }
        ]
      },
      {
        "zh": "日月出东，彼人德音无良，何能安定？俾亦可忘。",
        "en": "Sun and moon rise in the east; her virtue is unkind — how can I be still? Let it be forgotten.",
        "words": [
          {
            "w": "德音",
            "p": "déyīn",
            "m": "美德；好声誉",
            "em": "virtue; good repute"
          }
        ]
      },
      {
        "zh": "日月东出，父母畜我不终，何能安定？报我不述。",
        "en": "Sun and moon come from the east; my parents reared me without end — how can I be calm? Their care defies recounting.",
        "words": [
          {
            "w": "畜",
            "p": "xù",
            "m": "养育",
            "em": "to rear; to nurture"
          },
          {
            "w": "卒",
            "p": "zú",
            "m": "终；尽",
            "em": "to end"
          }
        ]
      }
    ],
    "fullTr": [
      [
        {
          "zh": "日居月诸，",
          "tw": "太阳啊月亮啊，",
          "en": "O sun, O moon,"
        },
        {
          "zh": "照临下土。",
          "tw": "光照这下界大地。",
          "en": "that shine upon the earth,"
        },
        {
          "zh": "乃如之人兮，",
          "tw": "竟有那样的人啊，",
          "en": "there is one such as he,"
        },
        {
          "zh": "逝不古处。",
          "tw": "不念旧情相处。",
          "en": "who will not treat me as of old."
        },
        {
          "zh": "胡能有定？宁不我顾？",
          "tw": "何时才能安定？竟不顾念我？",
          "en": "How can there be peace? He regards me not."
        }
      ],
      [
        {
          "zh": "日居月诸，",
          "tw": "太阳啊月亮啊，",
          "en": "O sun, O moon,"
        },
        {
          "zh": "下土是冒。",
          "tw": "覆照这下界大地。",
          "en": "that overspread the earth,"
        },
        {
          "zh": "乃如之人兮，",
          "tw": "竟有那样的人啊，",
          "en": "there is one such as he,"
        },
        {
          "zh": "逝不相好。",
          "tw": "不再与我相好。",
          "en": "who no longer loves me."
        },
        {
          "zh": "胡能有定？宁不我报？",
          "tw": "何时才能安定？竟不回报我？",
          "en": "How can there be peace? He repays me not."
        }
      ],
      [
        {
          "zh": "日居月诸，",
          "tw": "太阳啊月亮啊，",
          "en": "O sun, O moon,"
        },
        {
          "zh": "出自东方。",
          "tw": "升起自东方。",
          "en": "that rise in the east,"
        },
        {
          "zh": "乃如之人兮，",
          "tw": "竟有那样的人啊，",
          "en": "there is one such as he,"
        },
        {
          "zh": "德音无良。",
          "tw": "德行声名不良。",
          "en": "whose fame is nothing good."
        },
        {
          "zh": "胡能有定？俾也可忘。",
          "tw": "何时才能安定？教人也能淡忘。",
          "en": "How can there be peace? Would I could forget."
        }
      ],
      [
        {
          "zh": "日居月诸，",
          "tw": "太阳啊月亮啊，",
          "en": "O sun, O moon,"
        },
        {
          "zh": "东方自出。",
          "tw": "自东方升起。",
          "en": "that come from the east,"
        },
        {
          "zh": "父兮母兮，",
          "tw": "父亲啊母亲啊，",
          "en": "O father, O mother,"
        },
        {
          "zh": "畜我不卒。",
          "tw": "养我却不终老。",
          "en": "you reared me but not to the end."
        },
        {
          "zh": "胡能有定？报我不述。",
          "tw": "何时才能安定？待我全无道理。",
          "en": "How can there be peace? His care is unjust."
        }
      ]
    ]
  },
  {
    "id": 5,
    "title": "终风",
    "pinyin": "zhōng fēng",
    "theme": "爱情之美",
    "lines": [
      "终风且霾，惠然肯来，莫往莫来，悠悠我思。",
      "终风且曀，不日有曀，寤言不寐，愿言则嚏。"
    ],
    "trans": "狂风席卷扬尘埃，是否他肯顺心来。别后不来难相聚，思绪悠悠令我哀。狂风遮天又蔽地，不见太阳黑漆漆。长夜醒着难入睡，想他不住打喷嚏。",
    "notes": [
      {
        "w": "霾",
        "p": "mái",
        "m": "阴霾、沙尘。"
      },
      {
        "w": "曀",
        "p": "yì",
        "m": "天色阴沉。"
      },
      {
        "w": "嚏",
        "p": "tì",
        "m": "喷嚏。"
      }
    ],
    "appreciation": "以狂风阴霾写心境，思念之人“莫往莫来”，唯有悠悠我思。古俗以喷嚏为有人思念，末句“愿言则嚏”极富生活意趣。",
    "scene": "爱情主题打卡点、景区宣传牌。",
    "recommend": 3,
    "full": [
      "终风且暴，顾我则笑。谑浪笑敖，中心是悼。",
      "终风且霾，惠然肯来。莫往莫来，悠悠我思。",
      "终风且曀，不日有曀。寤言不寐，愿言则嚏。",
      "曀曀其阴，虺虺其雷。寤言不寐，愿言则怀。"
    ],
    "en": {
      "title": "The Ending Wind",
      "lines": [
        "The wind ends in dust; would he come kindly? Not coming, not going, my thought is long.",
        "The wind ends in gloom; waking I cannot sleep, thinking of him I sneeze."
      ],
      "full": [
        "The wind ends in violence; he looked at me and smiled. Sportive and mocking, my heart within is grieved.",
        "The wind ends in haze; would he come kindly? Not coming, not going, my thought drifts long.",
        "The wind ends in gloom, soon gloom again. Waking, I cannot sleep; thinking of him, I sneeze.",
        "Gloomy the darkness, rumbling the thunder. Waking, I cannot sleep; thinking of him, I brood."
      ],
      "trans": "The gale whirls up the dust — will he come of his own will? Since he neither comes nor goes, my longing is endless. The wind hides the sun in gloom; awake through the night, I sneeze thinking of him.",
      "appreciation": "The wind and haze mirror a troubled mind; the one she loves 'neither comes nor goes', leaving only her long thought. An old custom read a sneeze as someone thinking of you — the last line is rich with everyday charm.",
      "notes": [
        {
          "w": "霾",
          "p": "mái",
          "m": "Haze; dust storm."
        },
        {
          "w": "曀",
          "p": "yì",
          "m": "Gloomy sky."
        },
        {
          "w": "嚏",
          "p": "tì",
          "m": "To sneeze."
        }
      ],
      "scene": "Romance-themed photo spots and scenic-area promotional boards.",
      "fullTr": [
        [
          {
            "zh": "终风且暴，",
            "tw": "风终日是暴风，",
            "en": "At last the wind is wild,"
          },
          {
            "zh": "顾我则笑。",
            "tw": "他见我则含笑。",
            "en": "he smiles when he sees me."
          },
          {
            "zh": "谑浪笑敖，",
            "tw": "戏谑放浪调笑，",
            "en": "He teases, laughs, and mocks,"
          },
          {
            "zh": "中心是悼。",
            "tw": "使我心中哀伤。",
            "en": "and in my heart I mourn."
          }
        ],
        [
          {
            "zh": "终风且霾，",
            "tw": "风终日且阴霾，",
            "en": "At last the wind brings haze,"
          },
          {
            "zh": "惠然肯来。",
            "tw": "他惠然肯来临。",
            "en": "yet kindly he came to me."
          },
          {
            "zh": "莫往莫来，",
            "tw": "如今不来往了，",
            "en": "But he goes and comes no more,"
          },
          {
            "zh": "悠悠我思。",
            "tw": "悠悠是我相思。",
            "en": "and my thoughts drift long."
          }
        ],
        [
          {
            "zh": "终风且曀，",
            "tw": "风终日且阴沉，",
            "en": "At last the wind is gloomy,"
          },
          {
            "zh": "不日有曀。",
            "tw": "不多时又昏暗。",
            "en": "soon again it darkens."
          },
          {
            "zh": "寤言不寐，",
            "tw": "醒着无法入眠，",
            "en": "Awake, I cannot sleep,"
          },
          {
            "zh": "愿言则嚏。",
            "tw": "念及便打喷嚏。",
            "en": "and thinking of him, I sneeze."
          }
        ],
        [
          {
            "zh": "曀曀其阴，",
            "tw": "天色阴沉昏暗，",
            "en": "Gloomy, gloomy the sky,"
          },
          {
            "zh": "虺虺其雷。",
            "tw": "轰隆隆响着雷。",
            "en": "rumbling, rumbling the thunder."
          },
          {
            "zh": "寤言不寐，",
            "tw": "醒着无法入眠，",
            "en": "Awake, I cannot sleep,"
          },
          {
            "zh": "愿言则怀。",
            "tw": "念及满心怀念。",
            "en": "and thinking of him, I long."
          }
        ]
      ]
    },
    "fullNotes": [
      {
        "zh": "终风且暴，顾我则笑，谑浪笑敖，中心悼伤。",
        "en": "The wind ends in storm; he smiles when he looks at me, jesting and mocking — at heart I grieve.",
        "words": [
          {
            "w": "暴",
            "p": "bào",
            "m": "猛烈",
            "em": "violent"
          },
          {
            "w": "悼",
            "p": "dào",
            "m": "悲伤",
            "em": "to mourn; to grieve"
          }
        ]
      },
      {
        "zh": "终风且霾，惠然肯来；莫往莫来，悠悠我思。",
        "en": "The wind ends in dust; would he come kindly? Since he neither comes nor goes, my thought is long.",
        "words": [
          {
            "w": "霾",
            "p": "mái",
            "m": "阴霾；尘土",
            "em": "haze; dust"
          },
          {
            "w": "惠",
            "p": "huì",
            "m": "柔顺；恩惠",
            "em": "kind; gracious"
          }
        ]
      },
      {
        "zh": "终风且曀，寤不能寐，愿言则嚏。",
        "en": "The wind ends in gloom; awake I cannot sleep; thinking of him, I sneeze.",
        "words": [
          {
            "w": "曀",
            "p": "yì",
            "m": "天色阴沉",
            "em": "gloomy; overcast"
          },
          {
            "w": "嚏",
            "p": "tì",
            "m": "打喷嚏",
            "em": "to sneeze"
          }
        ]
      },
      {
        "zh": "曀曀其阴，虺虺其雷，寤不能寐，愿言则怀。",
        "en": "Dark the gloom, rumbling the thunder; awake I cannot sleep, thinking of him with longing.",
        "words": [
          {
            "w": "虺虺",
            "p": "huīhuī",
            "m": "雷声",
            "em": "rumbling thunder"
          },
          {
            "w": "怀",
            "p": "huái",
            "m": "思念；怀抱",
            "em": "to cherish; to long for"
          }
        ]
      }
    ],
    "fullTr": [
      [
        {
          "zh": "终风且暴，",
          "tw": "风终日是暴风，",
          "en": "At last the wind is wild,"
        },
        {
          "zh": "顾我则笑。",
          "tw": "他见我则含笑。",
          "en": "he smiles when he sees me."
        },
        {
          "zh": "谑浪笑敖，",
          "tw": "戏谑放浪调笑，",
          "en": "He teases, laughs, and mocks,"
        },
        {
          "zh": "中心是悼。",
          "tw": "使我心中哀伤。",
          "en": "and in my heart I mourn."
        }
      ],
      [
        {
          "zh": "终风且霾，",
          "tw": "风终日且阴霾，",
          "en": "At last the wind brings haze,"
        },
        {
          "zh": "惠然肯来。",
          "tw": "他惠然肯来临。",
          "en": "yet kindly he came to me."
        },
        {
          "zh": "莫往莫来，",
          "tw": "如今不来往了，",
          "en": "But he goes and comes no more,"
        },
        {
          "zh": "悠悠我思。",
          "tw": "悠悠是我相思。",
          "en": "and my thoughts drift long."
        }
      ],
      [
        {
          "zh": "终风且曀，",
          "tw": "风终日且阴沉，",
          "en": "At last the wind is gloomy,"
        },
        {
          "zh": "不日有曀。",
          "tw": "不多时又昏暗。",
          "en": "soon again it darkens."
        },
        {
          "zh": "寤言不寐，",
          "tw": "醒着无法入眠，",
          "en": "Awake, I cannot sleep,"
        },
        {
          "zh": "愿言则嚏。",
          "tw": "念及便打喷嚏。",
          "en": "and thinking of him, I sneeze."
        }
      ],
      [
        {
          "zh": "曀曀其阴，",
          "tw": "天色阴沉昏暗，",
          "en": "Gloomy, gloomy the sky,"
        },
        {
          "zh": "虺虺其雷。",
          "tw": "轰隆隆响着雷。",
          "en": "rumbling, rumbling the thunder."
        },
        {
          "zh": "寤言不寐，",
          "tw": "醒着无法入眠，",
          "en": "Awake, I cannot sleep,"
        },
        {
          "zh": "愿言则怀。",
          "tw": "念及满心怀念。",
          "en": "and thinking of him, I long."
        }
      ]
    ]
  },
  {
    "id": 6,
    "title": "击鼓",
    "pinyin": "jī gǔ",
    "theme": "爱情之美",
    "lines": [
      "击鼓其镗，踊跃用兵。",
      "死生契阔，与子成说。",
      "执子之手，与子偕老。"
    ],
    "trans": "击起战鼓咚咚响，士兵踊跃练武忙。一同生死不分离，我们早已立誓言。让我握住你的手，同生共死上战场。",
    "notes": [
      {
        "w": "镗",
        "p": "tānɡ",
        "m": "鼓声。"
      },
      {
        "w": "契阔",
        "p": "qì kuò",
        "m": "聚散、离合。"
      },
      {
        "w": "成说",
        "p": "chéng shuō",
        "m": "立下誓言。"
      },
      {
        "w": "偕",
        "p": "xié",
        "m": "一同。"
      }
    ],
    "appreciation": "“执子之手，与子偕老”是中国最早的爱情誓言，穿越三千年仍被世人传诵。出征士兵对妻子的深情，成就东方浪漫的千古绝唱。",
    "scene": "七夕活动、青年联谊、爱情主题打卡点、婚恋文化场景（推荐等级★★★★★）。",
    "recommend": 5,
    "full": [
      "击鼓其镗，踊跃用兵。土国城漕，我独南行。",
      "从孙子仲，平陈与宋。不我以归，忧心有忡。",
      "爰居爰处？爰丧其马？于以求之？于林之下。",
      "死生契阔，与子成说。执子之手，与子偕老。",
      "于嗟阔兮，不我活兮。于嗟洵兮，不我信兮。"
    ],
    "en": {
      "title": "Drumming",
      "lines": [
        "The drums boom, the soldiers leap to arms.",
        "In death or life we are apart-together; I pledged with you.",
        "I take your hand, and grow old with you."
      ],
      "full": [
        "The drums boom, the soldiers leap to arms. Earthworks at Guo, walls at Cao — I alone march south.",
        "I followed Sun Zizhong, to pacify Chen and Song. They will not let me return; my worried heart is heavy.",
        "Where to dwell, where to rest? Where did I lose my horse? Where to seek it? — beneath the forest.",
        "In death or life we are apart-together; with you I made the vow. I take your hand, and grow old with you.",
        "Alas, so far apart — they will not let me live. Alas, so long parted — they will not keep faith with me."
      ],
      "trans": "The war drums thunder, the soldiers drill with zeal. In life and death we are bound; we made our pledge. Let me hold your hand, and grow old together on the battlefield.",
      "appreciation": "'Hold your hand, and grow old with you' is China's earliest love vow, still recited three thousand years on. A soldier's deep love for his wife became the eternal song of Eastern romance.",
      "notes": [
        {
          "w": "镗",
          "p": "tānɡ",
          "m": "Sound of a drum."
        },
        {
          "w": "契阔",
          "p": "qì kuò",
          "m": "To meet and part; bond through separation."
        },
        {
          "w": "成说",
          "p": "chéng shuō",
          "m": "To make a vow."
        },
        {
          "w": "偕",
          "p": "xié",
          "m": "Together."
        }
      ],
      "scene": "Qixi festivals, youth socials, romance photo spots, and courtship-culture scenes (recommended ★★★★★).",
      "fullTr": [
        [
          {
            "zh": "击鼓其镗，",
            "tw": "击起战鼓镗镗，",
            "en": "The drums are beaten loud,"
          },
          {
            "zh": "踊跃用兵。",
            "tw": "踊跃操练用兵。",
            "en": "they leap to train for war."
          },
          {
            "zh": "土国城漕，",
            "tw": "国内筑城漕邑，",
            "en": "At home they build the walls,"
          },
          {
            "zh": "我独南行。",
            "tw": "独我南行从征。",
            "en": "but I must march to the south."
          }
        ],
        [
          {
            "zh": "从孙子仲，",
            "tw": "跟随孙仲元帅，",
            "en": "I follow Sun Zhong,"
          },
          {
            "zh": "平陈与宋。",
            "tw": "调停陈国宋国。",
            "en": "to pacify Chen and Song."
          },
          {
            "zh": "不我以归，",
            "tw": "不许我回归乡，",
            "en": "They will not let me home,"
          },
          {
            "zh": "忧心有忡。",
            "tw": "忧心忡忡难当。",
            "en": "my worried heart is sore."
          }
        ],
        [
          {
            "zh": "爰居爰处？爰丧其马？于以求之？于林之下。",
            "tw": "何处安身？何处歇马？马儿走失，去哪寻它？原来在树林之下。",
            "en": "Where to dwell, where to rest? Where is my lost horse? I seek it — beneath the trees."
          }
        ],
        [
          {
            "zh": "死生契阔，",
            "tw": "生死离合聚散，",
            "en": "In life and death we parted,"
          },
          {
            "zh": "与子成说。",
            "tw": "与你立下誓约。",
            "en": "I made my vow with you."
          },
          {
            "zh": "执子之手，",
            "tw": "紧握你的手，",
            "en": "I held your hand,"
          },
          {
            "zh": "与子偕老。",
            "tw": "与你白头到老。",
            "en": "and said we'd grow old together."
          }
        ],
        [
          {
            "zh": "于嗟阔兮，",
            "tw": "可叹相隔遥远，",
            "en": "Alas, how far apart,"
          },
          {
            "zh": "不我活兮。",
            "tw": "不让我相聚。",
            "en": "it keeps me from life with you."
          },
          {
            "zh": "于嗟洵兮，",
            "tw": "可叹实在久长，",
            "en": "Alas, how long the parting,"
          },
          {
            "zh": "不我信兮。",
            "tw": "不让我守信约。",
            "en": "it keeps me from my pledge."
          }
        ]
      ]
    },
    "fullNotes": [
      {
        "zh": "击鼓其镗，踊跃用兵，土国城漕，我独南行。",
        "en": "The drums boom; soldiers leap to arms. Others build the state, I alone march south.",
        "words": [
          {
            "w": "镗",
            "p": "tāng",
            "m": "鼓声",
            "em": "drum sound"
          },
          {
            "w": "漕",
            "p": "cáo",
            "m": "漕邑（地名）",
            "em": "Cao (place name)"
          }
        ]
      },
      {
        "zh": "从孙子仲，平陈与宋，不我以归，忧心忡忡。",
        "en": "I follow Sun Zizhong to pacify Chen and Song; denied return, my heart is anxious.",
        "words": [
          {
            "w": "平",
            "p": "píng",
            "m": "平息；调和",
            "em": "to pacify"
          },
          {
            "w": "忡忡",
            "p": "chōngchōng",
            "m": "忧虑",
            "em": "anxious"
          }
        ]
      },
      {
        "zh": "爰居爰处？爰丧其马？于以求之于林之下。",
        "en": "Where do we lodge? Where is my lost horse? I seek it beneath the trees.",
        "words": [
          {
            "w": "爰",
            "p": "yuán",
            "m": "何处；于是",
            "em": "where; there"
          },
          {
            "w": "丧",
            "p": "sàng",
            "m": "丧失",
            "em": "to lose"
          }
        ]
      },
      {
        "zh": "死生契阔，与子成说；执子之手，与子偕老。",
        "en": "In life and death, apart yet bound, we pledged: I take your hand, and grow old with you.",
        "words": [
          {
            "w": "契阔",
            "p": "qìkuò",
            "m": "聚散；生死相约",
            "em": "to bind in a life-death pledge"
          },
          {
            "w": "偕",
            "p": "xié",
            "m": "一同",
            "em": "together"
          }
        ]
      },
      {
        "zh": "于嗟阔兮不我活，于嗟洵兮不我信。",
        "en": "Alas, so far apart, I cannot live with you; alas, so true, our vow unkept.",
        "words": [
          {
            "w": "于嗟",
            "p": "yújiē",
            "m": "叹词",
            "em": "alas"
          },
          {
            "w": "洵",
            "p": "xún",
            "m": "确实",
            "em": "truly"
          }
        ]
      }
    ],
    "fullTr": [
      [
        {
          "zh": "击鼓其镗，",
          "tw": "击起战鼓镗镗，",
          "en": "The drums are beaten loud,"
        },
        {
          "zh": "踊跃用兵。",
          "tw": "踊跃操练用兵。",
          "en": "they leap to train for war."
        },
        {
          "zh": "土国城漕，",
          "tw": "国内筑城漕邑，",
          "en": "At home they build the walls,"
        },
        {
          "zh": "我独南行。",
          "tw": "独我南行从征。",
          "en": "but I must march to the south."
        }
      ],
      [
        {
          "zh": "从孙子仲，",
          "tw": "跟随孙仲元帅，",
          "en": "I follow Sun Zhong,"
        },
        {
          "zh": "平陈与宋。",
          "tw": "调停陈国宋国。",
          "en": "to pacify Chen and Song."
        },
        {
          "zh": "不我以归，",
          "tw": "不许我回归乡，",
          "en": "They will not let me home,"
        },
        {
          "zh": "忧心有忡。",
          "tw": "忧心忡忡难当。",
          "en": "my worried heart is sore."
        }
      ],
      [
        {
          "zh": "爰居爰处？爰丧其马？于以求之？于林之下。",
          "tw": "何处安身？何处歇马？马儿走失，去哪寻它？原来在树林之下。",
          "en": "Where to dwell, where to rest? Where is my lost horse? I seek it — beneath the trees."
        }
      ],
      [
        {
          "zh": "死生契阔，",
          "tw": "生死离合聚散，",
          "en": "In life and death we parted,"
        },
        {
          "zh": "与子成说。",
          "tw": "与你立下誓约。",
          "en": "I made my vow with you."
        },
        {
          "zh": "执子之手，",
          "tw": "紧握你的手，",
          "en": "I held your hand,"
        },
        {
          "zh": "与子偕老。",
          "tw": "与你白头到老。",
          "en": "and said we'd grow old together."
        }
      ],
      [
        {
          "zh": "于嗟阔兮，",
          "tw": "可叹相隔遥远，",
          "en": "Alas, how far apart,"
        },
        {
          "zh": "不我活兮。",
          "tw": "不让我相聚。",
          "en": "it keeps me from life with you."
        },
        {
          "zh": "于嗟洵兮，",
          "tw": "可叹实在久长，",
          "en": "Alas, how long the parting,"
        },
        {
          "zh": "不我信兮。",
          "tw": "不让我守信约。",
          "en": "it keeps me from my pledge."
        }
      ]
    ]
  },
  {
    "id": 7,
    "title": "凯风",
    "pinyin": "kǎi fēng",
    "theme": "亲情之厚",
    "lines": [
      "凯风自南，吹彼棘心。棘心夭夭，母氏劬劳。",
      "凯风自南，吹彼棘薪。母氏圣善，我无令人。"
    ],
    "trans": "和风煦煦自南方，吹在枣树嫩芽上。枣树芽心嫩又壮，母亲养儿辛苦忙。和风煦煦自南方，枣树成柴风吹长。母亲明理又善良，儿子不好不怨娘。",
    "notes": [
      {
        "w": "凯风",
        "p": "kǎi fēng",
        "m": "暖风、和风，喻母亲。"
      },
      {
        "w": "棘心",
        "p": "jí xīn",
        "m": "酸枣树嫩芽，喻子女。"
      },
      {
        "w": "劬",
        "p": "qú",
        "m": "劳苦。"
      },
      {
        "w": "令",
        "p": "lìng",
        "m": "善、好。"
      }
    ],
    "appreciation": "以南方暖风吹拂枣苗，喻母亲养育之恩。澳门回归《七子之歌》即源于《凯风》，是中华孝亲文化的经典诗篇。",
    "scene": "亲子活动、家庭主题景观、乡村文化墙、研学教育基地（推荐等级★★★★）。",
    "recommend": 4,
    "full": [
      "凯风自南，吹彼棘心。棘心夭夭，母氏劬劳。",
      "凯风自南，吹彼棘薪。母氏圣善，我无令人。",
      "爰有寒泉，在浚之下。有子七人，母氏劳苦。",
      "睍睆黄鸟，载好其音。有子七人，莫慰母心。"
    ],
    "en": {
      "title": "The Warm Wind",
      "lines": [
        "The warm wind from the south blows on the thorn's tender heart.",
        "The warm wind from the south blows on the thorn for fuel; our mother is holy and good."
      ],
      "full": [
        "The warm wind from the south blows on the thorn's tender heart. The tender heart flourishes — our mother's toil was great.",
        "The warm wind from the south blows on the thorn for fuel. Our mother is holy and good; I am no worthy son.",
        "There is the cold spring, below the Jun. Seven sons we are, and our mother's labor was hard.",
        "The yellow birds warble, fine is their sound. Seven sons we are, yet none comforts our mother's heart."
      ],
      "trans": "The gentle south wind blows upon the date-thorn's young shoot — our mother labored sore. The gentle south wind blows the thorn to firewood; our mother is good, and I am no credit to her.",
      "appreciation": "The south wind nurturing the thorn stands for a mother's rearing love. Macau's return song 'Song of the Seven Sons' drew on 'Kai Feng' — a classic of Chinese filial piety.",
      "notes": [
        {
          "w": "凯风",
          "p": "kǎi fēng",
          "m": "Warm, gentle wind; figuratively the mother."
        },
        {
          "w": "棘心",
          "p": "jí xīn",
          "m": "Tender shoot of the jujube; figuratively the child."
        },
        {
          "w": "劬",
          "p": "qú",
          "m": "Toil; hardship."
        },
        {
          "w": "令",
          "p": "lìng",
          "m": "Good; worthy."
        }
      ],
      "scene": "Mother's Day events, filial-piety displays, family-tradition publicity, and study-tour bases.",
      "fullTr": [
        [
          {
            "zh": "凯风自南，",
            "tw": "和暖南风吹来，",
            "en": "The gentle south wind blows,"
          },
          {
            "zh": "吹彼棘心。",
            "tw": "吹拂酸枣嫩心。",
            "en": "upon the thorn's young shoot."
          },
          {
            "zh": "棘心夭夭，",
            "tw": "棘心柔嫩繁茂，",
            "en": "The shoot grows tender,"
          },
          {
            "zh": "母氏劬劳。",
            "tw": "母亲辛勤操劳。",
            "en": "my mother toiled for me."
          }
        ],
        [
          {
            "zh": "凯风自南，",
            "tw": "和暖南风吹来，",
            "en": "The gentle south wind blows,"
          },
          {
            "zh": "吹彼棘薪。",
            "tw": "吹拂酸枣成薪。",
            "en": "upon the thorn now fuel."
          },
          {
            "zh": "母氏圣善，",
            "tw": "母亲圣洁善良，",
            "en": "My mother is good and kind,"
          },
          {
            "zh": "我无令人。",
            "tw": "我却不成材人。",
            "en": "I, unworthy, shame her."
          }
        ],
        [
          {
            "zh": "爰有寒泉，",
            "tw": "那里有寒泉水，",
            "en": "There is the cold spring,"
          },
          {
            "zh": "在浚之下。",
            "tw": "在浚城之下流。",
            "en": "flowing beneath Jun."
          },
          {
            "zh": "有子七人，",
            "tw": "虽有儿子七人，",
            "en": "Seven sons have I borne,"
          },
          {
            "zh": "母氏劳苦。",
            "tw": "母亲劳苦不休。",
            "en": "yet my mother's toil is hard."
          }
        ],
        [
          {
            "zh": "睍睆黄鸟，",
            "tw": "黄鸟鸣声清丽，",
            "en": "The oriole sings sweet,"
          },
          {
            "zh": "载好其音。",
            "tw": "唱出婉转好音。",
            "en": "with pleasant voice."
          },
          {
            "zh": "有子七人，",
            "tw": "虽有儿子七人，",
            "en": "Seven sons have I borne,"
          },
          {
            "zh": "莫慰母心。",
            "tw": "无人慰藉母心。",
            "en": "yet none can comfort her."
          }
        ]
      ]
    },
    "fullNotes": [
      {
        "zh": "凯风南来吹拂棘心，母氏劬劳。",
        "en": "The warm south wind blows the thorn's heart; how my mother labored.",
        "words": [
          {
            "w": "凯风",
            "p": "kǎifēng",
            "m": "南风；和风",
            "em": "south wind"
          },
          {
            "w": "劬",
            "p": "qú",
            "m": "劳苦",
            "em": "to toil"
          }
        ]
      },
      {
        "zh": "凯风吹棘为薪，母氏圣善，我无令人。",
        "en": "The south wind turns thorn to firewood; my mother is sage and kind, while I am no worthy son.",
        "words": [
          {
            "w": "薪",
            "p": "xīn",
            "m": "柴火",
            "em": "firewood"
          },
          {
            "w": "令",
            "p": "lìng",
            "m": "善；美好",
            "em": "good; fine"
          }
        ]
      },
      {
        "zh": "寒泉在浚之下，有子七人，母氏劳苦。",
        "en": "Cold springs flow below Xun; with seven sons, still my mother toils.",
        "words": [
          {
            "w": "浚",
            "p": "jùn",
            "m": "卫地名",
            "em": "Xun (place name)"
          }
        ]
      },
      {
        "zh": "黄鸟好音，有子七人，莫慰母心。",
        "en": "The oriole sings sweetly; with seven sons, none can ease her heart.",
        "words": [
          {
            "w": "黄鸟",
            "p": "huángniǎo",
            "m": "黄雀",
            "em": "oriole"
          },
          {
            "w": "慰",
            "p": "wèi",
            "m": "安慰",
            "em": "to comfort"
          }
        ]
      }
    ],
    "fullTr": [
      [
        {
          "zh": "凯风自南，",
          "tw": "和暖南风吹来，",
          "en": "The gentle south wind blows,"
        },
        {
          "zh": "吹彼棘心。",
          "tw": "吹拂酸枣嫩心。",
          "en": "upon the thorn's young shoot."
        },
        {
          "zh": "棘心夭夭，",
          "tw": "棘心柔嫩繁茂，",
          "en": "The shoot grows tender,"
        },
        {
          "zh": "母氏劬劳。",
          "tw": "母亲辛勤操劳。",
          "en": "my mother toiled for me."
        }
      ],
      [
        {
          "zh": "凯风自南，",
          "tw": "和暖南风吹来，",
          "en": "The gentle south wind blows,"
        },
        {
          "zh": "吹彼棘薪。",
          "tw": "吹拂酸枣成薪。",
          "en": "upon the thorn now fuel."
        },
        {
          "zh": "母氏圣善，",
          "tw": "母亲圣洁善良，",
          "en": "My mother is good and kind,"
        },
        {
          "zh": "我无令人。",
          "tw": "我却不成材人。",
          "en": "I, unworthy, shame her."
        }
      ],
      [
        {
          "zh": "爰有寒泉，",
          "tw": "那里有寒泉水，",
          "en": "There is the cold spring,"
        },
        {
          "zh": "在浚之下。",
          "tw": "在浚城之下流。",
          "en": "flowing beneath Jun."
        },
        {
          "zh": "有子七人，",
          "tw": "虽有儿子七人，",
          "en": "Seven sons have I borne,"
        },
        {
          "zh": "母氏劳苦。",
          "tw": "母亲劳苦不休。",
          "en": "yet my mother's toil is hard."
        }
      ],
      [
        {
          "zh": "睍睆黄鸟，",
          "tw": "黄鸟鸣声清丽，",
          "en": "The oriole sings sweet,"
        },
        {
          "zh": "载好其音。",
          "tw": "唱出婉转好音。",
          "en": "with pleasant voice."
        },
        {
          "zh": "有子七人，",
          "tw": "虽有儿子七人，",
          "en": "Seven sons have I borne,"
        },
        {
          "zh": "莫慰母心。",
          "tw": "无人慰藉母心。",
          "en": "yet none can comfort her."
        }
      ]
    ]
  },
  {
    "id": 8,
    "title": "雄雉",
    "pinyin": "xióng zhì",
    "theme": "乡愁之深",
    "lines": [
      "瞻彼日月，悠悠我思。",
      "道之云远，曷云能来？"
    ],
    "trans": "看看那日月，思念更悠长。路途太遥远，哪能回故乡？",
    "notes": [
      {
        "w": "瞻",
        "p": "zhān",
        "m": "看、望。"
      },
      {
        "w": "曷",
        "p": "hé",
        "m": "何、怎么。"
      }
    ],
    "appreciation": "仰望日月而思归，道路遥远而难返。以极简之笔写极深之乡愁，情致悠远。",
    "scene": "邶风故里入口、游客中心、返乡主题宣传。",
    "recommend": 3,
    "full": [
      "雄雉于飞，泄泄其羽。我之怀矣，自诒伊阻。",
      "雄雉于飞，下上其音。展矣君子，实劳我心。",
      "瞻彼日月，悠悠我思。道之云远，曷云能来？",
      "百尔君子，不知德行。不忮不求，何用不臧。"
    ],
    "en": {
      "title": "The Pheasant",
      "lines": [
        "I gaze at sun and moon; my thought is long.",
        "The road is so far — how can he come?"
      ],
      "full": [
        "The pheasant cocks fly, their feathers at ease. The one I long for — I have brought this separation on myself.",
        "The pheasant cocks fly, their notes rising and falling. The gentleman afar truly wears my heart.",
        "I gaze at sun and moon; my thought drifts long. The road is so far — how can he ever come?",
        "You many gentlemen, who know not virtue's way. Seek nothing, covet nothing — how could it not be well?"
      ],
      "trans": "I look to the sun and moon; my longing grows. The way is too far — how can he return?",
      "appreciation": "Gazing at sun and moon, he thinks of home; the road is far and hard to return. In the sparest lines it conveys the deepest homesickness, distant and refined.",
      "notes": [
        {
          "w": "瞻",
          "p": "zhān",
          "m": "To look; to gaze."
        },
        {
          "w": "曷",
          "p": "hé",
          "m": "How; why."
        }
      ],
      "scene": "Gentleman-culture displays, integrity-culture walls, and character-education scenes.",
      "fullTr": [
        [
          {
            "zh": "雄雉于飞，",
            "tw": "雄雉展翅飞，",
            "en": "The male pheasant flies,"
          },
          {
            "zh": "泄泄其羽。",
            "tw": "缓缓舒其羽。",
            "en": "slowly spreading plumes."
          },
          {
            "zh": "我之怀矣，",
            "tw": "我所怀念的人，",
            "en": "He whom I miss,"
          },
          {
            "zh": "自诒伊阻。",
            "tw": "自招这阻隔。",
            "en": "has brought me this woe."
          }
        ],
        [
          {
            "zh": "雄雉于飞，",
            "tw": "雄雉展翅飞，",
            "en": "The male pheasant flies,"
          },
          {
            "zh": "下上其音。",
            "tw": "鸣声上下传。",
            "en": "its voice high and low."
          },
          {
            "zh": "展矣君子，",
            "tw": "诚实的君子，",
            "en": "O steadfast gentleman,"
          },
          {
            "zh": "实劳我心。",
            "tw": "实使我心劳。",
            "en": "you truly grieve my heart."
          }
        ],
        [
          {
            "zh": "瞻彼日月，",
            "tw": "仰望那日月，",
            "en": "I gaze at sun and moon,"
          },
          {
            "zh": "悠悠我思。",
            "tw": "悠悠是我相思。",
            "en": "my thoughts drift far and long."
          },
          {
            "zh": "道之云远，",
            "tw": "道路那样遥远，",
            "en": "The way is so distant,"
          },
          {
            "zh": "曷云能来？",
            "tw": "何时才能归来？",
            "en": "how can he ever come?"
          }
        ],
        [
          {
            "zh": "百尔君子，",
            "tw": "你们众位君子，",
            "en": "You hundred gentlemen,"
          },
          {
            "zh": "不知德行。",
            "tw": "不知修德行事。",
            "en": "you know not virtue's way."
          },
          {
            "zh": "不忮不求，",
            "tw": "不嫉妒不贪求，",
            "en": "Free of envy, free of want,"
          },
          {
            "zh": "何用不臧。",
            "tw": "何事不向好？",
            "en": "what then can go amiss?"
          }
        ]
      ]
    },
    "fullNotes": [
      {
        "zh": "雄雉泄羽，我之怀矣，自诒伊阻。",
        "en": "The male pheasant spreads his plumes; my longing brings me only distance.",
        "words": [
          {
            "w": "泄",
            "p": "yì",
            "m": "舒展开",
            "em": "to spread wings"
          },
          {
            "w": "诒",
            "p": "yí",
            "m": "遗留；招致",
            "em": "to bring; to cause"
          }
        ]
      },
      {
        "zh": "雄雉下上其音，展矣君子，实劳我心。",
        "en": "The pheasant calls above and below; my noble lord, you weary my heart.",
        "words": [
          {
            "w": "展",
            "p": "zhǎn",
            "m": "诚实；舒展",
            "em": "earnest"
          },
          {
            "w": "劳",
            "p": "láo",
            "m": "忧劳",
            "em": "to weary"
          }
        ]
      },
      {
        "zh": "瞻彼日月，悠悠我思，道远曷能来。",
        "en": "I watch the sun and moon; my thought is endless, the road far — how can he come?",
        "words": [
          {
            "w": "瞻",
            "p": "zhān",
            "m": "远望",
            "em": "to look afar"
          },
          {
            "w": "曷",
            "p": "hé",
            "m": "何；怎么",
            "em": "how"
          }
        ]
      },
      {
        "zh": "百尔君子不知德行，不忮不求，何用不臧。",
        "en": "You gentlemen know not virtue: without envy or greed, what could go amiss?",
        "words": [
          {
            "w": "忮",
            "p": "zhì",
            "m": "嫉妒",
            "em": "to envy"
          },
          {
            "w": "臧",
            "p": "zāng",
            "m": "善；好",
            "em": "good"
          }
        ]
      }
    ],
    "fullTr": [
      [
        {
          "zh": "雄雉于飞，",
          "tw": "雄雉展翅飞，",
          "en": "The male pheasant flies,"
        },
        {
          "zh": "泄泄其羽。",
          "tw": "缓缓舒其羽。",
          "en": "slowly spreading plumes."
        },
        {
          "zh": "我之怀矣，",
          "tw": "我所怀念的人，",
          "en": "He whom I miss,"
        },
        {
          "zh": "自诒伊阻。",
          "tw": "自招这阻隔。",
          "en": "has brought me this woe."
        }
      ],
      [
        {
          "zh": "雄雉于飞，",
          "tw": "雄雉展翅飞，",
          "en": "The male pheasant flies,"
        },
        {
          "zh": "下上其音。",
          "tw": "鸣声上下传。",
          "en": "its voice high and low."
        },
        {
          "zh": "展矣君子，",
          "tw": "诚实的君子，",
          "en": "O steadfast gentleman,"
        },
        {
          "zh": "实劳我心。",
          "tw": "实使我心劳。",
          "en": "you truly grieve my heart."
        }
      ],
      [
        {
          "zh": "瞻彼日月，",
          "tw": "仰望那日月，",
          "en": "I gaze at sun and moon,"
        },
        {
          "zh": "悠悠我思。",
          "tw": "悠悠是我相思。",
          "en": "my thoughts drift far and long."
        },
        {
          "zh": "道之云远，",
          "tw": "道路那样遥远，",
          "en": "The way is so distant,"
        },
        {
          "zh": "曷云能来？",
          "tw": "何时才能归来？",
          "en": "how can he ever come?"
        }
      ],
      [
        {
          "zh": "百尔君子，",
          "tw": "你们众位君子，",
          "en": "You hundred gentlemen,"
        },
        {
          "zh": "不知德行。",
          "tw": "不知修德行事。",
          "en": "you know not virtue's way."
        },
        {
          "zh": "不忮不求，",
          "tw": "不嫉妒不贪求，",
          "en": "Free of envy, free of want,"
        },
        {
          "zh": "何用不臧。",
          "tw": "何事不向好？",
          "en": "what then can go amiss?"
        }
      ]
    ]
  },
  {
    "id": 9,
    "title": "匏有苦叶",
    "pinyin": "páo yǒu kǔ yè",
    "theme": "爱情之美",
    "lines": [
      "招招舟子，人涉卬否。",
      "人涉卬否，卬须我友。"
    ],
    "trans": "船夫挥手频招呼，别人渡河我不争。别人渡河我不争，我将恋人静静等。",
    "notes": [
      {
        "w": "匏",
        "p": "páo",
        "m": "葫芦，古人佩以渡水。"
      },
      {
        "w": "卬",
        "p": "áng",
        "m": "我。"
      },
      {
        "w": "友",
        "p": "yǒu",
        "m": "指所恋之人。"
      }
    ],
    "appreciation": "渡口舟子频招，众人皆渡，唯“我”守岸以待所爱。写少女（或男子）痴心等待，纯真动人，是《邶风》中清新的爱情剪影。",
    "scene": "爱情主题打卡点、景区宣传牌。",
    "recommend": 3,
    "full": [
      "匏有苦叶，济有深涉。深则厉，浅则揭。",
      "有瀰济盈，有鷕雉鸣。济盈不濡轨，雉鸣求其牡。",
      "雝雝鸣雁，旭日始旦。士如归妻，迨冰未泮。",
      "招招舟子，人涉卬否。人涉卬否，卬须我友。"
    ],
    "en": {
      "title": "The Bitter Gourd Leaf",
      "lines": [
        "The boatman beckons; others cross, but not I.",
        "Others cross, but not I — I await my friend."
      ],
      "full": [
        "The gourd has its bitter leaf; the Ji has its deep ford. Deep, wade through; shallow, lift the hem.",
        "The Ji brims full; the pheasant cries. The brimming Ji wets not the axle — the pheasant calls for its mate.",
        "Harmonious the wild geese cry; the sun just rises. A man who would wed should do so before the ice melts.",
        "The boatman beckons; others cross, but not I. Others cross, but not I — I await my friend."
      ],
      "trans": "The boatman waves again and again; others ferry across, but not I. Others ferry across, but not I — I wait quietly for my beloved.",
      "appreciation": "At the ferry the boatman calls, all cross but 'I' stay on the bank for the one I love. A pure, moving portrait of devoted waiting — a fresh love sketch within Beifeng.",
      "notes": [
        {
          "w": "匏",
          "p": "páo",
          "m": "Gourd; ancients tied it to float across water."
        },
        {
          "w": "卬",
          "p": "áng",
          "m": "I (first person)."
        },
        {
          "w": "友",
          "p": "yǒu",
          "m": "Here, the beloved."
        }
      ],
      "scene": "Courtship-culture scenes, wetland parks, and romance-themed photo spots.",
      "fullTr": [
        [
          {
            "zh": "匏有苦叶，",
            "tw": "匏瓜叶已枯苦，",
            "en": "The gourd has bitter leaves,"
          },
          {
            "zh": "济有深涉。",
            "tw": "济水深处可涉。",
            "en": "the Ji has fords deep."
          },
          {
            "zh": "深则厉，",
            "tw": "水深连衣渡，",
            "en": "Deep, then wade in cloak;"
          },
          {
            "zh": "浅则揭。",
            "tw": "水浅提起衣。",
            "en": "shallow, then lift the hem."
          }
        ],
        [
          {
            "zh": "有瀰济盈，",
            "tw": "济水漫漫涨满，",
            "en": "The Ji brims full and wide,"
          },
          {
            "zh": "有鷕雉鸣。",
            "tw": "野鸡咯咯鸣叫。",
            "en": "a pheasant cries shrill."
          },
          {
            "zh": "济盈不濡轨，",
            "tw": "水满不湿轴头，",
            "en": "Full though it is, not wetting the axle,"
          },
          {
            "zh": "雉鸣求其牡。",
            "tw": "雌雉鸣叫求偶。",
            "en": "the pheasant calls for her mate."
          }
        ],
        [
          {
            "zh": "雝雝鸣雁，",
            "tw": "大雁雝雝和鸣，",
            "en": "The wild geese honk in pairs,"
          },
          {
            "zh": "旭日始旦。",
            "tw": "旭日初升天明。",
            "en": "the morning sun just risen."
          },
          {
            "zh": "士如归妻，",
            "tw": "男子若娶妻，",
            "en": "If a man would wed,"
          },
          {
            "zh": "迨冰未泮。",
            "tw": "趁冰未消迎娶。",
            "en": "let him haste ere ice melts."
          }
        ],
        [
          {
            "zh": "招招舟子，",
            "tw": "船夫招手相唤，",
            "en": "The boatman beckons,"
          },
          {
            "zh": "人涉卬否。",
            "tw": "别人渡河我不渡。",
            "en": "others cross, not I."
          },
          {
            "zh": "人涉卬否，",
            "tw": "别人渡河我不渡，",
            "en": "Others cross, not I,"
          },
          {
            "zh": "卬须我友。",
            "tw": "我等我的友人。",
            "en": "I wait for my friend."
          }
        ]
      ]
    },
    "fullNotes": [
      {
        "zh": "匏有苦叶，济有深涉；深则厉，浅则揭。",
        "en": "The gourd has bitter leaves; the Ji has deep fords — deep, wade; shallow, lift your hem.",
        "words": [
          {
            "w": "匏",
            "p": "páo",
            "m": "葫芦",
            "em": "gourd"
          },
          {
            "w": "厉",
            "p": "lì",
            "m": "涉水；穿着涉水",
            "em": "to wade"
          }
        ]
      },
      {
        "zh": "济盈鷕雉鸣，雉鸣求其牡。",
        "en": "The Ji brims; the pheasant cries, calling for her mate.",
        "words": [
          {
            "w": "鷕",
            "p": "yǎo",
            "m": "雉鸣声",
            "em": "cry of a pheasant"
          },
          {
            "w": "牡",
            "p": "mǔ",
            "m": "雄性",
            "em": "male"
          }
        ]
      },
      {
        "zh": "雝雝鸣雁，旭日始旦，士如归妻迨冰未泮。",
        "en": "Wild geese call in harmony at dawn; a man who weds should do so before the ice thaws.",
        "words": [
          {
            "w": "雝雝",
            "p": "yōngyōng",
            "m": "和谐鸣声",
            "em": "harmonious cry"
          },
          {
            "w": "泮",
            "p": "pàn",
            "m": "融化；分解",
            "em": "to melt"
          }
        ]
      },
      {
        "zh": "招招舟子，人涉卬否，卬须我友。",
        "en": "The boatman beckons; others cross, but I will not — I await my friend.",
        "words": [
          {
            "w": "卬",
            "p": "áng",
            "m": "我",
            "em": "I"
          },
          {
            "w": "须",
            "p": "xū",
            "m": "等待",
            "em": "to await"
          }
        ]
      }
    ],
    "fullTr": [
      [
        {
          "zh": "匏有苦叶，",
          "tw": "匏瓜叶已枯苦，",
          "en": "The gourd has bitter leaves,"
        },
        {
          "zh": "济有深涉。",
          "tw": "济水深处可涉。",
          "en": "the Ji has fords deep."
        },
        {
          "zh": "深则厉，",
          "tw": "水深连衣渡，",
          "en": "Deep, then wade in cloak;"
        },
        {
          "zh": "浅则揭。",
          "tw": "水浅提起衣。",
          "en": "shallow, then lift the hem."
        }
      ],
      [
        {
          "zh": "有瀰济盈，",
          "tw": "济水漫漫涨满，",
          "en": "The Ji brims full and wide,"
        },
        {
          "zh": "有鷕雉鸣。",
          "tw": "野鸡咯咯鸣叫。",
          "en": "a pheasant cries shrill."
        },
        {
          "zh": "济盈不濡轨，",
          "tw": "水满不湿轴头，",
          "en": "Full though it is, not wetting the axle,"
        },
        {
          "zh": "雉鸣求其牡。",
          "tw": "雌雉鸣叫求偶。",
          "en": "the pheasant calls for her mate."
        }
      ],
      [
        {
          "zh": "雝雝鸣雁，",
          "tw": "大雁雝雝和鸣，",
          "en": "The wild geese honk in pairs,"
        },
        {
          "zh": "旭日始旦。",
          "tw": "旭日初升天明。",
          "en": "the morning sun just risen."
        },
        {
          "zh": "士如归妻，",
          "tw": "男子若娶妻，",
          "en": "If a man would wed,"
        },
        {
          "zh": "迨冰未泮。",
          "tw": "趁冰未消迎娶。",
          "en": "let him haste ere ice melts."
        }
      ],
      [
        {
          "zh": "招招舟子，",
          "tw": "船夫招手相唤，",
          "en": "The boatman beckons,"
        },
        {
          "zh": "人涉卬否。",
          "tw": "别人渡河我不渡。",
          "en": "others cross, not I."
        },
        {
          "zh": "人涉卬否，",
          "tw": "别人渡河我不渡，",
          "en": "Others cross, not I,"
        },
        {
          "zh": "卬须我友。",
          "tw": "我等我的友人。",
          "en": "I wait for my friend."
        }
      ]
    ]
  },
  {
    "id": 10,
    "title": "谷风",
    "pinyin": "gǔ fēng",
    "theme": "讽喻怨刺",
    "sensitive": true,
    "lines": [
      "习习谷风，以阴以雨。",
      "凡民有丧，匍匐救之。"
    ],
    "trans": "和风习习，挟着阴雨；夫妻本应同心，不该轻易动怒。采了蔓菁采了萝卜，岂可只取叶而弃其根？往日的誓言不要违背，曾相约与你同生共死。",
    "notes": [
      {
        "w": "习习",
        "p": "xí xí",
        "m": "风连续吹拂的样子。"
      },
      {
        "w": "谷风",
        "p": "gǔ fēng",
        "m": "来自山谷的风，此指东风。"
      },
      {
        "w": "黾勉",
        "p": "mǐn miǎn",
        "m": "努力、勉励。"
      },
      {
        "w": "葑菲",
        "p": "fēng fěi",
        "m": "蔓菁与萝卜，喻婚姻不可只取表面。"
      },
      {
        "w": "匍匐",
        "p": "pú fú",
        "m": "竭力、伏地而行，此指尽力。"
      }
    ],
    "appreciation": "弃妇之诗，“黾勉同心”是被抛弃后的控诉，“及尔同死”在原语境中为反讽。写遭遗弃的悲苦与对薄情的不平，是《邶风》中沉痛的婚姻悲歌。",
    "scene": "——（文旅宣传建议：不宜作为景区标语）",
    "recommend": 0,
    "note": "文旅文案建议：本篇涉及婚姻背叛、家庭破裂，认为不宜选用，避免争议。",
    "full": [
      "习习谷风，以阴以雨。黾勉同心，不宜有怒。采葑采菲，无以下体。德音莫违，及尔同死。",
      "行道迟迟，中心有违。不远伊迩，薄送我畿。谁谓荼苦，其甘如荠。宴尔新婚，如兄如弟。",
      "泾以渭浊，湜湜其沚。宴尔新婚，不我屑以。毋逝我梁，毋发我笱。我躬不阅，遑恤我后。",
      "就其深矣，方之舟之。就其浅矣，泳之游之。何有何亡，黾勉求之。凡民有丧，匍匐救之。",
      "不我能慉，反以我为雠。既阻我德，贾用不售。昔育恐育鞫，及尔颠覆。既生既育，比予于毒。",
      "我有旨蓄，亦以御冬。宴尔新婚，以我御穷。有洸有溃，既诒我肄。不念昔者，伊余来塈。"
    ],
    "en": {
      "title": "The Valley Wind",
      "lines": [
        "The valley wind blows on, with cloud and rain.",
        "For any in distress, I crawled to help."
      ],
      "full": [
        "The valley wind blows on, with cloud and rain. Strive in one heart — anger should not come. Gather the mustard and radish, but not their roots. Keep your good word; I pledged to die with you.",
        "Slowly I walked, my heart against it. Not far, not near — you saw me but to my threshold. Who says the bitter herb is bitter? It is sweet as the shepherd's-purse. Happy in your new marriage, you are as brothers.",
        "The Jing muddies the Wei; clear in the shallows. Happy in your new marriage, you disdain me. Go not to my weir, disturb not my trap. My own self unregarded — how care for what follows?",
        "Where it is deep, bridge it with a boat; where shallow, swim or wade. What we had or lacked, I strove to get. For any in distress, I crawled to help.",
        "You could not cherish me, but turned me to foe. You blocked my goodness, as goods unsold. In want and fear we once stood; with you I fell. Now grown and fed, you count me as poison.",
        "I had good stores, to ward the winter. Happy in your new marriage, you used me against want. With rage and rout, you left me the toil. Forget the past — yet I came to you."
      ],
      "trans": "The valley wind blows on, with cloud and rain; man and wife should be of one heart, not quick to anger. Gather the mustard and radish, yet not their roots? Keep the old vow — once we pledged to die together.",
      "appreciation": "A poem of the deserted wife; 'strive in one heart' is her accusation, 'die with you' an irony in context. It voices the grief of abandonment and the injustice of a fickle heart — a sorrowful marriage elegy of Beifeng.",
      "notes": [
        {
          "w": "习习",
          "p": "xí xí",
          "m": "Wind blowing continuously."
        },
        {
          "w": "谷风",
          "p": "gǔ fēng",
          "m": "Wind from the valley; here the east wind."
        },
        {
          "w": "黾勉",
          "p": "mǐn miǎn",
          "m": "To strive; to exert."
        },
        {
          "w": "葑菲",
          "p": "fēng fěi",
          "m": "Mustard and radish; a marriage should not take only the surface."
        },
        {
          "w": "匍匐",
          "p": "pú fú",
          "m": "To crawl; here, to exert oneself."
        }
      ],
      "fullTr": [
        [
          {
            "zh": "习习谷风，",
            "tw": "谷风习习吹来，",
            "en": "The valley wind blows soft,"
          },
          {
            "zh": "以阴以雨。",
            "tw": "带来阴云细雨。",
            "en": "with shade and with rain."
          },
          {
            "zh": "黾勉同心，",
            "tw": "曾勉力同其心，",
            "en": "We strove with one heart,"
          },
          {
            "zh": "不宜有怒。",
            "tw": "本不该有怒气。",
            "en": "you should not have been angry."
          },
          {
            "zh": "采葑采菲，",
            "tw": "采蔓菁采萝卜，",
            "en": "I gathered mustard and radish,"
          },
          {
            "zh": "无以下体。",
            "tw": "莫嫌弃其根体。",
            "en": "do not spurn their roots."
          },
          {
            "zh": "德音莫违，",
            "tw": "好话莫要违背，",
            "en": "Do not break your pledged word,"
          },
          {
            "zh": "及尔同死。",
            "tw": "曾约与你同死。",
            "en": "to die together with you."
          }
        ],
        [
          {
            "zh": "行道迟迟，",
            "tw": "走在路上迟迟，",
            "en": "I walked the road so slow,"
          },
          {
            "zh": "中心有违。",
            "tw": "心中犹豫不舍。",
            "en": "my heart loath to part."
          },
          {
            "zh": "不远伊迩，",
            "tw": "送我不远就近，",
            "en": "You saw me off not far,"
          },
          {
            "zh": "薄送我畿。",
            "tw": "只送到门槛边。",
            "en": "but to the threshold's start."
          },
          {
            "zh": "谁谓荼苦，",
            "tw": "谁说荼菜味苦，",
            "en": "Who says the bitter herb is bitter?"
          },
          {
            "zh": "其甘如荠。",
            "tw": "其实甜如荠菜。",
            "en": "It is sweet as shepherd's purse to me."
          },
          {
            "zh": "宴尔新婚，",
            "tw": "你欢宴迎新婚，",
            "en": "You feast with your new bride,"
          },
          {
            "zh": "如兄如弟。",
            "tw": "亲密如兄如弟。",
            "en": "close as brothers in delight."
          }
        ],
        [
          {
            "zh": "泾以渭浊，",
            "tw": "泾水因渭而浊，",
            "en": "The Jing is muddy by the Wei,"
          },
          {
            "zh": "湜湜其沚。",
            "tw": "静止则清见底。",
            "en": "clear when still at rest."
          },
          {
            "zh": "宴尔新婚，",
            "tw": "你欢宴迎新婚，",
            "en": "You feast with your new bride,"
          },
          {
            "zh": "不我屑以。",
            "tw": "不肯把我理睬。",
            "en": "and will not regard me."
          },
          {
            "zh": "毋逝我梁，",
            "tw": "莫到我的鱼梁，",
            "en": "Do not go to my weir,"
          },
          {
            "zh": "毋发我笱。",
            "tw": "莫动我的鱼篓。",
            "en": "do not disturb my trap."
          },
          {
            "zh": "我躬不阅，",
            "tw": "我身不被容纳，",
            "en": "My own self is not welcome,"
          },
          {
            "zh": "遑恤我后。",
            "tw": "哪顾我后事？",
            "en": "how care for what's after?"
          }
        ],
        [
          {
            "zh": "就其深矣，",
            "tw": "遇到水深处，",
            "en": "Where the water is deep,"
          },
          {
            "zh": "方之舟之。",
            "tw": "用筏用舟渡。",
            "en": "I ferried with boat and raft."
          },
          {
            "zh": "就其浅矣，",
            "tw": "遇到水浅处，",
            "en": "Where the water is shallow,"
          },
          {
            "zh": "泳之游之。",
            "tw": "游泳涉水过。",
            "en": "I swam and waded through."
          },
          {
            "zh": "何有何亡，",
            "tw": "家中有无什么，",
            "en": "What there was or was not,"
          },
          {
            "zh": "黾勉求之。",
            "tw": "我都勉力谋求。",
            "en": "I strove to provide."
          },
          {
            "zh": "凡民有丧，",
            "tw": "凡邻里有丧事，",
            "en": "When any mourned their dead,"
          },
          {
            "zh": "匍匐救之。",
            "tw": "我爬去救助他。",
            "en": "I crawled to give them aid."
          }
        ],
        [
          {
            "zh": "不我能慉，",
            "tw": "你不能养爱我，",
            "en": "You could not cherish me,"
          },
          {
            "zh": "反以我为雠。",
            "tw": "反把我当仇敌。",
            "en": "but turned me to a foe."
          },
          {
            "zh": "既阻我德，",
            "tw": "既拒绝我好意，",
            "en": "You spurned my goodness,"
          },
          {
            "zh": "贾用不售。",
            "tw": "如货卖不出去。",
            "en": "like goods that would not sell."
          },
          {
            "zh": "昔育恐育鞫，",
            "tw": "从前怕穷怕困，",
            "en": "Of old we feared want and need,"
          },
          {
            "zh": "及尔颠覆。",
            "tw": "与你共度艰难。",
            "en": "and with you faced downfall."
          },
          {
            "zh": "既生既育，",
            "tw": "如今既已生养，",
            "en": "Now that we have living,"
          },
          {
            "zh": "比予于毒。",
            "tw": "却把我比毒虫。",
            "en": "you liken me to poison."
          }
        ],
        [
          {
            "zh": "我有旨蓄，",
            "tw": "我有甘美储备，",
            "en": "I have stored sweet provisions,"
          },
          {
            "zh": "亦以御冬。",
            "tw": "用来抵御寒冬。",
            "en": "to keep out winter's cold."
          },
          {
            "zh": "宴尔新婚，",
            "tw": "你欢宴迎新婚，",
            "en": "You feast with your new bride,"
          },
          {
            "zh": "以我御穷。",
            "tw": "用我御你贫穷。",
            "en": "but used me in your want."
          },
          {
            "zh": "有洸有溃，",
            "tw": "又凶暴又粗暴，",
            "en": "You stormed and you raged,"
          },
          {
            "zh": "既诒我肄。",
            "tw": "留给我苦劳役。",
            "en": "and left me toil and care."
          },
          {
            "zh": "不念昔者，",
            "tw": "不念往日情分，",
            "en": "You forget the days gone by,"
          },
          {
            "zh": "伊余来塈。",
            "tw": "那时爱我如斯。",
            "en": "when you came to me with love."
          }
        ]
      ]
    },
    "fullNotes": [
      {
        "zh": "习习谷风，黾勉同心，采葑采菲，德音莫违。",
        "en": "The valley wind blows; strive together as one. Gather the greens — keep your vow.",
        "words": [
          {
            "w": "黾勉",
            "p": "mǐnmiǎn",
            "m": "勤勉；努力",
            "em": "to strive"
          },
          {
            "w": "葑菲",
            "p": "fēngfěi",
            "m": "蔓菁与葍（蔬菜）",
            "em": "vegetables"
          }
        ]
      },
      {
        "zh": "行道迟迟，中心有违；宴尔新婚，如兄如弟。",
        "en": "Slow on the road, my heart rebels; you feast your new bride, close as brothers.",
        "words": [
          {
            "w": "迟迟",
            "p": "chíchí",
            "m": "迟缓",
            "em": "slow"
          },
          {
            "w": "宴",
            "p": "yàn",
            "m": "安乐；宴乐",
            "em": "to feast"
          }
        ]
      },
      {
        "zh": "泾以渭浊，宴尔新婚，不我屑以；毋逝我梁。",
        "en": "The Jing clouds the Wei; you feast anew, scorning me. Do not tread my weir.",
        "words": [
          {
            "w": "泾渭",
            "p": "jīngwèi",
            "m": "两水名",
            "em": "Jing and Wei rivers"
          },
          {
            "w": "梁",
            "p": "liáng",
            "m": "鱼梁",
            "em": "weir"
          }
        ]
      },
      {
        "zh": "就其深浅，方舟泳游；凡民有丧，匍匐救之。",
        "en": "By deep or shallow, I ferried others; for any in grief, I crawled to help.",
        "words": [
          {
            "w": "匍匐",
            "p": "púfú",
            "m": "伏地爬行",
            "em": "to crawl"
          },
          {
            "w": "丧",
            "p": "sāng",
            "m": "祸难；丧事",
            "em": "mourning; trouble"
          }
        ]
      },
      {
        "zh": "不我能慉，反以我为雠；既生既育，比予于毒。",
        "en": "You cannot cherish me, but hate me; now that you thrive, you liken me to poison.",
        "words": [
          {
            "w": "慉",
            "p": "xù",
            "m": "喜爱；养护",
            "em": "to cherish"
          },
          {
            "w": "雠",
            "p": "chóu",
            "m": "仇敌",
            "em": "enemy"
          }
        ]
      },
      {
        "zh": "我有旨蓄御冬，宴尔新婚，以我御穷；不念昔者。",
        "en": "I stored fine food for winter; you feast anew, used me against want, forgetting the past.",
        "words": [
          {
            "w": "旨",
            "p": "zhǐ",
            "m": "美好",
            "em": "fine; delicious"
          },
          {
            "w": "蓄",
            "p": "xù",
            "m": "积蓄",
            "em": "to store"
          }
        ]
      }
    ],
    "fullTr": [
      [
        {
          "zh": "习习谷风，",
          "tw": "谷风习习吹来，",
          "en": "The valley wind blows soft,"
        },
        {
          "zh": "以阴以雨。",
          "tw": "带来阴云细雨。",
          "en": "with shade and with rain."
        },
        {
          "zh": "黾勉同心，",
          "tw": "曾勉力同其心，",
          "en": "We strove with one heart,"
        },
        {
          "zh": "不宜有怒。",
          "tw": "本不该有怒气。",
          "en": "you should not have been angry."
        },
        {
          "zh": "采葑采菲，",
          "tw": "采蔓菁采萝卜，",
          "en": "I gathered mustard and radish,"
        },
        {
          "zh": "无以下体。",
          "tw": "莫嫌弃其根体。",
          "en": "do not spurn their roots."
        },
        {
          "zh": "德音莫违，",
          "tw": "好话莫要违背，",
          "en": "Do not break your pledged word,"
        },
        {
          "zh": "及尔同死。",
          "tw": "曾约与你同死。",
          "en": "to die together with you."
        }
      ],
      [
        {
          "zh": "行道迟迟，",
          "tw": "走在路上迟迟，",
          "en": "I walked the road so slow,"
        },
        {
          "zh": "中心有违。",
          "tw": "心中犹豫不舍。",
          "en": "my heart loath to part."
        },
        {
          "zh": "不远伊迩，",
          "tw": "送我不远就近，",
          "en": "You saw me off not far,"
        },
        {
          "zh": "薄送我畿。",
          "tw": "只送到门槛边。",
          "en": "but to the threshold's start."
        },
        {
          "zh": "谁谓荼苦，",
          "tw": "谁说荼菜味苦，",
          "en": "Who says the bitter herb is bitter?"
        },
        {
          "zh": "其甘如荠。",
          "tw": "其实甜如荠菜。",
          "en": "It is sweet as shepherd's purse to me."
        },
        {
          "zh": "宴尔新婚，",
          "tw": "你欢宴迎新婚，",
          "en": "You feast with your new bride,"
        },
        {
          "zh": "如兄如弟。",
          "tw": "亲密如兄如弟。",
          "en": "close as brothers in delight."
        }
      ],
      [
        {
          "zh": "泾以渭浊，",
          "tw": "泾水因渭而浊，",
          "en": "The Jing is muddy by the Wei,"
        },
        {
          "zh": "湜湜其沚。",
          "tw": "静止则清见底。",
          "en": "clear when still at rest."
        },
        {
          "zh": "宴尔新婚，",
          "tw": "你欢宴迎新婚，",
          "en": "You feast with your new bride,"
        },
        {
          "zh": "不我屑以。",
          "tw": "不肯把我理睬。",
          "en": "and will not regard me."
        },
        {
          "zh": "毋逝我梁，",
          "tw": "莫到我的鱼梁，",
          "en": "Do not go to my weir,"
        },
        {
          "zh": "毋发我笱。",
          "tw": "莫动我的鱼篓。",
          "en": "do not disturb my trap."
        },
        {
          "zh": "我躬不阅，",
          "tw": "我身不被容纳，",
          "en": "My own self is not welcome,"
        },
        {
          "zh": "遑恤我后。",
          "tw": "哪顾我后事？",
          "en": "how care for what's after?"
        }
      ],
      [
        {
          "zh": "就其深矣，",
          "tw": "遇到水深处，",
          "en": "Where the water is deep,"
        },
        {
          "zh": "方之舟之。",
          "tw": "用筏用舟渡。",
          "en": "I ferried with boat and raft."
        },
        {
          "zh": "就其浅矣，",
          "tw": "遇到水浅处，",
          "en": "Where the water is shallow,"
        },
        {
          "zh": "泳之游之。",
          "tw": "游泳涉水过。",
          "en": "I swam and waded through."
        },
        {
          "zh": "何有何亡，",
          "tw": "家中有无什么，",
          "en": "What there was or was not,"
        },
        {
          "zh": "黾勉求之。",
          "tw": "我都勉力谋求。",
          "en": "I strove to provide."
        },
        {
          "zh": "凡民有丧，",
          "tw": "凡邻里有丧事，",
          "en": "When any mourned their dead,"
        },
        {
          "zh": "匍匐救之。",
          "tw": "我爬去救助他。",
          "en": "I crawled to give them aid."
        }
      ],
      [
        {
          "zh": "不我能慉，",
          "tw": "你不能养爱我，",
          "en": "You could not cherish me,"
        },
        {
          "zh": "反以我为雠。",
          "tw": "反把我当仇敌。",
          "en": "but turned me to a foe."
        },
        {
          "zh": "既阻我德，",
          "tw": "既拒绝我好意，",
          "en": "You spurned my goodness,"
        },
        {
          "zh": "贾用不售。",
          "tw": "如货卖不出去。",
          "en": "like goods that would not sell."
        },
        {
          "zh": "昔育恐育鞫，",
          "tw": "从前怕穷怕困，",
          "en": "Of old we feared want and need,"
        },
        {
          "zh": "及尔颠覆。",
          "tw": "与你共度艰难。",
          "en": "and with you faced downfall."
        },
        {
          "zh": "既生既育，",
          "tw": "如今既已生养，",
          "en": "Now that we have living,"
        },
        {
          "zh": "比予于毒。",
          "tw": "却把我比毒虫。",
          "en": "you liken me to poison."
        }
      ],
      [
        {
          "zh": "我有旨蓄，",
          "tw": "我有甘美储备，",
          "en": "I have stored sweet provisions,"
        },
        {
          "zh": "亦以御冬。",
          "tw": "用来抵御寒冬。",
          "en": "to keep out winter's cold."
        },
        {
          "zh": "宴尔新婚，",
          "tw": "你欢宴迎新婚，",
          "en": "You feast with your new bride,"
        },
        {
          "zh": "以我御穷。",
          "tw": "用我御你贫穷。",
          "en": "but used me in your want."
        },
        {
          "zh": "有洸有溃，",
          "tw": "又凶暴又粗暴，",
          "en": "You stormed and you raged,"
        },
        {
          "zh": "既诒我肄。",
          "tw": "留给我苦劳役。",
          "en": "and left me toil and care."
        },
        {
          "zh": "不念昔者，",
          "tw": "不念往日情分，",
          "en": "You forget the days gone by,"
        },
        {
          "zh": "伊余来塈。",
          "tw": "那时爱我如斯。",
          "en": "when you came to me with love."
        }
      ]
    ]
  },
  {
    "id": 11,
    "title": "式微",
    "pinyin": "shì wēi",
    "theme": "乡愁之深",
    "lines": [
      "胡不归？",
      "微君之故，胡为乎中露！"
    ],
    "trans": "为什么还不回家？如果不是为君主，何以还在露水中！",
    "notes": [
      {
        "w": "式微",
        "p": "shì wēi",
        "m": "天将暮、衰微，后成“归隐不得”典故。"
      },
      {
        "w": "微",
        "p": "wēi",
        "m": "若非、如果没有。"
      },
      {
        "w": "中露",
        "p": "zhōng lù",
        "m": "露水之中，指劳苦在外。"
      }
    ],
    "appreciation": "“胡不归”一声诘问，道尽劳役之苦与思归之情。后世“式微”成为文人感叹归隐不得、劳苦不休的经典意象。文旅创新性转化：“胡不归？邶风故里，待君来。”",
    "scene": "文旅创新性转化标语、返乡主题宣传（推荐采用）。",
    "recommend": 4,
    "full": [
      "式微式微，胡不归。微君之故，胡为乎中露。",
      "式微式微，胡不归。微君之躬，胡为乎泥中。"
    ],
    "en": {
      "title": "Decline",
      "lines": [
        "Why not return?",
        "But for my lord's sake, why should I be in the dew?"
      ],
      "full": [
        "Decline, decline — why not return? But for my lord's cause, why am I in the dew?",
        "Decline, decline — why not return? But for my lord's person, why am I in the mud?"
      ],
      "trans": "Why not return home? If not for the ruler's sake, why should I still be out in the dew!",
      "appreciation": "The cry 'why not return?' voices the suffering of corvée labor and the longing to go home. Later 'shì wēi' became a classic image for scholars lamenting their unable return to retirement. A creative line: 'Why not return? Beifeng's homeland awaits.'",
      "notes": [
        {
          "w": "式微",
          "p": "shì wēi",
          "m": "Dusk; decline; later a phrase for 'unable to retire'."
        },
        {
          "w": "微",
          "p": "wēi",
          "m": "If not; were it not for."
        },
        {
          "w": "中露",
          "p": "zhōng lù",
          "m": "In the dew; toiling abroad."
        }
      ],
      "scene": "Publicity for city strivers, laborers' culture walls, and nostalgia-themed vignettes.",
      "fullTr": [
        [
          {
            "zh": "式微式微，",
            "tw": "天色已晚天已晚，",
            "en": "O dim, dim the light,"
          },
          {
            "zh": "胡不归。",
            "tw": "为何还不回还？",
            "en": "why do you not return?"
          },
          {
            "zh": "微君之故，",
            "tw": "若非为了君主，",
            "en": "But for our lord's sake,"
          },
          {
            "zh": "胡为乎中露。",
            "tw": "何故露中辛劳？",
            "en": "why stand we in the dew?"
          }
        ],
        [
          {
            "zh": "式微式微，",
            "tw": "天色已晚天已晚，",
            "en": "O dim, dim the light,"
          },
          {
            "zh": "胡不归。",
            "tw": "为何还不回还？",
            "en": "why do you not return?"
          },
          {
            "zh": "微君之躬，",
            "tw": "若非为了君身，",
            "en": "But for our lord's person,"
          },
          {
            "zh": "胡为乎泥中。",
            "tw": "何故泥中劳苦？",
            "en": "why stand we in the mire?"
          }
        ]
      ]
    },
    "fullNotes": [
      {
        "zh": "式微式微，胡不归？微君之故，胡为乎中露。",
        "en": "Dim, dim the light — why not return? But for our lord's sake, why stand in the dew?",
        "words": [
          {
            "w": "式微",
            "p": "shìwēi",
            "m": "天将暮；衰微",
            "em": "to decline; dim"
          },
          {
            "w": "微",
            "p": "wēi",
            "m": "非；若非",
            "em": "but for"
          }
        ]
      },
      {
        "zh": "式微式微，胡不归？微君之躬，胡为乎泥中。",
        "en": "Dim, dim the light — why not return? But for our lord's person, why stand in the mud?",
        "words": [
          {
            "w": "躬",
            "p": "gōng",
            "m": "身体；自身",
            "em": "person; body"
          },
          {
            "w": "泥",
            "p": "ní",
            "m": "泥泞",
            "em": "mud"
          }
        ]
      }
    ],
    "fullTr": [
      [
        {
          "zh": "式微式微，",
          "tw": "天色已晚天已晚，",
          "en": "O dim, dim the light,"
        },
        {
          "zh": "胡不归。",
          "tw": "为何还不回还？",
          "en": "why do you not return?"
        },
        {
          "zh": "微君之故，",
          "tw": "若非为了君主，",
          "en": "But for our lord's sake,"
        },
        {
          "zh": "胡为乎中露。",
          "tw": "何故露中辛劳？",
          "en": "why stand we in the dew?"
        }
      ],
      [
        {
          "zh": "式微式微，",
          "tw": "天色已晚天已晚，",
          "en": "O dim, dim the light,"
        },
        {
          "zh": "胡不归。",
          "tw": "为何还不回还？",
          "en": "why do you not return?"
        },
        {
          "zh": "微君之躬，",
          "tw": "若非为了君身，",
          "en": "But for our lord's person,"
        },
        {
          "zh": "胡为乎泥中。",
          "tw": "何故泥中劳苦？",
          "en": "why stand we in the mire?"
        }
      ]
    ]
  },
  {
    "id": 12,
    "title": "旄丘",
    "pinyin": "máo qiū",
    "theme": "讽喻怨刺",
    "lines": [
      "旄丘之葛兮，何诞之节兮！",
      "何其处也？必有与也！",
      "何其久也？必有以也！"
    ],
    "trans": "旄丘上有葛藤攀援，为什么它枝节蔓延？为什么滞停安然？一定是等待同伴。为什么居留长久？一定有原因难宣。",
    "notes": [
      {
        "w": "旄",
        "p": "máo",
        "m": "旄丘，前高后低的土山。"
      },
      {
        "w": "诞",
        "p": "dàn",
        "m": "延、长。"
      },
      {
        "w": "与",
        "p": "yǔ",
        "m": "同伴、援助者。"
      }
    ],
    "appreciation": "以葛藤蔓延起兴，质问高高在上的贵族为何见难不救。层层追问，委婉而尖锐，是《邶风》中讥讽权贵的佳作。",
    "scene": "文化展示馆、社会民情主题展示。",
    "recommend": 2,
    "full": [
      "旄丘之葛兮，何诞之节兮。叔兮伯兮，何多日也？",
      "何其处也？必有与也！何其久也？必有以也！",
      "狐裘蒙戎，匪车不东。叔兮伯兮，靡所与同。",
      "琐兮尾兮，流离之子。叔兮伯兮，褎如充耳。"
    ],
    "en": {
      "title": "The Mao Hill",
      "lines": [
        "On Mao Hill the vine — how long its joints!",
        "Why do they linger? They must have company.",
        "Why so long? There must be a cause."
      ],
      "full": [
        "On Mao Hill the vine — how long its joints! O uncles and elders, why so many days?",
        "Why do they stay? They must have company! Why so long? There must be a cause!",
        "Fox-fur ragged, their chariots come not east. O uncles and elders, none share our cause.",
        "Small and tail-like, the wandering child. O uncles and elders, stuffed ears, they hear not."
      ],
      "trans": "On Mao Hill the creepers climb — why do their joints spread so? Why do they rest at ease? They must await companions. Why so long a stay? There must be a hidden cause.",
      "appreciation": "Opening with the spreading vine, it questions why the lofty nobles will not aid the distressed. Layer on layer of inquiry, gentle yet sharp — a fine satire of the powerful in Beifeng.",
      "notes": [
        {
          "w": "旄",
          "p": "máo",
          "m": "Mao Hill, a low hill high in front, low behind."
        },
        {
          "w": "诞",
          "p": "dàn",
          "m": "To extend; long."
        },
        {
          "w": "与",
          "p": "yǔ",
          "m": "Companion; helper."
        }
      ],
      "scene": "Exile-culture displays, historical-story walls, and study-tour explanation points.",
      "fullTr": [
        [
          {
            "zh": "旄丘之葛兮，",
            "tw": "旄丘上的葛藤啊，",
            "en": "O bindweed on the hill,"
          },
          {
            "zh": "何诞之节兮。",
            "tw": "为何藤节那样长？",
            "en": "how long your joints have grown!"
          },
          {
            "zh": "叔兮伯兮，",
            "tw": "叔叔啊伯伯啊，",
            "en": "O uncles, O elders,"
          },
          {
            "zh": "何多日也？",
            "tw": "为何这么多天？",
            "en": "why so many days delay?"
          }
        ],
        [
          {
            "zh": "何其处也？必有与也！何其久也？必有以也！",
            "tw": "为何安居不出？必有所助！为何耽搁许久？必有所由！",
            "en": "Why do you linger? You must have allies! Why so long delayed? You must have cause!"
          }
        ],
        [
          {
            "zh": "狐裘蒙戎，",
            "tw": "狐裘毛乱蓬蓬，",
            "en": "In ragged fox-fur coat,"
          },
          {
            "zh": "匪车不东。",
            "tw": "不是车不东行。",
            "en": "not that the carts won't go east."
          },
          {
            "zh": "叔兮伯兮，",
            "tw": "叔叔啊伯伯啊，",
            "en": "O uncles, O elders,"
          },
          {
            "zh": "靡所与同。",
            "tw": "与我志不同道。",
            "en": "you share not my cause."
          }
        ],
        [
          {
            "zh": "琐兮尾兮，",
            "tw": "渺小啊卑微啊，",
            "en": "Small and lowly,"
          },
          {
            "zh": "流离之子。",
            "tw": "流离失所之人。",
            "en": "the wandering refugee."
          },
          {
            "zh": "叔兮伯兮，",
            "tw": "叔叔啊伯伯啊，",
            "en": "O uncles, O elders,"
          },
          {
            "zh": "褎如充耳。",
            "tw": "充耳不闻如聋。",
            "en": "you stand deaf to my call."
          }
        ]
      ]
    },
    "fullNotes": [
      {
        "zh": "旄丘之葛何其诞节，叔兮伯兮，何多日也？",
        "en": "On the Mau hill the arrowroot vines grow long; my lords, why so many days?",
        "words": [
          {
            "w": "旄丘",
            "p": "máoqiū",
            "m": "山丘名",
            "em": "Mao hill"
          },
          {
            "w": "诞",
            "p": "dàn",
            "m": "长",
            "em": "long"
          }
        ]
      },
      {
        "zh": "何其处也？必有与也！何其久也？必有以也！",
        "en": "Why do you linger? You must have company. Why so long? You must have reason.",
        "words": [
          {
            "w": "处",
            "p": "chǔ",
            "m": "停留",
            "em": "to stay"
          },
          {
            "w": "以",
            "p": "yǐ",
            "m": "因由",
            "em": "reason"
          }
        ]
      },
      {
        "zh": "狐裘蒙戎，匪车不东；叔兮伯兮，靡所与同。",
        "en": "In foxy fur, ragged; it is not that the cart won't go east — my lords, we share no cause.",
        "words": [
          {
            "w": "蒙戎",
            "p": "méngróng",
            "m": "蓬乱",
            "em": "ragged"
          },
          {
            "w": "同",
            "p": "tóng",
            "m": "同心；同道",
            "em": "to share"
          }
        ]
      },
      {
        "zh": "琐兮尾兮，流离之子；叔兮伯兮，褎如充耳。",
        "en": "Petty and base, the wandering exile; my lords, deaf as if stuffed with silk.",
        "words": [
          {
            "w": "流离",
            "p": "liúlí",
            "m": "流转离散",
            "em": "to wander"
          },
          {
            "w": "褎",
            "p": "xiù",
            "m": "盛服；塞耳不顾",
            "em": "stuffed; deaf"
          }
        ]
      }
    ],
    "fullTr": [
      [
        {
          "zh": "旄丘之葛兮，",
          "tw": "旄丘上的葛藤啊，",
          "en": "O bindweed on the hill,"
        },
        {
          "zh": "何诞之节兮。",
          "tw": "为何藤节那样长？",
          "en": "how long your joints have grown!"
        },
        {
          "zh": "叔兮伯兮，",
          "tw": "叔叔啊伯伯啊，",
          "en": "O uncles, O elders,"
        },
        {
          "zh": "何多日也？",
          "tw": "为何这么多天？",
          "en": "why so many days delay?"
        }
      ],
      [
        {
          "zh": "何其处也？必有与也！何其久也？必有以也！",
          "tw": "为何安居不出？必有所助！为何耽搁许久？必有所由！",
          "en": "Why do you linger? You must have allies! Why so long delayed? You must have cause!"
        }
      ],
      [
        {
          "zh": "狐裘蒙戎，",
          "tw": "狐裘毛乱蓬蓬，",
          "en": "In ragged fox-fur coat,"
        },
        {
          "zh": "匪车不东。",
          "tw": "不是车不东行。",
          "en": "not that the carts won't go east."
        },
        {
          "zh": "叔兮伯兮，",
          "tw": "叔叔啊伯伯啊，",
          "en": "O uncles, O elders,"
        },
        {
          "zh": "靡所与同。",
          "tw": "与我志不同道。",
          "en": "you share not my cause."
        }
      ],
      [
        {
          "zh": "琐兮尾兮，",
          "tw": "渺小啊卑微啊，",
          "en": "Small and lowly,"
        },
        {
          "zh": "流离之子。",
          "tw": "流离失所之人。",
          "en": "the wandering refugee."
        },
        {
          "zh": "叔兮伯兮，",
          "tw": "叔叔啊伯伯啊，",
          "en": "O uncles, O elders,"
        },
        {
          "zh": "褎如充耳。",
          "tw": "充耳不闻如聋。",
          "en": "you stand deaf to my call."
        }
      ]
    ]
  },
  {
    "id": 13,
    "title": "简兮",
    "pinyin": "jiǎn xī",
    "theme": "自然之韵",
    "lines": [
      "简兮简兮，方将万舞。日之方中，在前上处。",
      "硕人俣俣，公庭万舞。有力如虎，执辔如组。"
    ],
    "trans": "鼓声擂得震天响，盛大万舞要开场，正是红日当空照，舞蹈领队站前方。舞师健壮又英武，公庭上面演万舞。动作有力如猛虎，手握缰绳似丝足。",
    "notes": [
      {
        "w": "简",
        "p": "jiǎn",
        "m": "鼓声，一说勇武貌。"
      },
      {
        "w": "万舞",
        "p": "wàn wǔ",
        "m": "周代大型乐舞。"
      },
      {
        "w": "俣俣",
        "p": "yǔ yǔ",
        "m": "魁梧英武的样子。"
      },
      {
        "w": "辔",
        "p": "pèi",
        "m": "马缰绳。"
      }
    ],
    "appreciation": "再现周代“万舞”盛况，舞师有力如虎、执辔如组。气势雄健，是《诗经》中难得的壮美乐舞画卷。",
    "scene": "节庆活动、古风诗歌体验、传统乐舞展示。",
    "recommend": 3,
    "full": [
      "简兮简兮，方将万舞。日之方中，在前上处。",
      "硕人俣俣，公庭万舞。有力如虎，执辔如组。",
      "左手执籥，右手秉翟。赫如渥赭，公言锡爵。",
      "山有榛，隰有苓。云谁之思？西方美人。彼美人兮，西方之人兮。"
    ],
    "en": {
      "title": "The Dance",
      "lines": [
        "Drum, drum — the great dance is to begin.",
        "Stalwart the man, in the court he dances; strong as a tiger, reins like silk."
      ],
      "full": [
        "Drum, drum — the great dance is about to begin. The sun at noon; he stands foremost above.",
        "Stalwart the man, in the court he dances the myriad dance; strong as a tiger, his reins like twisted silk.",
        "In his left hand the flute, in his right the pheasant feather. Red as ochre his face; the lord grants him a cup.",
        "On the hill the hazel, in the lowlands the ling. Whom do I think of? The beauty of the west. That beauty — a man of the west."
      ],
      "trans": "The drums roll mightily, the grand dance begins; the sun at its height, the lead dancer stands ahead. Stalwart and heroic, he performs in the court; strong as a tiger, his reins like silk.",
      "appreciation": "It recreates the splendor of the Zhou 'myriad dance' — the dancer strong as a tiger, reins like silk. Majestic and vigorous, a rare magnificent painting of music and dance in the Shijing.",
      "notes": [
        {
          "w": "简",
          "p": "jiǎn",
          "m": "Drum sound; or valiant bearing."
        },
        {
          "w": "万舞",
          "p": "wàn wǔ",
          "m": "A grand Zhou dynasty dance."
        },
        {
          "w": "俣俣",
          "p": "yǔ yǔ",
          "m": "Stalwart and martial."
        },
        {
          "w": "辔",
          "p": "pèi",
          "m": "Horse reins."
        }
      ],
      "scene": "Square cultural performances, intangible-heritage dance displays, and cultural-tour shows.",
      "fullTr": [
        [
          {
            "zh": "简兮简兮，",
            "tw": "威武啊威武啊，",
            "en": "O grand, O grand,"
          },
          {
            "zh": "方将万舞。",
            "tw": "正要跳万舞。",
            "en": "now they begin the war-dance."
          },
          {
            "zh": "日之方中，",
            "tw": "日头正当中，",
            "en": "The sun is at its height,"
          },
          {
            "zh": "在前上处。",
            "tw": "舞者在前列高处。",
            "en": "the dancers stand up front."
          }
        ],
        [
          {
            "zh": "硕人俣俣，",
            "tw": "美人魁梧健壮，",
            "en": "The tall man, stately and strong,"
          },
          {
            "zh": "公庭万舞。",
            "tw": "在公庭跳万舞。",
            "en": "dances the war-dance in the hall."
          },
          {
            "zh": "有力如虎，",
            "tw": "有力气如猛虎，",
            "en": "His strength is like a tiger's,"
          },
          {
            "zh": "执辔如组。",
            "tw": "执缰如执丝组。",
            "en": "he holds the reins like plaited silk."
          }
        ],
        [
          {
            "zh": "左手执籥，",
            "tw": "左手执籥管，",
            "en": "In his left hand the flute,"
          },
          {
            "zh": "右手秉翟。",
            "tw": "右手持雉羽。",
            "en": "in his right the pheasant plume."
          },
          {
            "zh": "赫如渥赭，",
            "tw": "脸红如染朱砂，",
            "en": "Red as if dyed with ochre,"
          },
          {
            "zh": "公言锡爵。",
            "tw": "公爷赐他酒爵。",
            "en": "the lord awards him a cup."
          }
        ],
        [
          {
            "zh": "山有榛，",
            "tw": "山上长着榛树，",
            "en": "On the hill grows the hazel,"
          },
          {
            "zh": "隰有苓。",
            "tw": "洼地长着苓草。",
            "en": "in the lowland grows the lichen."
          },
          {
            "zh": "云谁之思？西方美人。",
            "tw": "我所思是谁？西方的美人。",
            "en": "Whom do I think of? The beauty of the west."
          },
          {
            "zh": "彼美人兮，",
            "tw": "那美人啊，",
            "en": "That beauty of mine,"
          },
          {
            "zh": "西方之人兮。",
            "tw": "是西方的人啊。",
            "en": "he is a man of the west."
          }
        ]
      ]
    },
    "fullNotes": [
      {
        "zh": "简兮简兮，方将万舞；日之方中，在前上处。",
        "en": "Grand, grand the dance; at noon's height, he leads at the fore.",
        "words": [
          {
            "w": "简",
            "p": "jiǎn",
            "m": "盛大",
            "em": "grand"
          },
          {
            "w": "万舞",
            "p": "wànwǔ",
            "m": "周代一种舞",
            "em": "a kind of dance"
          }
        ]
      },
      {
        "zh": "硕人俣俣，公庭万舞；有力如虎，执辔如组。",
        "en": "The tall man strides; in the court he dances, strong as a tiger, reins like silk.",
        "words": [
          {
            "w": "俣俣",
            "p": "yǔyǔ",
            "m": "魁梧",
            "em": "tall; strong"
          },
          {
            "w": "辔",
            "p": "pèi",
            "m": "马缰",
            "em": "reins"
          }
        ]
      },
      {
        "zh": "左手执籥，右手秉翟；赫如渥赭，公言锡爵。",
        "en": "Left hand the flute, right the feather; flushed red, the lord grants him wine.",
        "words": [
          {
            "w": "籥",
            "p": "yuè",
            "m": "古管乐器",
            "em": "flute"
          },
          {
            "w": "翟",
            "p": "dí",
            "m": "野鸡羽",
            "em": "feather"
          }
        ]
      },
      {
        "zh": "山有榛，隰有苓；云谁之思？西方美人。",
        "en": "Hills hold hazels, lowlands hold licorice; whom do I love? The beauty of the west.",
        "words": [
          {
            "w": "榛",
            "p": "zhēn",
            "m": "榛树",
            "em": "hazel"
          },
          {
            "w": "苓",
            "p": "líng",
            "m": "甘草",
            "em": "licorice"
          }
        ]
      }
    ],
    "fullTr": [
      [
        {
          "zh": "简兮简兮，",
          "tw": "威武啊威武啊，",
          "en": "O grand, O grand,"
        },
        {
          "zh": "方将万舞。",
          "tw": "正要跳万舞。",
          "en": "now they begin the war-dance."
        },
        {
          "zh": "日之方中，",
          "tw": "日头正当中，",
          "en": "The sun is at its height,"
        },
        {
          "zh": "在前上处。",
          "tw": "舞者在前列高处。",
          "en": "the dancers stand up front."
        }
      ],
      [
        {
          "zh": "硕人俣俣，",
          "tw": "美人魁梧健壮，",
          "en": "The tall man, stately and strong,"
        },
        {
          "zh": "公庭万舞。",
          "tw": "在公庭跳万舞。",
          "en": "dances the war-dance in the hall."
        },
        {
          "zh": "有力如虎，",
          "tw": "有力气如猛虎，",
          "en": "His strength is like a tiger's,"
        },
        {
          "zh": "执辔如组。",
          "tw": "执缰如执丝组。",
          "en": "he holds the reins like plaited silk."
        }
      ],
      [
        {
          "zh": "左手执籥，",
          "tw": "左手执籥管，",
          "en": "In his left hand the flute,"
        },
        {
          "zh": "右手秉翟。",
          "tw": "右手持雉羽。",
          "en": "in his right the pheasant plume."
        },
        {
          "zh": "赫如渥赭，",
          "tw": "脸红如染朱砂，",
          "en": "Red as if dyed with ochre,"
        },
        {
          "zh": "公言锡爵。",
          "tw": "公爷赐他酒爵。",
          "en": "the lord awards him a cup."
        }
      ],
      [
        {
          "zh": "山有榛，",
          "tw": "山上长着榛树，",
          "en": "On the hill grows the hazel,"
        },
        {
          "zh": "隰有苓。",
          "tw": "洼地长着苓草。",
          "en": "in the lowland grows the lichen."
        },
        {
          "zh": "云谁之思？西方美人。",
          "tw": "我所思是谁？西方的美人。",
          "en": "Whom do I think of? The beauty of the west."
        },
        {
          "zh": "彼美人兮，",
          "tw": "那美人啊，",
          "en": "That beauty of mine,"
        },
        {
          "zh": "西方之人兮。",
          "tw": "是西方的人啊。",
          "en": "he is a man of the west."
        }
      ]
    ]
  },
  {
    "id": 14,
    "title": "泉水",
    "pinyin": "quán shuǐ",
    "theme": "乡愁之深",
    "lines": [
      "有怀于卫，靡日不思。",
      "我思肥泉，兹之永叹。"
    ],
    "trans": "怀念卫国我故乡，没有一天不在想。我是思绪在肥泉，声声叹息用不休。",
    "notes": [
      {
        "w": "有怀",
        "p": "yǒu huái",
        "m": "有所怀念。"
      },
      {
        "w": "靡",
        "p": "mǐ",
        "m": "无、没有。"
      },
      {
        "w": "兹",
        "p": "zī",
        "m": "此、这。"
      }
    ],
    "appreciation": "卫女思归，念肥泉而长叹。以泉水起兴，写尽对故国故园的魂牵梦萦，是《邶风》乡愁主题的代表。",
    "scene": "邶风故里入口、游客中心、文化展示馆、返乡主题宣传。",
    "recommend": 3,
    "full": [
      "毖彼泉水，亦流于淇。有怀于卫，靡日不思。娈彼诸姬，聊与之谋。",
      "出宿于泲，饮饯于祢。女子有行，远父母兄弟，问我诸姑，遂及伯姊。",
      "出宿于干，饮饯于言。载脂载辖，还车言迈。遄臻于卫，不瑕有害？",
      "我思肥泉，兹之永叹。思须与漕，我心悠悠。驾言出游，以写我忧。"
    ],
    "en": {
      "title": "The Spring",
      "lines": [
        "I long for Wei; not a day passes without thought.",
        "I think of the Fat Spring, and sigh long."
      ],
      "full": [
        "Gushing the spring, it flows to the Qi. I long for Wei; not a day without thought. Those fair Ji ladies — I take counsel with them.",
        "I lodged at Ji, feasted at Ni. A girl must marry, far from parents and brothers; I ask my aunts, then my elder sister.",
        "I lodged at Gan, feasted at Yan. Greased the axle, the carriage turns home. Soon to reach Wei — could that be wrong?",
        "I think of the Fat Spring, and sigh without end. I think of Xu and Cao; my heart is far. I drive to wander, to write off my sorrow."
      ],
      "trans": "I cherish my home of Wei; there is not a day I do not think of it. My thoughts are at the Fat Spring, sighing on and on.",
      "appreciation": "A Wei woman longing to return, sighing at the thought of the Fat Spring. Rising from the spring, it exhausts her yearning for her native land — a representative of Beifeng's homesickness.",
      "notes": [
        {
          "w": "有怀",
          "p": "yǒu huái",
          "m": "To bear a longing."
        },
        {
          "w": "靡",
          "p": "mǐ",
          "m": "Not; none."
        },
        {
          "w": "兹",
          "p": "zī",
          "m": "This; here."
        }
      ],
      "scene": "Homesickness-themed publicity, wanderer-culture walls, and nostalgia-mailbox photo spots.",
      "fullTr": [
        [
          {
            "zh": "毖彼泉水，",
            "tw": "那泉水汩汩流，",
            "en": "The bubbling spring waters"
          },
          {
            "zh": "亦流于淇。",
            "tw": "也流入淇水。",
            "en": "flow on into the Qi."
          },
          {
            "zh": "有怀于卫，",
            "tw": "心中怀念卫国，",
            "en": "I long for the land of Wei,"
          },
          {
            "zh": "靡日不思。",
            "tw": "没有一天不想。",
            "en": "not a day without thought."
          },
          {
            "zh": "娈彼诸姬，",
            "tw": "那些美好的姊妹，",
            "en": "O lovely sisters of the Ji,"
          },
          {
            "zh": "聊与之谋。",
            "tw": "且与她们商议。",
            "en": "with them I take my counsel."
          }
        ],
        [
          {
            "zh": "出宿于泲，",
            "tw": "出嫁宿在泲地，",
            "en": "I lodged at Ji at departure,"
          },
          {
            "zh": "饮饯于祢。",
            "tw": "在祢地饮饯行。",
            "en": "and drank farewell at Ni."
          },
          {
            "zh": "女子有行，",
            "tw": "女子既已出嫁，",
            "en": "A girl once she is wed,"
          },
          {
            "zh": "远父母兄弟，",
            "tw": "远离父母兄弟。",
            "en": "leaves her parents and brothers far."
          },
          {
            "zh": "问我诸姑，",
            "tw": "问候我的诸姑，",
            "en": "I asked my aunts and kin,"
          },
          {
            "zh": "遂及伯姊。",
            "tw": "又及长姊一人。",
            "en": "and then my elder sister too."
          }
        ],
        [
          {
            "zh": "出宿于干，",
            "tw": "出宿在干地，",
            "en": "I lodged at Gan,"
          },
          {
            "zh": "饮饯于言。",
            "tw": "饯行在言地。",
            "en": "drank farewell at Yan."
          },
          {
            "zh": "载脂载辖，",
            "tw": "涂油安上车轴，",
            "en": "I greased the axle and pin,"
          },
          {
            "zh": "还车言迈。",
            "tw": "转身驱车前行。",
            "en": "turned the car and set forth."
          },
          {
            "zh": "遄臻于卫，",
            "tw": "疾速抵达卫国，",
            "en": "Swiftly I'd reach Wei,"
          },
          {
            "zh": "不瑕有害？",
            "tw": "岂会有什么害？",
            "en": "would that be any harm?"
          }
        ],
        [
          {
            "zh": "我思肥泉，",
            "tw": "我思念肥泉，",
            "en": "I think of the Fei spring,"
          },
          {
            "zh": "兹之永叹。",
            "tw": "为此长叹不息。",
            "en": "and sigh for it ever."
          },
          {
            "zh": "思须与漕，",
            "tw": "思念须地与漕，",
            "en": "I think of Xu and Cao,"
          },
          {
            "zh": "我心悠悠。",
            "tw": "我心悠悠难收。",
            "en": "my heart drifts far away."
          },
          {
            "zh": "驾言出游，",
            "tw": "驾起车去出游，",
            "en": "I drive forth to wander,"
          },
          {
            "zh": "以写我忧。",
            "tw": "以此抒写我忧。",
            "en": "to write out my sorrow."
          }
        ]
      ]
    },
    "fullNotes": [
      {
        "zh": "毖彼泉水亦流于淇，有怀于卫靡日不思，聊与诸姬谋。",
        "en": "The spring flows to the Qi; I mourn for Wei, not a day without thought — I plan with the Ji ladies.",
        "words": [
          {
            "w": "毖",
            "p": "bì",
            "m": "泉流貌",
            "em": "to flow"
          },
          {
            "w": "淇",
            "p": "qí",
            "m": "淇水",
            "em": "Qi river"
          }
        ]
      },
      {
        "zh": "出宿于泲，饮饯于祢；女子有行，远父母兄弟。",
        "en": "I lodged at Ji, feasted at Ni; a girl must marry, far from kin.",
        "words": [
          {
            "w": "泲",
            "p": "jǐ",
            "m": "地名",
            "em": "Ji (place)"
          },
          {
            "w": "祢",
            "p": "nǐ",
            "m": "地名",
            "em": "Ni (place)"
          }
        ]
      },
      {
        "zh": "出宿于干，饮饯于言；载脂载辖，遄臻于卫。",
        "en": "I lodged at Gan, feasted at Yan; greased the axle, would hasten home.",
        "words": [
          {
            "w": "脂",
            "p": "zhī",
            "m": "车轴油",
            "em": "axle grease"
          },
          {
            "w": "遄",
            "p": "chuán",
            "m": "速；疾",
            "em": "swift"
          }
        ]
      },
      {
        "zh": "我思肥泉兹之永叹，思须与漕，驾言出游以写忧。",
        "en": "I sigh for the Fei spring, for Xu and Cao; I drive out to ease my grief.",
        "words": [
          {
            "w": "写",
            "p": "xiè",
            "m": "宣泄；排解",
            "em": "to ease; to release"
          },
          {
            "w": "忧",
            "p": "yōu",
            "m": "忧愁",
            "em": "grief"
          }
        ]
      }
    ],
    "fullTr": [
      [
        {
          "zh": "毖彼泉水，",
          "tw": "那泉水汩汩流，",
          "en": "The bubbling spring waters"
        },
        {
          "zh": "亦流于淇。",
          "tw": "也流入淇水。",
          "en": "flow on into the Qi."
        },
        {
          "zh": "有怀于卫，",
          "tw": "心中怀念卫国，",
          "en": "I long for the land of Wei,"
        },
        {
          "zh": "靡日不思。",
          "tw": "没有一天不想。",
          "en": "not a day without thought."
        },
        {
          "zh": "娈彼诸姬，",
          "tw": "那些美好的姊妹，",
          "en": "O lovely sisters of the Ji,"
        },
        {
          "zh": "聊与之谋。",
          "tw": "且与她们商议。",
          "en": "with them I take my counsel."
        }
      ],
      [
        {
          "zh": "出宿于泲，",
          "tw": "出嫁宿在泲地，",
          "en": "I lodged at Ji at departure,"
        },
        {
          "zh": "饮饯于祢。",
          "tw": "在祢地饮饯行。",
          "en": "and drank farewell at Ni."
        },
        {
          "zh": "女子有行，",
          "tw": "女子既已出嫁，",
          "en": "A girl once she is wed,"
        },
        {
          "zh": "远父母兄弟，",
          "tw": "远离父母兄弟。",
          "en": "leaves her parents and brothers far."
        },
        {
          "zh": "问我诸姑，",
          "tw": "问候我的诸姑，",
          "en": "I asked my aunts and kin,"
        },
        {
          "zh": "遂及伯姊。",
          "tw": "又及长姊一人。",
          "en": "and then my elder sister too."
        }
      ],
      [
        {
          "zh": "出宿于干，",
          "tw": "出宿在干地，",
          "en": "I lodged at Gan,"
        },
        {
          "zh": "饮饯于言。",
          "tw": "饯行在言地。",
          "en": "drank farewell at Yan."
        },
        {
          "zh": "载脂载辖，",
          "tw": "涂油安上车轴，",
          "en": "I greased the axle and pin,"
        },
        {
          "zh": "还车言迈。",
          "tw": "转身驱车前行。",
          "en": "turned the car and set forth."
        },
        {
          "zh": "遄臻于卫，",
          "tw": "疾速抵达卫国，",
          "en": "Swiftly I'd reach Wei,"
        },
        {
          "zh": "不瑕有害？",
          "tw": "岂会有什么害？",
          "en": "would that be any harm?"
        }
      ],
      [
        {
          "zh": "我思肥泉，",
          "tw": "我思念肥泉，",
          "en": "I think of the Fei spring,"
        },
        {
          "zh": "兹之永叹。",
          "tw": "为此长叹不息。",
          "en": "and sigh for it ever."
        },
        {
          "zh": "思须与漕，",
          "tw": "思念须地与漕，",
          "en": "I think of Xu and Cao,"
        },
        {
          "zh": "我心悠悠。",
          "tw": "我心悠悠难收。",
          "en": "my heart drifts far away."
        },
        {
          "zh": "驾言出游，",
          "tw": "驾起车去出游，",
          "en": "I drive forth to wander,"
        },
        {
          "zh": "以写我忧。",
          "tw": "以此抒写我忧。",
          "en": "to write out my sorrow."
        }
      ]
    ]
  },
  {
    "id": 15,
    "title": "北门",
    "pinyin": "běi mén",
    "theme": "讽喻怨刺",
    "sensitive": true,
    "lines": [
      "出自北门，忧心殷殷。",
      "已焉哉！天实为之，谓之何哉！"
    ],
    "trans": "我从北门走出，忧心忡忡。既穷且贫，无人知我艰难。算了吧！原是上天如此，又能说什么！",
    "notes": [
      {
        "w": "殷殷",
        "p": "yīn yīn",
        "m": "忧伤深重的样子。"
      },
      {
        "w": "窭",
        "p": "jù",
        "m": "贫寒、困窘。"
      },
      {
        "w": "埤益",
        "p": "pí yì",
        "m": "增加、加派。"
      },
      {
        "w": "谪",
        "p": "zhé",
        "m": "责怪、谴责。"
      }
    ],
    "appreciation": "描写先秦基层官吏位卑事繁、内外交困的处境。王事、政事层层加身，家人亦交相指责，只得归之于天。是古代小吏辛酸处境的真实写照。",
    "scene": "——（文旅宣传建议：不宜作为景区标语）",
    "recommend": 0,
    "note": "文旅文案建议：描写先秦基层官吏生活，不建议做景区宣传标语。",
    "full": [
      "出自北门，忧心殷殷。终窭且贫，莫知我艰。已焉哉！天实为之，谓之何哉！",
      "王事适我，政事一埤益我。我入自外，室人交遍谪我。已焉哉！天实为之，谓之何哉！",
      "王事敦我，政事一埤遗我。我入自外，室人交遍摧我。已焉哉！天实为之，谓之何哉！"
    ],
    "en": {
      "title": "The North Gate",
      "lines": [
        "I go out by the north gate, my heart heavy.",
        "It is done! Heaven made it so — what can be said?"
      ],
      "full": [
        "I go out by the north gate, my heart heavy with care. Ever poor and needy, none knows my hardship. It is done! Heaven made it so — what can be said?",
        "Royal affairs fall to me; civil duties heap upon me. I come in from without, and my household blames me in turn. It is done! Heaven made it so — what can be said?",
        "Royal affairs press me; civil duties are laid on me. I come in from without, and my household crushes me in turn. It is done! Heaven made it so — what can be said?"
      ],
      "trans": "I step out from the north gate, my heart full of worry. Poor and needy, none knows my hardship. Enough! Heaven itself ordained it — what is there to say!",
      "appreciation": "It depicts the low-ranked official of the pre-Qin, burdened within and without. Royal and civil duties pile on; even his family blames him — he can only lay it to Heaven. A true portrait of the ancient petty officer's bitter lot.",
      "notes": [
        {
          "w": "殷殷",
          "p": "yīn yīn",
          "m": "Deeply sorrowful."
        },
        {
          "w": "窭",
          "p": "jù",
          "m": "Poor; needy."
        },
        {
          "w": "埤益",
          "p": "pí yì",
          "m": "To add; to heap on."
        },
        {
          "w": "谪",
          "p": "zhé",
          "m": "To blame; to censure."
        }
      ],
      "fullTr": [
        [
          {
            "zh": "出自北门，",
            "tw": "从北门走出，",
            "en": "I went out by the north gate,"
          },
          {
            "zh": "忧心殷殷。",
            "tw": "忧心深重。",
            "en": "my worried heart weighed down."
          },
          {
            "zh": "终窭且贫，",
            "tw": "既穷困又清贫，",
            "en": "Ever poor and ever needy,"
          },
          {
            "zh": "莫知我艰。",
            "tw": "无人知我艰难。",
            "en": "none knows my hardship."
          },
          {
            "zh": "已焉哉！天实为之，",
            "tw": "算了吧！原是天意，",
            "en": "It is done! Heaven has willed it,"
          },
          {
            "zh": "谓之何哉！",
            "tw": "又能说什么呢！",
            "en": "what can I say of it!"
          }
        ],
        [
          {
            "zh": "王事适我，",
            "tw": "王室差事派我，",
            "en": "The king's affairs fall to me,"
          },
          {
            "zh": "政事一埤益我。",
            "tw": "政事一并加给我。",
            "en": "and public duty heaps on me."
          },
          {
            "zh": "我入自外，",
            "tw": "我从外归来，",
            "en": "I come home from outside,"
          },
          {
            "zh": "室人交遍谪我。",
            "tw": "家人都责怪我。",
            "en": "and my household blames me all."
          },
          {
            "zh": "已焉哉！天实为之，",
            "tw": "算了吧！原是天意，",
            "en": "It is done! Heaven has willed it,"
          },
          {
            "zh": "谓之何哉！",
            "tw": "又能说什么呢！",
            "en": "what can I say of it!"
          }
        ],
        [
          {
            "zh": "王事敦我，",
            "tw": "王室重担压我，",
            "en": "The king's affairs press on me,"
          },
          {
            "zh": "政事一埤遗我。",
            "tw": "政事尽数遗给我。",
            "en": "and public duty piles on me."
          },
          {
            "zh": "我入自外，",
            "tw": "我从外归来，",
            "en": "I come home from outside,"
          },
          {
            "zh": "室人交遍摧我。",
            "tw": "家人都摧折我。",
            "en": "and my household crushes me all."
          },
          {
            "zh": "已焉哉！天实为之，",
            "tw": "算了吧！原是天意，",
            "en": "It is done! Heaven has willed it,"
          },
          {
            "zh": "谓之何哉！",
            "tw": "又能说什么呢！",
            "en": "what can I say of it!"
          }
        ]
      ]
    },
    "fullNotes": [
      {
        "zh": "出自北门，忧心殷殷；终窭且贫，莫知我艰。",
        "en": "Out from the north gate, my heart is heavy; ever poor and needy, none know my toil.",
        "words": [
          {
            "w": "殷殷",
            "p": "yīnyīn",
            "m": "深忧",
            "em": "heavy"
          },
          {
            "w": "窭",
            "p": "jù",
            "m": "贫寒",
            "em": "poor"
          }
        ]
      },
      {
        "zh": "王事适我，政事一埤益我；室人交遍谪我。",
        "en": "Royal duties fall to me, civil tasks heap on me; my household blames me all around.",
        "words": [
          {
            "w": "埤",
            "p": "pí",
            "m": "增加",
            "em": "to increase"
          },
          {
            "w": "谪",
            "p": "zhé",
            "m": "责罚",
            "em": "to blame"
          }
        ]
      },
      {
        "zh": "王事敦我，政事一埤遗我；室人交遍摧我。",
        "en": "Royal duties press me, civil tasks pile on me; my household breaks me all around.",
        "words": [
          {
            "w": "敦",
            "p": "dūn",
            "m": "逼迫",
            "em": "to press"
          },
          {
            "w": "摧",
            "p": "cuī",
            "m": "摧折；挫伤",
            "em": "to break; to destroy"
          }
        ]
      }
    ],
    "fullTr": [
      [
        {
          "zh": "出自北门，",
          "tw": "从北门走出，",
          "en": "I went out by the north gate,"
        },
        {
          "zh": "忧心殷殷。",
          "tw": "忧心深重。",
          "en": "my worried heart weighed down."
        },
        {
          "zh": "终窭且贫，",
          "tw": "既穷困又清贫，",
          "en": "Ever poor and ever needy,"
        },
        {
          "zh": "莫知我艰。",
          "tw": "无人知我艰难。",
          "en": "none knows my hardship."
        },
        {
          "zh": "已焉哉！天实为之，",
          "tw": "算了吧！原是天意，",
          "en": "It is done! Heaven has willed it,"
        },
        {
          "zh": "谓之何哉！",
          "tw": "又能说什么呢！",
          "en": "what can I say of it!"
        }
      ],
      [
        {
          "zh": "王事适我，",
          "tw": "王室差事派我，",
          "en": "The king's affairs fall to me,"
        },
        {
          "zh": "政事一埤益我。",
          "tw": "政事一并加给我。",
          "en": "and public duty heaps on me."
        },
        {
          "zh": "我入自外，",
          "tw": "我从外归来，",
          "en": "I come home from outside,"
        },
        {
          "zh": "室人交遍谪我。",
          "tw": "家人都责怪我。",
          "en": "and my household blames me all."
        },
        {
          "zh": "已焉哉！天实为之，",
          "tw": "算了吧！原是天意，",
          "en": "It is done! Heaven has willed it,"
        },
        {
          "zh": "谓之何哉！",
          "tw": "又能说什么呢！",
          "en": "what can I say of it!"
        }
      ],
      [
        {
          "zh": "王事敦我，",
          "tw": "王室重担压我，",
          "en": "The king's affairs press on me,"
        },
        {
          "zh": "政事一埤遗我。",
          "tw": "政事尽数遗给我。",
          "en": "and public duty piles on me."
        },
        {
          "zh": "我入自外，",
          "tw": "我从外归来，",
          "en": "I come home from outside,"
        },
        {
          "zh": "室人交遍摧我。",
          "tw": "家人都摧折我。",
          "en": "and my household crushes me all."
        },
        {
          "zh": "已焉哉！天实为之，",
          "tw": "算了吧！原是天意，",
          "en": "It is done! Heaven has willed it,"
        },
        {
          "zh": "谓之何哉！",
          "tw": "又能说什么呢！",
          "en": "what can I say of it!"
        }
      ]
    ]
  },
  {
    "id": 16,
    "title": "北风",
    "pinyin": "běi fēng",
    "theme": "爱情之美",
    "lines": [
      "惠而好我，携手同归。",
      "惠而好我，携手同车。"
    ],
    "trans": "你和我是好朋友，携起手来归他邦。你和我是好朋友，携手乘车同离去。",
    "notes": [
      {
        "w": "惠",
        "p": "huì",
        "m": "仁爱、友善。"
      },
      {
        "w": "好",
        "p": "hào",
        "m": "喜爱。"
      },
      {
        "w": "同归",
        "p": "tóng guī",
        "m": "一同离去、相偕。"
      }
    ],
    "appreciation": "北风凛冽、大雪纷飞，乱世之中与所爱“携手同归”。患难见真情，是《邶风》里温暖而坚韧的相随之歌。",
    "scene": "爱情主题打卡点、青年联谊、古风体验活动。",
    "recommend": 3,
    "full": [
      "北风其凉，雨雪其雱。惠而好我，携手同行。其虚其邪？既亟只且！",
      "北风其喈，雨雪其霏。惠而好我，携手同归。其虚其邪？既亟只且！",
      "莫赤匪狐，莫黑匪乌。惠而好我，携手同车。其虚其邪？既亟只且！"
    ],
    "en": {
      "title": "The North Wind",
      "lines": [
        "Kind and fond of me, hand in hand we go home.",
        "Kind and fond of me, hand in hand we ride."
      ],
      "full": [
        "The north wind is cold, snow and rain abundant. Kind and fond of me, hand in hand we walk together. Why linger? The peril is at hand!",
        "The north wind whistles, snow and rain drift. Kind and fond of me, hand in hand we return. Why linger? The peril is at hand!",
        "No fox but is red, no crow but is black. Kind and fond of me, hand in hand we ride. Why linger? The peril is at hand!"
      ],
      "trans": "You are kind and love me; hand in hand we go together. You are kind and love me; hand in hand we ride away.",
      "appreciation": "In the bitter north wind and heavy snow, amid a troubled age, he 'goes home hand in hand' with his beloved. True love shows in hardship — a warm, resilient song of companionship in Beifeng.",
      "notes": [
        {
          "w": "惠",
          "p": "huì",
          "m": "Kind; affectionate."
        },
        {
          "w": "好",
          "p": "hào",
          "m": "To love."
        },
        {
          "w": "同归",
          "p": "tóng guī",
          "m": "To go together; to depart side by side."
        }
      ],
      "scene": "Winter cultural-tour scenes, companion-travel publicity, and friendship-themed photo spots.",
      "fullTr": [
        [
          {
            "zh": "北风其凉，",
            "tw": "北风那样凉，",
            "en": "The north wind blows so cold,"
          },
          {
            "zh": "雨雪其雱。",
            "tw": "大雪纷纷扬。",
            "en": "snow falls in flurries."
          },
          {
            "zh": "惠而好我，",
            "tw": "你若惠爱于我，",
            "en": "If you are kind and love me,"
          },
          {
            "zh": "携手同行。",
            "tw": "携手一同逃亡。",
            "en": "take my hand and flee."
          },
          {
            "zh": "其虚其邪？既亟只且！",
            "tw": "还犹疑什么？事已急迫啦！",
            "en": "Why loiter and delay? The peril is at hand!"
          }
        ],
        [
          {
            "zh": "北风其喈，",
            "tw": "北风那样疾，",
            "en": "The north wind blows so shrill,"
          },
          {
            "zh": "雨雪其霏。",
            "tw": "大雪正霏霏。",
            "en": "snow falls and drifts."
          },
          {
            "zh": "惠而好我，",
            "tw": "你若惠爱于我，",
            "en": "If you are kind and love me,"
          },
          {
            "zh": "携手同归。",
            "tw": "携手同归隐去。",
            "en": "take my hand and go."
          },
          {
            "zh": "其虚其邪？既亟只且！",
            "tw": "还犹疑什么？事已急迫啦！",
            "en": "Why loiter and delay? The peril is at hand!"
          }
        ],
        [
          {
            "zh": "莫赤匪狐，",
            "tw": "没有不红的狐，",
            "en": "No fox but is red,"
          },
          {
            "zh": "莫黑匪乌。",
            "tw": "没有不黑的乌。",
            "en": "no crow but is black."
          },
          {
            "zh": "惠而好我，",
            "tw": "你若惠爱于我，",
            "en": "If you are kind and love me,"
          },
          {
            "zh": "携手同车。",
            "tw": "携手同车离去。",
            "en": "take my hand and ride."
          },
          {
            "zh": "其虚其邪？既亟只且！",
            "tw": "还犹疑什么？事已急迫啦！",
            "en": "Why loiter and delay? The peril is at hand!"
          }
        ]
      ]
    },
    "fullNotes": [
      {
        "zh": "北风其凉，雨雪其雱；惠而好我，携手同行。",
        "en": "The north wind is cold, the snow vast; friend who loves me, let us walk hand in hand.",
        "words": [
          {
            "w": "雱",
            "p": "pāng",
            "m": "雪盛",
            "em": "vast snow"
          },
          {
            "w": "惠",
            "p": "huì",
            "m": "仁爱",
            "em": "kind"
          }
        ]
      },
      {
        "zh": "北风其喈，雨雪其霏；惠而好我，携手同归。",
        "en": "The north wind moans, the snow falls fine; friend who loves me, let us return together.",
        "words": [
          {
            "w": "喈",
            "p": "jiē",
            "m": "风疾声",
            "em": "to moan"
          },
          {
            "w": "霏",
            "p": "fēi",
            "m": "雪密",
            "em": "fine snow"
          }
        ]
      },
      {
        "zh": "莫赤匪狐，莫黑匪乌；惠而好我，携手同车。",
        "en": "Naught red but the fox, naught black but the crow; friend who loves me, let us ride together.",
        "words": [
          {
            "w": "匪",
            "p": "fěi",
            "m": "非；不是",
            "em": "not"
          },
          {
            "w": "乌",
            "p": "wū",
            "m": "乌鸦",
            "em": "crow"
          }
        ]
      }
    ],
    "fullTr": [
      [
        {
          "zh": "北风其凉，",
          "tw": "北风那样凉，",
          "en": "The north wind blows so cold,"
        },
        {
          "zh": "雨雪其雱。",
          "tw": "大雪纷纷扬。",
          "en": "snow falls in flurries."
        },
        {
          "zh": "惠而好我，",
          "tw": "你若惠爱于我，",
          "en": "If you are kind and love me,"
        },
        {
          "zh": "携手同行。",
          "tw": "携手一同逃亡。",
          "en": "take my hand and flee."
        },
        {
          "zh": "其虚其邪？既亟只且！",
          "tw": "还犹疑什么？事已急迫啦！",
          "en": "Why loiter and delay? The peril is at hand!"
        }
      ],
      [
        {
          "zh": "北风其喈，",
          "tw": "北风那样疾，",
          "en": "The north wind blows so shrill,"
        },
        {
          "zh": "雨雪其霏。",
          "tw": "大雪正霏霏。",
          "en": "snow falls and drifts."
        },
        {
          "zh": "惠而好我，",
          "tw": "你若惠爱于我，",
          "en": "If you are kind and love me,"
        },
        {
          "zh": "携手同归。",
          "tw": "携手同归隐去。",
          "en": "take my hand and go."
        },
        {
          "zh": "其虚其邪？既亟只且！",
          "tw": "还犹疑什么？事已急迫啦！",
          "en": "Why loiter and delay? The peril is at hand!"
        }
      ],
      [
        {
          "zh": "莫赤匪狐，",
          "tw": "没有不红的狐，",
          "en": "No fox but is red,"
        },
        {
          "zh": "莫黑匪乌。",
          "tw": "没有不黑的乌。",
          "en": "no crow but is black."
        },
        {
          "zh": "惠而好我，",
          "tw": "你若惠爱于我，",
          "en": "If you are kind and love me,"
        },
        {
          "zh": "携手同车。",
          "tw": "携手同车离去。",
          "en": "take my hand and ride."
        },
        {
          "zh": "其虚其邪？既亟只且！",
          "tw": "还犹疑什么？事已急迫啦！",
          "en": "Why loiter and delay? The peril is at hand!"
        }
      ]
    ]
  },
  {
    "id": 17,
    "title": "静女",
    "pinyin": "jìng nǚ",
    "theme": "爱情之美",
    "lines": [
      "静女其姝，俟我于城隅。爱而不见，搔首踟蹰。",
      "静女其娈，贻我彤管。彤管有炜，说怿女美。",
      "自牧归荑，洵美且异。匪女之为美，美人之贻。"
    ],
    "trans": "娴静姑娘真可爱，约我城角楼上来。故意躲藏让我找，急得抓耳又挠腮。娴静姑娘好容颜，送我一枝红彤管。鲜红彤管有光彩，爱它颜色真鲜艳。郊野采荑送给我，荑草美好又珍异。不是荑草长得美，美人相赠厚情意。",
    "notes": [
      {
        "w": "姝",
        "p": "shū",
        "m": "美丽。"
      },
      {
        "w": "俟",
        "p": "sì",
        "m": "等待。"
      },
      {
        "w": "踟蹰",
        "p": "chí chú",
        "m": "徘徊、犹豫貌。"
      },
      {
        "w": "娈",
        "p": "luán",
        "m": "美好。"
      },
      {
        "w": "贻",
        "p": "yí",
        "m": "赠。"
      },
      {
        "w": "荑",
        "p": "tí",
        "m": "初生的茅草。"
      }
    ],
    "appreciation": "华夏文字记载中最早的浪漫约会。城隅相约、彤管寄情、荑草为赠，“匪女之为美，美人之贻”写尽至纯情愫。邶城因此被誉为“千年爱情圣地”。",
    "scene": "七夕活动、青年联谊、爱情主题打卡点、景区宣传牌、婚恋文化场景。",
    "recommend": 5,
    "full": [
      "静女其姝，俟我于城隅。爱而不见，搔首踟蹰。",
      "静女其娈，贻我彤管。彤管有炜，说怿女美。",
      "自牧归荑，洵美且异。匪女之为美，美人之贻。"
    ],
    "en": {
      "title": "The Quiet Girl",
      "lines": [
        "The quiet girl is fair, waiting for me at the corner tower.",
        "The quiet girl is lovely, she gives me a red reed-tube.",
        "From the pasture she brings rush — truly fair and rare; not the rush is fair, but the giver."
      ],
      "full": [
        "The quiet girl is fair, waiting for me at the corner tower. She hides and will not show, and I scratch my head, hesitating.",
        "The quiet girl is lovely, she gives me a red reed-tube. The red tube is bright — I delight in its beauty.",
        "From the pasture she brings me rush, truly fair and rare. Not that the rush is fair, but the beauty who gave it."
      ],
      "trans": "The quiet girl is lovely, she waits for me at the tower corner. Hiding, she will not appear; I scratch my head and hesitate. The quiet girl is beautiful, she gives me a red tube. Bright the red tube — I love its glow. From the fields she brings me rush, fair and strange; not the rush is fair, but the gift of the fair one.",
      "appreciation": "The earliest romantic rendezvous on record in Chinese letters. The tower assignation, the red tube, the rush gift — 'not the rush is fair, but the giver' exhausts the purest affection. Beicheng is thus hailed as a 'Sacred Land of Love for Millennia'.",
      "notes": [
        {
          "w": "姝",
          "p": "shū",
          "m": "Beautiful."
        },
        {
          "w": "俟",
          "p": "sì",
          "m": "To wait."
        },
        {
          "w": "踟蹰",
          "p": "chí chú",
          "m": "To pace; to hesitate."
        },
        {
          "w": "娈",
          "p": "luán",
          "m": "Lovely."
        },
        {
          "w": "贻",
          "p": "yí",
          "m": "To give."
        },
        {
          "w": "荑",
          "p": "tí",
          "m": "Fresh rush shoots."
        }
      ],
      "scene": "Dating photo spots, youth-social scenes, and romance-themed interactive installations.",
      "fullTr": [
        [
          {
            "zh": "静女其姝，",
            "tw": "娴静姑娘真美，",
            "en": "The quiet girl is fair,"
          },
          {
            "zh": "俟我于城隅。",
            "tw": "约我在城角相会。",
            "en": "she waits for me at the corner."
          },
          {
            "zh": "爱而不见，",
            "tw": "故意藏身不见，",
            "en": "She hides and will not show,"
          },
          {
            "zh": "搔首踟蹰。",
            "tw": "我搔首徘徊不安。",
            "en": "I scratch my head and pace."
          }
        ],
        [
          {
            "zh": "静女其娈，",
            "tw": "娴静姑娘娇美，",
            "en": "The quiet girl is lovely,"
          },
          {
            "zh": "贻我彤管。",
            "tw": "赠我红管草。",
            "en": "she gives me a red-tube grass."
          },
          {
            "zh": "彤管有炜，",
            "tw": "红管草色鲜明，",
            "en": "The red-tube glows bright,"
          },
          {
            "zh": "说怿女美。",
            "tw": "我爱那草之美。",
            "en": "I delight in its beauty."
          }
        ],
        [
          {
            "zh": "自牧归荑，",
            "tw": "从牧场送我白茅，",
            "en": "From the meadow she brought reed-tips,"
          },
          {
            "zh": "洵美且异。",
            "tw": "实在美而珍异。",
            "en": "truly fair and rare."
          },
          {
            "zh": "匪女之为美，",
            "tw": "不是草儿本身美，",
            "en": "Not that the plant is fair,"
          },
          {
            "zh": "美人之贻。",
            "tw": "是美人所赠啊。",
            "en": "but the giver is fair."
          }
        ]
      ]
    },
    "fullNotes": [
      {
        "zh": "静女其姝，俟我于城隅；爱而不见，搔首踟蹰。",
        "en": "The quiet girl is fair, waiting at the corner; hiding, she stays unseen, and I scratch my head in doubt.",
        "words": [
          {
            "w": "姝",
            "p": "shū",
            "m": "美好",
            "em": "fair; beautiful"
          },
          {
            "w": "隅",
            "p": "yú",
            "m": "角落",
            "em": "corner"
          }
        ]
      },
      {
        "zh": "静女其娈，贻我彤管；彤管有炜，说怿女美。",
        "en": "The quiet girl is lovely, giving me a red pipe; bright the pipe, I delight in her beauty.",
        "words": [
          {
            "w": "娈",
            "p": "luán",
            "m": "美好",
            "em": "lovely"
          },
          {
            "w": "炜",
            "p": "wěi",
            "m": "光彩",
            "em": "bright"
          }
        ]
      },
      {
        "zh": "自牧归荑，洵美且异；匪女之为美，美人之贻。",
        "en": "From the meadow she brought a reed, truly fair and rare; not the reed is beautiful, but the giver.",
        "words": [
          {
            "w": "荑",
            "p": "tí",
            "m": "初生嫩茅",
            "em": "reed shoot"
          },
          {
            "w": "洵",
            "p": "xún",
            "m": "确实",
            "em": "truly"
          }
        ]
      }
    ],
    "fullTr": [
      [
        {
          "zh": "静女其姝，",
          "tw": "娴静姑娘真美，",
          "en": "The quiet girl is fair,"
        },
        {
          "zh": "俟我于城隅。",
          "tw": "约我在城角相会。",
          "en": "she waits for me at the corner."
        },
        {
          "zh": "爱而不见，",
          "tw": "故意藏身不见，",
          "en": "She hides and will not show,"
        },
        {
          "zh": "搔首踟蹰。",
          "tw": "我搔首徘徊不安。",
          "en": "I scratch my head and pace."
        }
      ],
      [
        {
          "zh": "静女其娈，",
          "tw": "娴静姑娘娇美，",
          "en": "The quiet girl is lovely,"
        },
        {
          "zh": "贻我彤管。",
          "tw": "赠我红管草。",
          "en": "she gives me a red-tube grass."
        },
        {
          "zh": "彤管有炜，",
          "tw": "红管草色鲜明，",
          "en": "The red-tube glows bright,"
        },
        {
          "zh": "说怿女美。",
          "tw": "我爱那草之美。",
          "en": "I delight in its beauty."
        }
      ],
      [
        {
          "zh": "自牧归荑，",
          "tw": "从牧场送我白茅，",
          "en": "From the meadow she brought reed-tips,"
        },
        {
          "zh": "洵美且异。",
          "tw": "实在美而珍异。",
          "en": "truly fair and rare."
        },
        {
          "zh": "匪女之为美，",
          "tw": "不是草儿本身美，",
          "en": "Not that the plant is fair,"
        },
        {
          "zh": "美人之贻。",
          "tw": "是美人所赠啊。",
          "en": "but the giver is fair."
        }
      ]
    ]
  },
  {
    "id": 18,
    "title": "新台",
    "pinyin": "xīn tái",
    "theme": "讽喻怨刺",
    "sensitive": true,
    "lines": [
      "新台有泚，河水瀰瀰。",
      "燕婉之求，得此戚施。"
    ],
    "trans": "新台那样鲜明，河水那样漫漫。本求燕婉佳偶，却得丑恶之人。新台那样高峻，河水那样盛满。本求燕婉佳偶，却得丑陋之人。张网本是捕鱼，却网得鸿鸟。本求燕婉佳偶，却得这驼背丑汉。",
    "notes": [
      {
        "w": "新台",
        "p": "xīn tái",
        "m": "卫宣公所筑台名。"
      },
      {
        "w": "泚",
        "p": "cǐ",
        "m": "鲜明的样子。"
      },
      {
        "w": "燕婉",
        "p": "yàn wǎn",
        "m": "安顺美好，指佳偶。"
      },
      {
        "w": "蘧篨",
        "p": "qú chú",
        "m": "有残疾不能俯身的人，喻丑恶。"
      },
      {
        "w": "戚施",
        "p": "qī shī",
        "m": "驼背，喻丑恶之人。"
      }
    ],
    "appreciation": "讽刺卫宣公强占儿媳的乱伦丑行，“新台有泚”以台之华丽反衬人之丑恶，是政治讽刺与伦理批判诗。文旅文案建议：不宜选用，避免争议。",
    "scene": "——（文旅宣传建议：不宜作为景区标语）",
    "recommend": 0,
    "note": "文旅文案建议：本篇属政治讽刺与伦理批判诗，认为不宜选用，避免争议。",
    "full": [
      "新台有泚，河水瀰瀰。燕婉之求，蘧篨不鲜。",
      "新台有洒，河水浼浼。燕婉之求，蘧篨不殄。",
      "鱼网之设，鸿则离之。燕婉之求，得此戚施。"
    ],
    "en": {
      "title": "The New Tower",
      "lines": [
        "The new tower is bright, the river wide.",
        "A graceful match was sought — and this cripple gained."
      ],
      "full": [
        "The new tower is bright, the river spreads wide. A graceful match was sought — but the hunchback is no beauty.",
        "The new tower is steep, the river brims full. A graceful match was sought — the hunchback will not end.",
        "A fish-net was set, yet a wild goose is taken. A graceful match was sought — and this crooked one obtained."
      ],
      "trans": "The new tower is bright, the river wide. A graceful match was sought, but an ugly one gained. The new tower is steep, the river full. A graceful match was sought, but an ugly one. A fish-net was set, yet a goose is caught — a graceful match sought, and this hunchback got.",
      "appreciation": "It satirizes Duke Xuan of Wei, who seized his son's bride; 'the new tower is bright' sets the tower's splendor against the ugliness of the man — a poem of political and ethical censure. Tourism note: not recommended, to avoid controversy.",
      "notes": [
        {
          "w": "新台",
          "p": "xīn tái",
          "m": "The name of a tower built by Duke Xuan of Wei."
        },
        {
          "w": "泚",
          "p": "cǐ",
          "m": "Bright; fresh."
        },
        {
          "w": "燕婉",
          "p": "yàn wǎn",
          "m": "Graceful and good; a fine match."
        },
        {
          "w": "蘧篨",
          "p": "qú chú",
          "m": "A crippled, unable-to-bow person; figuratively the ugly."
        },
        {
          "w": "戚施",
          "p": "qī shī",
          "m": "Hunchback; figuratively the ugly."
        }
      ],
      "fullTr": [
        [
          {
            "zh": "新台有泚，",
            "tw": "新台那样华美，",
            "en": "The new terrace shines bright,"
          },
          {
            "zh": "河水瀰瀰。",
            "tw": "河水宽阔弥漫。",
            "en": "the river spreads wide."
          },
          {
            "zh": "燕婉之求，",
            "tw": "本求那燕婉佳偶，",
            "en": "She sought a gentle, graceful mate,"
          },
          {
            "zh": "蘧篨不鲜。",
            "tw": "得个癞虾蟆不鲜。",
            "en": "but got a crookback, far from bright."
          }
        ],
        [
          {
            "zh": "新台有洒，",
            "tw": "新台那样高峻，",
            "en": "The new terrace stands tall,"
          },
          {
            "zh": "河水浼浼。",
            "tw": "河水漫漫平满。",
            "en": "the river flows full."
          },
          {
            "zh": "燕婉之求，",
            "tw": "本求那燕婉佳偶，",
            "en": "She sought a gentle, graceful mate,"
          },
          {
            "zh": "蘧篨不殄。",
            "tw": "得个癞虾蟆不绝。",
            "en": "but got a crookback, never to end."
          }
        ],
        [
          {
            "zh": "鱼网之设，",
            "tw": "鱼网张设水中，",
            "en": "A fish-net was spread,"
          },
          {
            "zh": "鸿则离之。",
            "tw": "大雁却落其中。",
            "en": "a goose was caught instead."
          },
          {
            "zh": "燕婉之求，",
            "tw": "本求那燕婉佳偶，",
            "en": "She sought a gentle, graceful mate,"
          },
          {
            "zh": "得此戚施。",
            "tw": "得这驼背之人。",
            "en": "but gained this hunchback instead."
          }
        ]
      ]
    },
    "fullNotes": [
      {
        "zh": "新台有泚，河水瀰瀰；燕婉之求，蘧篨不鲜。",
        "en": "The new tower gleams, the river spreads wide; she sought a gentle lord, got a lame toad, far from fair.",
        "words": [
          {
            "w": "泚",
            "p": "cǐ",
            "m": "鲜明",
            "em": "bright; gleaming"
          },
          {
            "w": "蘧篨",
            "p": "qúchú",
            "m": "身有残疾者",
            "em": "a deformed man"
          }
        ]
      },
      {
        "zh": "新台有洒，河水浼浼；燕婉之求，蘧篨不殄。",
        "en": "The new tower stands tall, the river flows full; she sought a gentle lord, got a toad, unbanned.",
        "words": [
          {
            "w": "浼浼",
            "p": "měiměi",
            "m": "水满",
            "em": "full-flowing"
          },
          {
            "w": "殄",
            "p": "tiǎn",
            "m": "绝；灭",
            "em": "to end; to ban"
          }
        ]
      },
      {
        "zh": "鱼网之设，鸿则离之；燕婉之求，得此戚施。",
        "en": "A fishnet was set, a goose was caught; she sought a gentle lord, got this hunchback.",
        "words": [
          {
            "w": "戚施",
            "p": "qīshī",
            "m": "驼背",
            "em": "hunchback"
          },
          {
            "w": "鸿",
            "p": "hóng",
            "m": "大雁",
            "em": "goose"
          }
        ]
      }
    ],
    "fullTr": [
      [
        {
          "zh": "新台有泚，",
          "tw": "新台那样华美，",
          "en": "The new terrace shines bright,"
        },
        {
          "zh": "河水瀰瀰。",
          "tw": "河水宽阔弥漫。",
          "en": "the river spreads wide."
        },
        {
          "zh": "燕婉之求，",
          "tw": "本求那燕婉佳偶，",
          "en": "She sought a gentle, graceful mate,"
        },
        {
          "zh": "蘧篨不鲜。",
          "tw": "得个癞虾蟆不鲜。",
          "en": "but got a crookback, far from bright."
        }
      ],
      [
        {
          "zh": "新台有洒，",
          "tw": "新台那样高峻，",
          "en": "The new terrace stands tall,"
        },
        {
          "zh": "河水浼浼。",
          "tw": "河水漫漫平满。",
          "en": "the river flows full."
        },
        {
          "zh": "燕婉之求，",
          "tw": "本求那燕婉佳偶，",
          "en": "She sought a gentle, graceful mate,"
        },
        {
          "zh": "蘧篨不殄。",
          "tw": "得个癞虾蟆不绝。",
          "en": "but got a crookback, never to end."
        }
      ],
      [
        {
          "zh": "鱼网之设，",
          "tw": "鱼网张设水中，",
          "en": "A fish-net was spread,"
        },
        {
          "zh": "鸿则离之。",
          "tw": "大雁却落其中。",
          "en": "a goose was caught instead."
        },
        {
          "zh": "燕婉之求，",
          "tw": "本求那燕婉佳偶，",
          "en": "She sought a gentle, graceful mate,"
        },
        {
          "zh": "得此戚施。",
          "tw": "得这驼背之人。",
          "en": "but gained this hunchback instead."
        }
      ]
    ]
  },
  {
    "id": 19,
    "title": "二子乘舟",
    "pinyin": "èr zǐ chéng zhōu",
    "theme": "乡愁之深",
    "lines": [
      "二子乘舟，泛泛其景。",
      "愿言思子，中心养养！"
    ],
    "trans": "你俩乘船走了，船儿飘飘远去。多么思念你呵，心中恋意难除。",
    "notes": [
      {
        "w": "泛泛",
        "p": "fàn fàn",
        "m": "漂流的样子。"
      },
      {
        "w": "养养",
        "p": "yǎng yǎng",
        "m": "忧思不绝的样子。"
      }
    ],
    "appreciation": "二子乘舟远去，送者中心养养。以舟影渐远写兄弟（或友人）离散之思，情韵悠长，余味不尽。",
    "scene": "送别主题景观、返乡主题宣传、文化展示馆。",
    "recommend": 3,
    "full": [
      "二子乘舟，泛泛其景。愿言思子，中心养养！",
      "二子乘舟，泛泛其逝。愿言思子，不瑕有害？"
    ],
    "en": {
      "title": "Two Sons Aboard",
      "lines": [
        "Two sons aboard the boat, it drifts afar.",
        "I think of you long — my heart troubled!"
      ],
      "full": [
        "Two sons aboard the boat, it drifts into the distance. I think of you long — my heart is never at rest!",
        "Two sons aboard the boat, it drifts away. I think of you long — can no harm come?"
      ],
      "trans": "The two of you sailed away, the boat drifting far. How I think of you — my heart's longing will not leave.",
      "appreciation": "Two sons sail away; the sender's heart is never at peace. With the boat fading into distance it writes the parting thought of brothers (or friends) — lingering in tone, endless in aftertaste.",
      "notes": [
        {
          "w": "泛泛",
          "p": "fàn fàn",
          "m": "Drifting; floating."
        },
        {
          "w": "养养",
          "p": "yǎng yǎng",
          "m": "Unending worry."
        }
      ],
      "scene": "Farewell-themed photo spots, kinship-and-friendship publicity, and wanderer-culture scenes.",
      "fullTr": [
        [
          {
            "zh": "二子乘舟，",
            "tw": "两位公子乘船，",
            "en": "Two princes board the boat,"
          },
          {
            "zh": "泛泛其景。",
            "tw": "船影飘飘荡荡。",
            "en": "its shadow drifts and sways."
          },
          {
            "zh": "愿言思子，",
            "tw": "我长久思念你，",
            "en": "Long, long I think of you,"
          },
          {
            "zh": "中心养养！",
            "tw": "心中忧思惶惶！",
            "en": "my heart is full of care!"
          }
        ],
        [
          {
            "zh": "二子乘舟，",
            "tw": "两位公子乘船，",
            "en": "Two princes board the boat,"
          },
          {
            "zh": "泛泛其逝。",
            "tw": "船儿悠悠远去。",
            "en": "it drifts and fades away."
          },
          {
            "zh": "愿言思子，",
            "tw": "我长久思念你，",
            "en": "Long, long I think of you,"
          },
          {
            "zh": "不瑕有害？",
            "tw": "该不会遇害吧？",
            "en": "surely no harm comes your way?"
          }
        ]
      ]
    },
    "fullNotes": [
      {
        "zh": "二子乘舟，泛泛其景；愿言思子，中心养养。",
        "en": "Two sons ride the boat, its shadow drifting; I think of them, my heart adrift.",
        "words": [
          {
            "w": "泛泛",
            "p": "fànfàn",
            "m": "漂浮",
            "em": "drifting"
          },
          {
            "w": "养养",
            "p": "yǎngyǎng",
            "m": "忧心不定",
            "em": "restless"
          }
        ]
      },
      {
        "zh": "二子乘舟，泛泛其逝；愿言思子，不瑕有害。",
        "en": "Two sons ride the boat, drifting away; I think of them — surely no harm?",
        "words": [
          {
            "w": "逝",
            "p": "shì",
            "m": "离去",
            "em": "to pass away"
          },
          {
            "w": "瑕",
            "p": "xiá",
            "m": "过失；病",
            "em": "fault; harm"
          }
        ]
      }
    ],
    "fullTr": [
      [
        {
          "zh": "二子乘舟，",
          "tw": "两位公子乘船，",
          "en": "Two princes board the boat,"
        },
        {
          "zh": "泛泛其景。",
          "tw": "船影飘飘荡荡。",
          "en": "its shadow drifts and sways."
        },
        {
          "zh": "愿言思子，",
          "tw": "我长久思念你，",
          "en": "Long, long I think of you,"
        },
        {
          "zh": "中心养养！",
          "tw": "心中忧思惶惶！",
          "en": "my heart is full of care!"
        }
      ],
      [
        {
          "zh": "二子乘舟，",
          "tw": "两位公子乘船，",
          "en": "Two princes board the boat,"
        },
        {
          "zh": "泛泛其逝。",
          "tw": "船儿悠悠远去。",
          "en": "it drifts and fades away."
        },
        {
          "zh": "愿言思子，",
          "tw": "我长久思念你，",
          "en": "Long, long I think of you,"
        },
        {
          "zh": "不瑕有害？",
          "tw": "该不会遇害吧？",
          "en": "surely no harm comes your way?"
        }
      ]
    ]
  }
];

const HIGHLIGHTS = [
  {
    "text": "执子之手，与子偕老",
    "from": "《击鼓》",
    "star": 5,
    "why": "知名度最高，适合七夕、爱情文化传播",
    "fromEn": "from 'Ji Gu'",
    "whyEn": "Most renowned; ideal for Qixi and love-culture promotion"
  },
  {
    "text": "我心匪石，不可转也",
    "from": "《柏舟》",
    "star": 5,
    "why": "体现中华优秀传统文化中的坚定品格",
    "fromEn": "from 'Bo Zhou'",
    "whyEn": "Embodies the steadfast character of Chinese culture"
  },
  {
    "text": "凯风自南，吹彼棘心",
    "from": "《凯风》",
    "star": 4,
    "why": "体现孝亲文化，适合家庭主题",
    "fromEn": "from 'Kai Feng'",
    "whyEn": "Embodies filial piety; fits family themes"
  },
  {
    "text": "燕燕于飞，下上其音",
    "from": "《燕燕》",
    "star": 4,
    "why": "适合生态景观和湿地场景营造",
    "fromEn": "from 'Yan Yan'",
    "whyEn": "Fits ecological and wetland scenery"
  }
];

const CULTURE = {
  "intro": "《诗经》是中国第一部诗歌总集，分“风、雅、颂”，其中“国风”收录各地民歌。《邶风》为十五国风之一，共十九篇，产生于周代邶地——即今河南省汤阴县一带。",
  "beicheng": "邶城遗址位于汤阴县瓦岗镇邶城村，相传为商代邶国故城。遗址东西长约1564米、南北宽约1050米，总面积约164万平方米。1982年经考古钻探确认为商代邶国遗址，后为省级文物保护单位。村口牌坊篆书“邶城”“诗经邶风故里”“千年爱情圣地”。",
  "history": "周武王灭商后，为控御殷商故地，将商朝畿辅之地划分为邶、鄘、卫三方国，封纣王之子武庚于邶。武庚筑城建邑，邶国肇始。彼时“南有朝歌，北有邶城”，盛极一时。武王崩，武庚叛，周公东征灭之，邶城终成废墟，而其诗韵却随《诗经》流传千古。",
  "sansheng": "汤阴素称“千年古县”，拥有五千余年文明史，并孕育独具特色的“三圣文化”：文圣周文王于羑里推演《周易》，武圣岳飞精忠报国，医圣扁鹊悬壶济世。邶风诗经文化以“爱情”这一温柔绵长的人文主题，为千年古县添一抹浪漫底色。",
  "love": "《静女》定格华夏有据可考的第一场诗意约会；《击鼓》“执子之手，与子偕老”是中国最早的爱情誓言。邶城因此被誉为“千年爱情圣地”，2017年“邶城·千年爱情圣地”地名故事获全国“寻找最美地名故事”三等奖。",
  "relics": "邶国遗址保护公园规划《诗经》文化园、《邶风》十九首主题园、传统国学体验馆、千年爱情文化主题广场、传统婚恋主题体验馆、爱情主题花园等，将诗韵融入山水与街巷。",
  "en": {
    "intro": "The Shijing (Book of Songs) is China's first anthology of poetry, divided into 'Feng (Airs), Ya (Odes), Song (Hymns)'. The 'Guofeng' gathers folk songs from across the land. 'Beifeng' is one of the Fifteen Airs — nineteen poems born in the land of Bei of the Zhou dynasty, around present-day Tangyin, Henan.",
    "beicheng": "The Beicheng ruins lie in Beicheng Village, Wagang Town, Tangyin. Tradition holds it was the ancient capital of the state of Bei of the Shang. The site measures about 1564 m east-west and 1050 m north-south, some 1.64 million m². Confirmed by archaeological survey in 1982 as a Shang-era Bei site, it is now a provincial protected relic. The village gateway bears the seal-script inscriptions 'Beicheng', 'Homeland of Shijing Beifeng', and 'Sacred Land of Love for Millennia'.",
    "history": "After King Wu of Zhou overthrew Shang, he partitioned the former royal territory into the three states of Bei, Yong, and Wei, enfeoffing Wu Geng, son of the last Shang king, at Bei. Wu Geng built the city and founded Bei — then 'Chaoge to the south, Beicheng to the north', in its glory. After King Wu's death, Wu Geng rebelled; the Duke of Zhou's eastern campaign destroyed Bei, leaving the city in ruins — yet its poetry survived through the Shijing for millennia.",
    "sansheng": "Tangyin, an 'ancient county of millennia' with over five thousand years of civilization, nurtured a distinctive 'culture of three sages': King Wen of Zhou, the sage of letters, who deduced the Yijing at Youli; Yue Fei, the sage of war, loyal to the death; and Bian Que, the sage of medicine. The Beifeng poetry adds a romantic hue to this ancient county through the gentle, enduring theme of love.",
    "love": "'Jing Nü' captures the earliest documented poetic courtship in China; 'Ji Gu's 'Hold your hand, and grow old with you' is the earliest love vow. Beicheng is thus hailed as a 'Sacred Land of Love for Millennia' — its story won a national award in 2017.",
    "relics": "The Bei Ruins Park plans a Shijing culture garden, a themed garden of the nineteen Beifeng poems, a classical-learning hall, a love-culture square, a wedding-themed experience hall, and a love-themed garden — weaving poetry into hills, waters, and streets."
  }
};

const I18N = {
  "zh": {
    "brand_sub": "汤阴 · 邶风故里",
    "nav_origin": "邶风渊源",
    "nav_poems": "十九篇",
    "nav_themes": "五大主题",
    "nav_tour": "文旅推荐",
    "nav_study": "研学互动",
    "hero_sub": "湯陰 · 邶風故里 · 千年愛情聖地",
    "tag1": "十五国风之一",
    "tag2": "十九篇",
    "tag3": "西周至春秋",
    "tag4": "千年古县",
    "scroll_hint": "下 滑 入 卷 ↓",
    "kicker_origin": "邶 风 渊 源",
    "h2_origin": "三千年诗韵，根在汤阴",
    "p_origin": "《邶风》十九篇，产生于周代邶地——今河南汤阴一带。这里不仅有《诗经》的故壤，更孕育了独属汤阴的浪漫文脉。",
    "p_origin2": "从十九篇中提炼出爱情、亲情、乡愁、品格、自然五大主题方向，为文旅场景与研学提供脉络。",
    "panel_intro": "邶风何来",
    "panel_beicheng": "邶国与邶城",
    "panel_history": "武王封邶",
    "panel_sansheng": "汤阴三圣",
    "panel_love": "千年爱情圣地",
    "panel_relics": "邶国遗址保护公园",
    "quote": "执子之手，与子偕老",
    "quote_small": "—— 中国最早的爱情誓言 · 出自《邶风·击鼓》",
    "kicker_poems": "十 九 篇",
    "h2_poems": "邶风十九篇 · 优秀诗句",
    "p_poems": "点击任意诗篇，展开卷轴，赏原文、读译文、品注释与赏析。可按主题筛选，或检索关键词。",
    "search_ph": "检索篇名或诗句…",
    "all": "全部",
    "kicker_themes": "五 大 主 题",
    "h2_themes": "诗中之情，五脉相通",
    "theme_cnt": "共 X 篇",
    "kicker_tour": "文 旅 推 荐",
    "h2_tour": "重点推荐宣传诗句",
    "p_tour": "依文旅文案优先级，精选传播度高、文化底蕴厚的经典诗句，宜作城市名片与景区标语。",
    "kicker_study": "研 学 互 动",
    "h2_study": "邶风填句 · 飞花小考",
    "p_study": "读一句邶风，补全下一句。在游戏中熟记经典，感受三千年前的诗心。",
    "quiz_next": "下 一 题",
    "quiz_done": "题库已用完，感谢研习！",
    "footer_title": "诗经 · 邶风 · 汤阴",
    "footer_p": "千年古县，诗经故壤。愿君于此，遇见三千年前的浪漫与深情。",
    "label_trans": "【译文】",
    "label_notes": "注释",
    "label_appr": "赏析",
    "label_scene": "适用场景",
    "label_full": "全文",
    "label_lines": "名句",
    "label_fullnotes": "分章串讲",
    "read_lines": "朗读名句",
    "read_full": "朗读全文",
    "read_stop": "停止",
    "lang_zh": "中文",
    "lang_en": "English",
    "warn_prefix": "文旅建议：慎选 · ",
    "fb_ok": "✓ 正是此句，诗心相通。",
    "fb_no": "✗ 正确答案：",
    "no_match": "未找到匹配的诗篇。",
    "its": "邶风 · 其"
  },
  "en": {
    "brand_sub": "Tangyin · Homeland of Beifeng",
    "nav_origin": "Origins",
    "nav_poems": "Poems",
    "nav_themes": "Themes",
    "nav_tour": "Highlights",
    "nav_study": "Quiz",
    "hero_sub": "Tangyin · Homeland of Beifeng · A Sacred Land of Love for Millennia",
    "tag1": "One of the Fifteen Airs",
    "tag2": "Nineteen Poems",
    "tag3": "Western Zhou–Spring & Autumn",
    "tag4": "Ancient County of Millennia",
    "scroll_hint": "Scroll Down ↓",
    "kicker_origin": "ORIGINS",
    "h2_origin": "Three Thousand Years of Verse, Rooted in Tangyin",
    "p_origin": "The nineteen poems of 'Beifeng' (Airs of Bei) were born in the land of Bei of the Zhou dynasty — present-day Tangyin, Henan. Here lies not only the soil of the Shijing (Book of Songs), but a romance unique to Tangyin.",
    "p_origin2": "Five currents of feeling — love, kinship, homesickness, character, and nature — are drawn from the nineteen poems, offering a thread for cultural tourism and study.",
    "panel_intro": "Where Beifeng Began",
    "panel_beicheng": "The State & Town of Bei",
    "panel_history": "King Wu Enfeoffs Bei",
    "panel_sansheng": "Tangyin's Three Sages",
    "panel_love": "A Sacred Land of Love",
    "panel_relics": "Bei Ruins Park",
    "quote": "Hold your hand, and grow old with you",
    "quote_small": "— China's earliest love vow, from 'Beifeng · Ji Gu' (Drumming)",
    "kicker_poems": "NINETEEN POEMS",
    "h2_poems": "Nineteen Poems of Beifeng · Finest Lines",
    "p_poems": "Click any poem to unroll the scroll — read the original, the translation, notes and appreciation. Filter by theme or search by keyword.",
    "search_ph": "Search title or verse…",
    "all": "All",
    "kicker_themes": "FIVE THEMES",
    "h2_themes": "Five Currents of Feeling",
    "theme_cnt": "X poems",
    "kicker_tour": "HIGHLIGHTS",
    "h2_tour": "Key Verses Recommended",
    "p_tour": "Selected by priority for cultural promotion — classic lines of high renown and cultural depth, fit for a city's name card and scenic slogans.",
    "kicker_study": "INTERACTIVE",
    "h2_study": "Beifeng Fill-in Quiz",
    "p_study": "Read a line of Beifeng, complete the next. Learn the classics through play, and feel the poetic heart of three millennia ago.",
    "quiz_next": "NEXT",
    "quiz_done": "Quiz complete. Thank you for studying!",
    "footer_title": "Shijing · Beifeng · Tangyin",
    "footer_p": "An ancient county of millennia, the native soil of the Shijing. May you meet here the romance and depth of three thousand years ago.",
    "label_trans": "Translation",
    "label_notes": "Notes",
    "label_appr": "Appreciation",
    "label_scene": "Suggested Use",
    "label_full": "Full",
    "label_lines": "Fine Lines",
    "label_fullnotes": "Chapter Summary",
    "read_lines": "Read Fine Lines",
    "read_full": "Read Full Text",
    "read_stop": "Stop",
    "lang_zh": "中文",
    "lang_en": "English",
    "warn_prefix": "Tourism note — use with caution: ",
    "fb_ok": "✓ Exactly right.",
    "fb_no": "✗ Correct answer: ",
    "no_match": "No matching poems found.",
    "its": "Beifeng · No. "
  }
};
