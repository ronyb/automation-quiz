export const questions = [
  { 
      question: "האם נבחרו הטכנלוגיות הראשיות עבור פרויקט האוטומציה (שפת פיתוח, כלים, ספריות תוכנה מרכזיות וכו')?",
      answers: [
          "כן, נבחרה שפת פיתוח ראשית, כלים וספריות תוכנה מרכזיות שישמשו בפרויקט.",
          "לא, עדיין לא ברור באיזה טכנולוגיות נכון להשתמש לצורך פיתוח הפרויקט."
      ]
  },
  { 
      question: "האם החלה עבודת פיתוח לאוטומציה של בדיקות?",
      answers: [
          "כן, נעשתה עבודה כלשהי להתנעת פרויקט אוטומציה של בדיקות.",
          "לא, אין אוטומציה של בדיקות אוטומטיות כלל."
      ]
  },
  { 
      question: "האם הוגדרה ארכיטקטורת תוכנה לשימוש בפרויקט?",
      answers: [
          "כן, נבחרה ארכיטקטורת תוכנה לפרויקט.",
          "לא, עדיין לא ברור מהי ארכיטקטורת התוכנה הנכונה עבור הפרויקט."
      ]
  },
  { 
      question: "האם פותחו כבר לפחות 50 בדיקות אוטומטיות?",
      answers: [
          "כן, יש לנו כבר לפחות 50 בדיקות אוטומטיות.",
          "לא, עדיין אין לנו 50 בדיקות אוטומטיות."
      ]
  },
  { 
      question: "האם הבדיקות האוטומטיות הקיימות מחוברות למערכת CI/CD או למערכת תזמון אחרת?",
      answers: [
          "כן, קיים חיבור של הבדיקות למערכת CI/CD או למערכת תזמון כלשהי.",
          "לא, עדיין לא קיים חיבור של הבדיקות למערכת CI/CD או למערכת תזמון כלשהי."
      ]
  },
  { 
      question: "האם קיימת מערכת דוחות איכותית לאיסוף וניתוח תוצאות ריצה?",
      answers: [
          "כן, האוטומציה מפיקה דוחות איכותיים ומפורטים.",
          "לא, האוטומציה עדיין לא יודעת להפיק דוחות אינפורמטיביים מספיק."
      ]
  },
  { 
      question: "האם הבדיקות האוטומטיות החליפו את הבדיקות הידניות לחלוטין?",
      answers: [
          "כן, כבר אין לנו צורך בבדיקות ידניות. האוטומציה מכסה את כל מה שיש לבדוק.",
          "לא, כיסוי האוטומציה עדיין לא מלא, והאוטומציה עדיין לא החליפה את הבדיקות הידניות."
      ]
  },
  { 
      question: "האם קיימת תמיכה בהרצה מקבילית של הבדיקות לצורך קיצור זמני הריצה?",
      answers: [
          "כן, פותח פתרון התומך בהרצה מקבילית של הבדיקות האוטומטיות.",
          "לא, ריצה מקבילית עדיין לא נתמכת או מוגבלת מאוד."
      ]
  },
  { 
      question: "האם הבדיקות האוטומטיות משמשות במתכונת Continuous Integration לאחר כל ביצוע שינוי בקוד המוצר?",
      answers: [
          "כן, לאחר כל שינוי בקוד המוצר, הבדיקות האוטומטיות רצות במסגרת תהליך CI.",
          "לא, עדיין אין קישור בין הבדיקות האוטומטיות לתהליכי CI המורצים לאחר ביצוע שינויים בקוד המוצר."
      ]
  },
  { 
      question: "האם יש מסמכי בדיקות הכוללים אפיון ופירוט עבור כל הבדיקות המיועדות לאוטומציה?",
      answers: [
          "כן, כל הבדיקות המיועדות לאוטומציה ממוסמכות ומתועדות היטב וברמת פירוט מספקת.",
          "לא, עדיין לא נעשתה אצלנו עבודה מסודרת לתיעוד ופירוט הבדיקות המיועדות לאוטומציה."
      ]
  },
  { 
      question: "האם הבדיקות האוטומטיות הקיימות יציבות ומספקות תוצאות עקביות וברמת אמינות גבוהה?",
      answers: [
          "כן, האוטומציה יציבה, מספקת תוצאות עקביות וברמת אמינות גבוהה.",
          "לא, קיימות בעיות יציבות. חלק מהטסטים לא מספיק אמינים."
      ]
  },
  { 
      question: "האם האוטומציה נטולת בעיות ולא ידוע על קשיים כדוגמת זמני ריצה ארוכים מדי / קושי בתחזוקה והרחבה של המערכת / קושי בהבנת הסיבה לכישלון טסטים וכו'?",
      answers: [
          "כן, כל הבעיות והאתגרים המרכזיים בנוגע לפיתוח האוטומציה נפתרו ולא ידוע לנו על בעיות מיוחדות.",
          "לא, עדיין יש קשיים טכניים מהסוג שצויין בשאלה או בעיות אחרות כלשהן."
      ]
  },
  { 
      question: "האם קיים כיסוי לכל מגוון הממשקים הרלוונטיים? (לדוגמא, יש אוטומציה לבדיקות UI וגם אוטומציה לבדיקות API)",
      answers: [
          "כן, האוטומציה מכסה ובודקת את כל סוגי הממשקים הרלוונטיים של המוצר.",
          "לא, יש לנו בדיקות לסוג מסוים של ממשק, אבל היינו רוצים להוסיף בדיקות לכיסוי ממשקים נוספים."
      ]
  },
  { 
      question: "האם יש בחברה כוח אדם מיומן לפיתוח טסטים חדשים ותחזוקה של המערכת הקיימת?",
      answers: [
          "כן, יש לנו מפתחי אוטומציה מוכשרים ומיומנים ולא אמורה להיות להם בעיה להוסיף טסטים חדשים ולתחזק את תשתיות פרויקט האוטומציה.",
          "לא, מפתחי האוטומציה שלנו עדיין לא מספיק חזקים טכנית, ולא בטוח שיצליחו להתמודד עם כל אתגר טכני שצריך יהיה להתמודד איתו."
      ]
  },
  { 
      question: "האם יש בחברה כוח אדם מיומן לצורך הפעלת ריצות אוטומציה וחקירת תוצאות הריצה, שלא מקרב מפתחי האוטומציה?",
      answers: [
          "כן, הכשרנו עוד עובדים שאינם מפתחי אוטומציה כך שיידעו להריץ את הבדיקות האוטומטיות ומסוגלים לחקור את תוצרי הריצה.",
          "לא, רק מפתחי האוטומציה שלנו יודעים לתפעל את המערכת ולהבין את הדוחות שהיא מפיקה. אנשים אחרים לא יודעים איך להשתמש באוטומציה ולא יצליחו להבין מה האוטומציה עשתה."
      ]
  },
  { 
      question: "האם המפתח הראשי של מערכת האוטומציה, זה שתכנן ופיתח את התשתיות, עדיין מועסק בחברה? האם יש מוביל טכני / סמכות מקצועית לפרויקט?",
      answers: [
          "כן, יש לנו מוביל טכני המהווה סמכות מקצועית בכל הנוגע להמשך פיתוח ותחזוקת המערכת.",
          "לא, המפתח המקורי של מערכת האוטומציה כבר לא מועסק בחברה, וקיים קושי בהכשרה והובלה מקצועית של מפתחי האוטומציה הקיימים."
      ]
  },
  { 
      question: "האם הרמה המקצועית/טכנית של מפתחי האוטומציה הקיימים בצוות גבוהה מספיק? (לדוגמה: מבינים את כל הטכנולוגיות שנעשה בהן שימוש בארגון כדוגמת כלי DevOps, Web Services, Docker, Kubernetes וכדומה)?",
      answers: [
          "כן, אנחנו מרוצים מהרמה המקצועית של מפתחי האוטומציה שלנו. יש להם יידע רחב בטכניקות וטכנולוגיות של אוטומציה וכלים משיקים.",
          "לא, חסר יידע ו/או הבנה של טכניקות וטכנולוגיות מתקדמות ויש מקום לשיפור הרמה המקצועית של מפתחי האוטומציה על ידי הדרכות/הכשרות מקצועיות."
      ]
  },
  { 
      question: "האם גורמים שמחוץ לצוות הבדיקות רתומים לשימוש במערכת האוטומציה?",
      answers: [
          "כן, כל הצוותים הרלוונטיים בארגון רתומים להצלחת פרויקט האוטומציה של הבדיקות, נותנים בו אמון ומשתפים פעולה לצורך הצלחתו.",
          "לא, קיימות בעיות של שיתוף פעולה פנים-ארגוני. אין מספיק הערכה/אמון באוטומציה ולכן גם לא מתייחסים אליה ברצינות."
      ]
  },
  { 
      question: "האם סיימתם לאפיין את כל סוגי הבדיקות הרצויות לבדיקת המערכת? (לדוגמה: בדיקות UI, בדיקות API, בדיקות עומסים, בדיקות אבטחה – בדיקות פונקציונליות וגם לא-פונקציונליות)?",
      answers: [
          "כן, נעשתה עבודה יסודית של מיפוי ואיפיון הצרכים מבחינת בדיקות ואוטומציה. ברור לנו מה ואיך צריך לבדוק במוצר.",
          "לא, עדיין אין לנו את התמונה המלאה בנוגע לכל סוגי הבדיקות שנרצה לבצע. רצוי לאפיין את הצרכים והדרישות טוב יותר."
      ]
  },
  { 
      question: "האם פרויקט האוטומציה מנוהל היטב באמצעות כלי ניהול פרויקטים כדוגמת Jira? (מתקיים מעקב אחר סטטוס משימות, אחוז כיסוי הבדיקות, עדכון אוטומטי של סטטוס בדיקות וכו')?",
      answers: [
          "כן, פרויקט האוטומציה מנוהל היטב בכלי כדוגמת Jira. יש לנו תמונה ברורה עבור הצוות והמנהלים בנוגע למשימות האוטומציה והסטטוס שלהן.",
          "לא, יש לנו קצת בלאגן עם ניהול המשימות בפרויקט האוטומציה. כרגע קשה לנו לקבל תמונת מצב ברורה בנוגע למצב הפרויקט ועמידה בייעדים."
      ]
  }
];
