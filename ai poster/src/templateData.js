/*
 * IPAR Poster Studio — Template Data
 * Rules:
 *   1. Each event has 3-4 variants
 *   2. Each BG image is used by ONLY ONE event
 *   3. isPoster=true → full AI poster, isPoster=false → photo BG + overlay
 */

export const IPAR_LOGO = '/assets/ipar-logo.svg';

export const EVENTS = [
    // ── 0. गुढी पाडवा ──
    {
        id: 'gudi-padwa', label: 'गुढी पाडवा', icon: '🚩', cat: 'marathi',
        variants: [
            { isPoster: true, bg: '/assets/festivals/gudi-padwa.png', t1: 'शुभ', t2: 'गुढी पाडवा', sub: 'नवीन वर्षाच्या हार्दिक शुभेच्छा!', a1: '#FF9800', a2: '#E65100' },
            { isPoster: false, bg: '/assets/festivals/gudi-padwa.png', t1: 'गुढी', t2: 'पाडवा', sub: 'समृद्धी आणि आनंदाचे वर्ष!', a1: '#FFD700', a2: '#FF8C00' },
        ]
    },


    // ── 1. श्रीराम नवमी ──
    {
        id: 'ram-navami', label: 'श्रीराम नवमी', icon: '🛕', cat: 'hindu',
        variants: [
            { isPoster: true, bg: '/assets/festivals/ram-navami-v2.png', t1: 'श्रीराम', t2: 'नवमी', sub: 'निमित्त सर्वांना मंगलमय शुभेच्छा!', a1: '#FFD700', a2: '#FF8C00' },
            { isPoster: false, bg: '/assets/festivals/ram-navami-v2.png', t1: 'शुभ', t2: 'रामनवमी', sub: 'जय श्रीराम! शुभेच्छा!', a1: '#FF8C00', a2: '#E53935' },
            { isPoster: false, bg: '/assets/festivals/ram-navami-v2.png', t1: 'शुभ', t2: 'रामनवमी', sub: 'रामनवमीच्या हार्दिक शुभेच्छा!', a1: '#FFD700', a2: '#FF8C00' },
            { isPoster: false, bg: '/assets/festivals/RAM1.jpg', t1: 'शुभ', t2: 'रामनवमी', sub: 'रामनवमीच्या हार्दिक शुभेच्छा!', a1: '#FFD700', a2: '#FF8C00' },
            { isPoster: false, bg: '/assets/festivals/RAM2.jpg', t1: 'शुभ', t2: 'रामनवमी', sub: 'रामनवमीच्या हार्दिक शुभेच्छा!', a1: '#FFD700', a2: '#FF8C00' },
            { isPoster: false, bg: '/assets/festivals/RAM3.jpg', t1: 'शुभ', t2: 'रामनवमी', sub: 'रामनवमीच्या हार्दिक शुभेच्छा!', a1: '#FFD700', a2: '#FF8C00' },
            { isPoster: false, bg: '/assets/festivals/RAM4.jpg', t1: 'शुभ', t2: 'रामनवमी', sub: 'रामनवमीच्या हार्दिक शुभेच्छा!', a1: '#FFD700', a2: '#FF8C00' },
            { isPoster: false, bg: '/assets/festivals/RAM5.jpg', t1: 'शुभ', t2: 'रामनवमी', sub: 'रामनवमीच्या हार्दिक शुभेच्छा!', a1: '#FFD700', a2: '#FF8C00' },
            { isPoster: false, bg: '/assets/festivals/RAM6.jpg', t1: 'शुभ', t2: 'रामनवमी', sub: 'रामनवमीच्या हार्दिक शुभेच्छा!', a1: '#FFD700', a2: '#FF8C00' },
            { isPoster: false, bg: '/assets/festivals/RAM7.jpg', t1: 'शुभ', t2: 'रामनवमी', sub: 'रामनवमीच्या हार्दिक शुभेच्छा!', a1: '#FFD700', a2: '#FF8C00' },
            { isPoster: false, bg: '/assets/festivals/RAM8.jpg', t1: 'शुभ', t2: 'रामनवमी', sub: 'रामनवमीच्या हार्दिक शुभेच्छा!', a1: '#FFD700', a2: '#FF8C00' },
            { isPoster: false, bg: '/assets/festivals/RAM9.jpg', t1: 'शुभ', t2: 'रामनवमी', sub: 'रामनवमीच्या हार्दिक शुभेच्छा!', a1: '#FFD700', a2: '#FF8C00' },
            { isPoster: false, bg: '/assets/festivals/RAM10.jpg', t1: 'शुभ', t2: 'रामनवमी', sub: 'रामनवमीच्या हार्दिक शुभेच्छा!', a1: '#FFD700', a2: '#FF8C00' },

        ]
    },

    // ── 2. हनुमान जयंती ──
    {
        id: 'hanuman-jayanti', label: 'हनुमान जयंती', icon: '🙏', cat: 'hindu',
        variants: [
            { isPoster: true, bg: '/assets/festivals/hanuman-jayanti-v1.png', t1: 'हनुमान', t2: 'जयंती', sub: 'बजरंगबली की जय!', a1: '#FF5722', a2: '#FF8F00' },
            { isPoster: false, bg: '/assets/festivals/hanuman-jayanti-v1.png', t1: 'शुभ', t2: 'जयंती', sub: 'जय बजरंगबली! 🙏', a1: '#FF8C00', a2: '#BF360C' },
            { isPoster: false, bg: '/assets/festivals/hanuman-jayanti-v1.png', t1: 'हनुमान', t2: 'जन्मोत्सव', sub: 'हनुमान जयंतीच्या शुभेच्छा!', a1: '#FFD700', a2: '#E65100' },
        ]
    },

    // ── 3. दीपावली ──
    {
        id: 'diwali', label: 'दीपावली', icon: '🪔', cat: 'hindu',
        variants: [
            { isPoster: true, bg: '/assets/festivals/diwali-v2.png', t1: 'शुभ', t2: 'दीपावली', sub: 'दीपावलीच्या हार्दिक शुभेच्छा!', a1: '#FFD700', a2: '#FF6F00' },
            { isPoster: true, bg: '/assets/festivals/diwali-v2.png', t1: 'शुभ', t2: 'दीपावली', sub: 'दीपावलीच्या मंगलमय शुभेच्छा!', a1: '#FFD700', a2: '#E65100' },
            { isPoster: false, bg: '/assets/festivals/diwali-v2.png', t1: 'शुभ', t2: 'लक्ष्मीपूजन', sub: 'लक्ष्मीपूजनाच्या शुभेच्छा!', a1: '#FF8C00', a2: '#E65100' },
        ]
    },

    // ── 4. होळी ──
    {
        id: 'holi', label: 'होळी', icon: '🎨', cat: 'hindu',
        variants: [
            { isPoster: true, bg: '/assets/festivals/holi-v2.png', t1: 'शुभ', t2: 'होळी', sub: 'होळीच्या हार्दिक शुभेच्छा!', a1: '#E91E63', a2: '#7B1FA2' },
            { isPoster: true, bg: '/assets/festivals/holi-v2.png', t1: 'Happy', t2: 'Holi', sub: 'Festival of Colors! 🌈', a1: '#FF4081', a2: '#00BCD4' },
            { isPoster: false, bg: '/assets/festivals/holi-v2.png', t1: 'शुभ', t2: 'होळी', sub: 'रंगांचा सण! रंगपंचमीच्या शुभेच्छा!', a1: '#FFD700', a2: '#FF6F00' },
        ]
    },

    // ── 5. गणेश चतुर्थी ──
    {
        id: 'ganesh-chaturthi', label: 'गणेश चतुर्थी', icon: '🙏', cat: 'hindu',
        variants: [
            { isPoster: false, bg: '/assets/festivals/ganesh-v2.png', t1: 'गणपती', t2: 'बाप्पा मोरया', sub: 'गणेश चतुर्थीच्या हार्दिक शुभेच्छा!', a1: '#FF5722', a2: '#BF360C' },
            { isPoster: false, bg: '/assets/festivals/ganesh-v2.png', t1: 'गणपती', t2: 'बाप्पा मोरया', sub: 'मंगलमूर्ती मोरया!', a1: '#FFD700', a2: '#FF8C00' },
            { isPoster: true, bg: '/assets/festivals/ganesh-v2.png', t1: 'शुभ', t2: 'गणेशोत्सव', sub: 'सुखकर्ता दुखहर्ता! 🙏', a1: '#E91E63', a2: '#880E4F' },
        ]
    },

    // ── 6. नवरात्री ──
    {
        id: 'navratri', label: 'नवरात्री', icon: '🔱', cat: 'hindu',
        variants: [
            { isPoster: false, bg: '/assets/festivals/navratri-v2.png', t1: 'शुभ', t2: 'नवरात्री', sub: 'जय माता दी! 🙏', a1: '#E91E63', a2: '#880E4F' },
            { isPoster: true, bg: '/assets/festivals/navratri-v2.png', t1: 'शुभ', t2: 'नवरात्री', sub: 'देवीच्या कृपेने सुख-समृद्धी!', a1: '#7C4DFF', a2: '#311B92' },
            { isPoster: false, bg: '/assets/festivals/navratri-v2.png', t1: 'शुभ', t2: 'नवरात्री', sub: 'नवरात्रीच्या हार्दिक शुभेच्छा!', a1: '#FF8C00', a2: '#E91E63' },
        ]
    },

    // ── 7. दसरा ──
    {
        id: 'dussehra', label: 'दसरा', icon: '🏹', cat: 'hindu',
        variants: [
            { isPoster: true, bg: '/assets/festivals/dussehra-v2.png', t1: 'शुभ', t2: 'विजयादशमी', sub: 'दसऱ्याच्या हार्दिक शुभेच्छा! 🏹', a1: '#FFD700', a2: '#FF8C00' },
            { isPoster: true, bg: '/assets/festivals/dussehra-v2.png', t1: 'शुभ', t2: 'दसरा', sub: 'सत्याचा विजय!', a1: '#FFD700', a2: '#FF5722' },
            { isPoster: false, bg: '/assets/festivals/dussehra-v2.png', t1: 'शुभ', t2: 'विजयादशमी', sub: 'विजयादशमीच्या शुभेच्छा!', a1: '#FFD700', a2: '#E65100' },
        ]
    },

    // ── 8. जन्माष्टमी ──
    {
        id: 'janmashtami', label: 'जन्माष्टमी', icon: '🦚', cat: 'hindu',
        variants: [
            { isPoster: false, bg: '/assets/festivals/janmashtami-v2.png', t1: 'श्रीकृष्ण', t2: 'जन्माष्टमी', sub: 'जन्माष्टमीच्या हार्दिक शुभेच्छा!', a1: '#1565C0', a2: '#0D47A1' },
            { isPoster: true, bg: '/assets/festivals/janmashtami-v2.png', t1: 'दही', t2: 'हंडी', sub: 'गोविंदा रे गोपाळा! 🙏', a1: '#FFD700', a2: '#FF8C00' },
            { isPoster: false, bg: '/assets/festivals/janmashtami-v2.png', t1: 'Happy', t2: 'Janmashtami', sub: 'Jai Shri Krishna! 🙏', a1: '#7C4DFF', a2: '#311B92' },
        ]
    },

    // ── 9. महाशिवरात्री ──
    {
        id: 'maha-shivratri', label: 'महाशिवरात्री', icon: '🔱', cat: 'hindu',
        variants: [
            { isPoster: false, bg: '/assets/festivals/shivratri-v2.png', t1: 'महा', t2: 'शिवरात्री', sub: 'हर हर महादेव! 🙏', a1: '#7C4DFF', a2: '#311B92' },
            { isPoster: true, bg: '/assets/festivals/shivratri-v2.png', t1: 'महा', t2: 'शिवरात्री', sub: 'ॐ नमः शिवाय! 🙏', a1: '#00BCD4', a2: '#006064' },
            { isPoster: false, bg: '/assets/festivals/shivratri-v2.png', t1: 'बम बम', t2: 'भोले', sub: 'शिवरात्रीच्या हार्दिक शुभेच्छा!', a1: '#FF9800', a2: '#BF360C' },
        ]
    },

    // ── 10. रक्षाबंधन ──
    {
        id: 'raksha-bandhan', label: 'रक्षाबंधन', icon: '🧵', cat: 'hindu',
        variants: [
            { isPoster: false, bg: '/assets/festivals/raksha-bandhan-v2.png', t1: 'शुभ', t2: 'रक्षाबंधन', sub: 'रक्षाबंधनाच्या हार्दिक शुभेच्छा!', a1: '#E91E63', a2: '#AD1457' },
            { isPoster: false, bg: '/assets/festivals/raksha-bandhan-v2.png', t1: 'शुभ', t2: 'रक्षाबंधन', sub: 'भाऊ-बहिणीच्या प्रेमाचा सण!', a1: '#FFD700', a2: '#FF8C00' },
            { isPoster: false, bg: '/assets/festivals/raksha-bandhan-v2.png', t1: 'Happy', t2: 'Raksha Bandhan', sub: 'Bond of Love! ❤️', a1: '#E91E63', a2: '#7C4DFF' },
        ]
    },

    // ── 11. मकर संक्रांती ──  
    {
        id: 'makar-sankranti', label: 'मकर संक्रांती', icon: '🪁', cat: 'hindu',
        variants: [
            { isPoster: false, bg: '/assets/festivals/sankranti-v2.png', t1: 'शुभ', t2: 'मकर संक्रांती', sub: 'तिळगुळ घ्या, गोड गोड बोला!', a1: '#FF6F00', a2: '#E65100' },
            { isPoster: true, bg: '/assets/festivals/sankranti-v2.png', t1: 'शुभ', t2: 'संक्रांती', sub: 'पतंग उडवा! 🪁', a1: '#1565C0', a2: '#FF8C00' },
            { isPoster: false, bg: '/assets/festivals/sankranti-v2.png', t1: 'तिळगूळ', t2: 'घ्या', sub: 'गोड गोड बोला! 🙏', a1: '#FFD700', a2: '#FF5722' },
        ]
    },

    // ── 12. शिव जयंती ──
    {
        id: 'shiv-jayanti', label: 'शिव जयंती', icon: '🏰', cat: 'marathi',
        variants: [
            { isPoster: true, bg: '/assets/festivals/shiv-jayanti-v2.png', t1: 'छत्रपती', t2: 'शिवाजी महाराज', sub: 'जयंतीनिमित्त शुभेच्छा!', a1: '#FFD700', a2: '#E53935' },
            { isPoster: true, bg: '/assets/festivals/shiv-jayanti-v2.png', t1: 'छत्रपती', t2: 'शिवाजी महाराज', sub: 'महाराजांना मानाचा मुजरा!', a1: '#FF6B00', a2: '#E53935' },
            { isPoster: false, bg: '/assets/festivals/shiv-jayanti-v2.png', t1: 'जय शिवराय', t2: '', sub: 'हिंदवी स्वराज्य! जय शिवराय!', a1: '#FF5722', a2: '#BF360C' },
        ]
    },

    // ── 13. सांस्कृतिक कार्यक्रम ──
    {
        id: 'marathi-culture', label: 'सांस्कृतिक', icon: '🥁', cat: 'marathi-culture',
        variants: [
            { isPoster: false, bg: '/assets/festivals/cultural-v2.png', t1: 'सांस्कृतिक', t2: 'महोत्सव', sub: 'परंपरेचा उत्सव, आपला सण!', a1: '#FF6F00', a2: '#E65100' },
            { isPoster: true, bg: '/assets/festivals/cultural-v2.png', t1: 'मराठी', t2: 'बाणा', sub: 'संस्कृतीचे जतन करूया!', a1: '#FFD700', a2: '#FF8C00' },
            { isPoster: false, bg: '/assets/festivals/cultural-v2.png', t1: 'कला', t2: 'अविष्कार', sub: 'गुणांचा गौरव आणि कौतुक!', a1: '#E91E63', a2: '#AD1457' },
        ]
    },
];
