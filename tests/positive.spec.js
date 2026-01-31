const { test, expect } = require('@playwright/test');

test.describe('Positive Functional Tests – Swift Translator (Auto-Translate)', () => {

  const testCases = [
    { id: 'Pos_Fun_0001', input: 'mama office yanavaa', expected: 'මම office යනවා' },
    { id: 'Pos_Fun_0002', input: 'mama gedhara yanavaa saha ammaa innavaadha balanavaa', expected: 'මම ගෙදර යනවා සහ අම්මා ඉන්නවාද බලනවා' },
    { id: 'Pos_Fun_0003', input: 'oyaa enavanam api passe kathaa karamu', expected: 'ඔයා එනවනම් අපි පස්සෙ කතා කරමු' },
    { id: 'Pos_Fun_0004', input: 'oyaa adha office yanne naedhdha?', expected: 'ඔයා අද office යන්නෙ නැද්ද?' },
    { id: 'Pos_Fun_0005', input: 'eeka hariyata kalaadha kiyalaa balanna', expected: 'ඒක හරියට කලාද කියලා බලන්න' },
    { id: 'Pos_Fun_0006', input: 'mama heta trip ekak yanavaa', expected: 'මම හෙට trip එකක් යනවා' },
    { id: 'Pos_Fun_0007', input: 'mata heta school yanna baehae', expected: 'මට හෙට school යන්න බැහැ' },
    { id: 'Pos_Fun_0008', input: 'suba udhaeesanak! oyaa mokadha karannee?', expected: 'සුබ උදෑසනක්! ඔයා මොකද කරන්නේ?' },
    { id: 'Pos_Fun_0009', input: 'oyaata puluvamdha mata udhavvak dhenna?', expected: 'ඔයාට පුලුවම්ද මට උදව්වක් දෙන්න?' },
    { id: 'Pos_Fun_0010', input: 'ov mata udhav karanna puluvam', expected: 'ඔව් මට උදව් කරන්න පුලුවම්' },
    { id: 'Pos_Fun_0011', input: 'karuNaakaralaa mata eeka dhenavadha?', expected: 'කරුණාකරලා මට ඒක දෙනවද?' },
    { id: 'Pos_Fun_0012', input: 'adoo eeka hariyata karapam', expected: 'අඩෝ ඒක හරියට කරපම්' },
    { id: 'Pos_Fun_0013', input: 'mata dhaen kammaeliyi', expected: 'මට දැන් කම්මැලියි' },
    { id: 'Pos_Fun_0014', input: 'oyaa kaeema kaalaa enna', expected: 'ඔයා කෑම කාලා එන්න' },
    { id: 'Pos_Fun_0015', input: 'mata shopping yanna oona', expected: 'මට shopping යන්න ඕන' },
    { id: 'Pos_Fun_0016', input: 'hemin hemin kaeema kanna', expected: 'හෙමින් හෙමින් කෑම කන්න' },
    { id: 'Pos_Fun_0017', input: 'mama iiyee parakku vunaa', expected: 'මම ඊයේ පරක්කු වුනා' },
    { id: 'Pos_Fun_0018', input: 'mama dhaen naanavaa', expected: 'මම දැන් නානවා' },
    { id: 'Pos_Fun_0019', input: 'api iiLaGA sathiye hambavemu', expected: 'අපි ඊළඟ සතියෙ හම්බවෙමු' },
    { id: 'Pos_Fun_0020', input: 'mama LaGA salli naee', expected: 'මම ළඟ සල්ලි නෑ' },
    { id: 'Pos_Fun_0021', input: 'mama ready vena gaman innee', expected: 'මම ready වෙන ගමන් ඉන්නේ' },
    { id: 'Pos_Fun_0022', input: 'eyaalaa heta enavaa kivvaa', expected: 'එයාලා හෙට එනවා කිව්වා' },
    { id: 'Pos_Fun_0023', input: 'karuNaakaralaa magen mukuth ahaganne naethuva methanin yanna', expected: 'කරුණාකරලා මගෙන් මුකුත් අහගන්නෙ නැතුව මෙතනින් යන්න' },
    { id: 'Pos_Fun_0024', input: 'mama oyaata magee Linkedin profile link eka whatsapp karaa', expected: 'මම ඔයාට මගේ Linkedin profile link එක whatsapp කරා' },
    { id: 'Pos_Fun_0025', input: 'apee lamayige school eka thiyenne colombo vala', expected: 'අපේ ලමයිගෙ school එක තියෙන්නෙ colombo වල' },
    { id: 'Pos_Fun_0026', input: 'QR code eka scan karalaa aapu PIN code eka mama oyaata SMS kalaa', expected: 'QR code එක scan කරලා ආපු PIN code එක මම ඔයාට SMS කලා' },
    { id: 'Pos_Fun_0027', input: 'suBha siQQhala aluth avurudhdhak veevaa!', expected: 'සුභ සිංහල අලුත් අවුරුද්දක් වේවා!' },
    { id: 'Pos_Fun_0028', input: 'ee BhaaNdayee mila Rs. 4500.00', expected: 'ඒ භාණ්ඩයේ මිල Rs. 4500.00' },
    { id: 'Pos_Fun_0029', input: 'mama oyaava ganna 7.30 A.M enavaa', expected: 'මම ඔයාව ගන්න 7.30 A.M එනවා' },
    { id: 'Pos_Fun_0030', input: '2026/01/25 vana dhina assignment  eka avasan karanna thiyenavaa', expected: '2026/01/25 වන දින assignment  එක අවසන් කරන්න තියෙනවා' },
    { id: 'Pos_Fun_0031', input: 'magee bara 2kg valin vaedi velaa', expected: 'මගේ බර 2kg වලින් වැඩි වෙලා' },
    { id: 'Pos_Fun_0032', input: 'mama   adha    campus   ennee   naee', expected: 'මම   අද    campus   එන්නේ   නෑ' },
    { id: 'Pos_Fun_0033', input: 'mama adha kaden kanavaa \noyaatath kanna geennadha?', expected: 'මම අද කඩෙන් කනවා\nඔයාටත් කන්න ගේන්නද?' },
    { id: 'Pos_Fun_0034', input: 'varthamaanayee pavathina thaakShaNika dhiyuNuvath samaGa edhinedhaa jivithayee bohoo katayuthu pahasu vii aethi athara bohoo piris naviina thaakShaNaya Bhaavithaa kiriimata unandhuvak dhakvayi', expected: 'වර්තමානයේ පවතින තාක්ෂණික දියුණුවත් සමඟ එදිනෙදා ජිවිතයේ බොහෝ කටයුතු පහසු වී ඇති අතර බොහෝ පිරිස් නවීන තාක්ෂණය භාවිතා කිරීමට උනන්දුවක් දක්වයි' },
    { id: 'Pos_Fun_0035', input: 'adoo uba eeka supiriyata kiyalaa dhunnaa bokka', expected: 'අඩෝ උබ ඒක සුපිරියට කියලා දුන්නා බොක්ක' },
  ];

  for (const testCase of testCases) {
    test(`${testCase.id} – Convert`, async ({ page }) => {
      await page.goto('https://www.swifttranslator.com/', { waitUntil: 'domcontentloaded' });

      // Fill input
      const inputBox = page.locator('textarea[placeholder="Input Your Singlish Text Here."]');
      await inputBox.fill(testCase.input);

      // Wait for the output container to have text
      const outputBox = page.locator(
        'div.w-full.h-80.p-3.rounded-lg.ring-1.ring-slate-300.whitespace-pre-wrap.overflow-y-auto.flex-grow.bg-slate-50'
      );

      // Wait until some text appears (non-empty)
      await expect(outputBox).not.toHaveText('', { timeout: 15000 });

      // Then assert it contains the expected text (less strict)
      if (testCase.expected) {
        await expect(outputBox).toContainText(testCase.expected, { timeout: 12000 });
      } else if (testCase.expectedLines) {
        for (const line of testCase.expectedLines) {
          await expect(outputBox).toContainText(line, { timeout: 12000 });
        }
      }
    });
  }
});
