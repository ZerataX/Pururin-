// ==UserScript==
// @name         Pururin+ 
// @version      1.00
// @description  ;_;
// @author       ZerataX
// @namespace    mail@zera.tax
// @license      Unlicense
// @updateURL    https://openuserjs.org/meta/ZerataX/My_Script.meta.js
// @include      *.pururin.com/* 
// @include      http://pururin.com/*
// ==/UserScript==

var tags = '{"tags": [' +
    '{"tag":"Ahegao / アヘ顔" , "id":"1376"},' +
    '{"tag":"Alien / 異星 Extraterrestrial life" , "id":"13793"},' +
    '{"tag":"Amputee / 切断患者" , "id":"3347"},' +
    '{"tag":"Anal / アナル" , "id":"332"},' +
    '{"tag":"Angel / 天使" , "id":"3274"},' +
    '{"tag":"Anilingus / アニリングス Rimjob, ケツ舐め" , "id":"3614"},' +
    '{"tag":"Animal Ears / 動物耳 Kemonomimi" , "id":"322"},' +
    '{"tag":"Animal Girl / 動物娘 Kemonomimi" , "id":"2316"},' +
    '{"tag":"Armpit / 腋の下" , "id":"19499"},' +
    '{"tag":"Autofellatio / オートフェラチオ Selfsuck, self-suck, auto-fellatio" , "id":"19532"},' +
    '{"tag":"Band-Aid / バンドエイド Bandaid" , "id":"19498"},' +
    '{"tag":"Bathroom Sex / 浴室のセックス" , "id":"6259"},' +
    '{"tag":"BBW / デブ Fat, Chubby" , "id":"4133"},' +
    '{"tag":"BDSM Bondage & Discipline, Dominance & Submission, Sadomasochism, Shibari" , "id":"1360"},' +
    '{"tag":"Bestiality / 獣姦 Animal Sex, Zoophilia" , "id":"1688"},' +
    '{"tag":"Big Areola / 大きな乳輪 Biggu nyūrin, Puffy Nipples" , "id":"19501"},' +
    '{"tag":"Big Ass / 大きなお尻" , "id":"11287"},' +
    '{"tag":"Bikini / ビキニ" , "id":"4554"},' +
    '{"tag":"Birth / 出産" , "id":"12700"},' +
    '{"tag":"Bisexual / 両刀使い" , "id":"19492"},' +
    '{"tag":"Blackmail / 恐喝 Kyoukatsu" , "id":"10396"},' +
    '{"tag":"Blindfold / 目隠し" , "id":"6579"},' +
    '{"tag":"Blindness / 盲目 No Eyesight" , "id":"16363"},' +
    '{"tag":"Bloomers / ブルマー Buruma" , "id":"3641"},' +
    '{"tag":"Blowjob / フェラチオ Fellatio" , "id":"352"},' +
    '{"tag":"Body Painting / ボディーペインティング" , "id":"6577"},' +
    '{"tag":"Body Swap / ボディスワップ Mind Swap" , "id":"19497"},' +
    '{"tag":"Body Writing / 身体に落書き" , "id":"13827"},' +
    '{"tag":"Bodysuit / ボディースーツ Plugsuit, Catsuit, Zentai, Full Body Tights, ゼンタイ, 全身タイツ" , "id":"11227"},' +
    '{"tag":"Bondage / 緊縛 ボンデージ" , "id":"2000"},' +
    '{"tag":"Breast Expansion / 乳房拡大" , "id":"1989"},' +
    '{"tag":"Breast Sucking / 乳吸い おっぱいしゃぶり, Nipple Sucking" , "id":"12023"},' +
    '{"tag":"Bride / 花嫁 Wedding Dress" , "id":"3780"},' +
    '{"tag":"Bukkake / ぶっかけ" , "id":"1375"},' +
    '{"tag":"Bunny Ears / うさ耳 Usamimi" , "id":"3275"},' +
    '{"tag":"Bunnygirl / バニーガール Bunny Girl" , "id":"2819"},' +
    '{"tag":"Cat ears / 猫耳 Nekomimi" , "id":"199"},' +
    '{"tag":"Catgirl / 猫娘 Cat Girl" , "id":"1681"},' +
    '{"tag":"CBT Cock and Ball Torture" , "id":"12880"},' +
    '{"tag":"Centaur / ケンタウロス" , "id":"19496"},' +
    '{"tag":"Chastity Belt / 貞操帯" , "id":"16360"},' +
    '{"tag":"Cheating / 浮気" , "id":"10252"},' +
    '{"tag":"Cheerleader / チアガール" , "id":"13119"},' +
    '{"tag":"Chikan / 痴漢 チカン, ちかん, Molestation, Groping" , "id":"12034"},' +
    '{"tag":"Childhood Friend / 幼なじみ Osananajimi" , "id":"13791"},' +
    '{"tag":"Chinese Dress / チャイナドレス Cheongsam, Qípáo" , "id":"6096"},' +
    '{"tag":"Collar / 首輪 Choker" , "id":"3846"},' +
    '{"tag":"Condom / コンドーム" , "id":"6313"},' +
    '{"tag":"Cosplay / コスプレ Costume Play" , "id":"13663"},' +
    '{"tag":"Cow Girl / 牛娘 Cowgirl" , "id":"1987"},' +
    '{"tag":"Crossdressing / 服装倒錯 Transvestite" , "id":"19539"},' +
    '{"tag":"Cunnilingus / クンニリングス" , "id":"353"},' +
    '{"tag":"Dandere / ダンデレ Shy, Timid" , "id":"16361"},' +
    '{"tag":"Dark Skin / 褐色肌" , "id":"5964"},' +
    '{"tag":"Daughter / 娘 Musume, Stepdaughter, まま娘" , "id":"19493"},' +
    '{"tag":"Deepthroat / イラマチオ Irrumatio, Throatfuck, Facefuck" , "id":"13211"},' +
    '{"tag":"Defloration / 処女喪失" , "id":"470"},' +
    '{"tag":"Devil / 悪魔 Demon" , "id":"4555"},' +
    '{"tag":"Diaper / オムツ" , "id":"2501"},' +
    '{"tag":"Dirty Old Man / 汚いおっさん" , "id":"11705"},' +
    '{"tag":"Dog Ears / 犬耳 Inumimi" , "id":"1685"},' +
    '{"tag":"Dog Girl / 犬娘 Wolf Girl" , "id":"12796"},' +
    '{"tag":"Dojikko / ドジっ子 Clumsy Girl, ドジっ娘" , "id":"12630"},' +
    '{"tag":"Doll / 人形" , "id":"6310"},' +
    '{"tag":"Double Penetration / 二穴ファック DP" , "id":"331"},' +
    '{"tag":"Drugs / 麻薬 Narcotics, Aphrodisiac" , "id":"3595"},' +
    '{"tag":"Drunk / 酔っぱらい Alcohol intoxication" , "id":"12823"},' +
    '{"tag":"Egg Laying / 産卵 Oviposition" , "id":"18617"},' +
    '{"tag":"Elder Sister / 姉 Big Sister, Onee-chan, Nee-chan, Nee-san" , "id":"1736"},' +
    '{"tag":"Elf / エルフ" , "id":"1997"},' +
    '{"tag":"Enema / 浣腸 Clyster" , "id":"12576"},' +
    '{"tag":"Exhibitionism / 露出症" , "id":"7833"},' +
    '{"tag":"Eyepatch / 眼帯" , "id":"16219"},' +
    '{"tag":"Face Sitting / 顔面騎乗" , "id":"5175"},' +
    '{"tag":"Fairy / 妖精" , "id":"3774"},' +
    '{"tag":"Femdom / 女性支配・女王様・ドミナ" , "id":"3126"},' +
    '{"tag":"Fingering / 指挿入" , "id":"323"},' +
    '{"tag":"Fisting / フィストファック" , "id":"1994"},' +
    '{"tag":"Foot Fetish / 足フェチ" , "id":"2506"},' +
    '{"tag":"Footjob / 足コキ 足こき, Ashikoki" , "id":"2503"},' +
    '{"tag":"Fox Ears / 狐耳 Kitsunemimi" , "id":"2317"},' +
    '{"tag":"Fox Girl / 狐娘 Kitsune" , "id":"12799"},' +
    '{"tag":"Freckles / そばかす Ephelis" , "id":"16268"},' +
    '{"tag":"Frotting / 兜合わせ Penis fencing, Dickrubbing, Helmet fit, Frot, Penis rubbing" , "id":"16128"},' +
    '{"tag":"Full Color / フルカラー Full Colour" , "id":"201"},' +
    '{"tag":"Fundoshi / 褌 Loincloth" , "id":"12636"},' +
    '{"tag":"Furry / 獣人" , "id":"3337"},' +
    '{"tag":"Futa on Male / ふた×男 Futanari on Man, Futa X Male, Shemale on Man, Futanari on Male" , "id":"18004"},' +
    '{"tag":"Futanari / ふたなり Futa, Dickgirl, Hermaphrodite" , "id":"330"},' +
    '{"tag":"Futanari on Futanari / ふたなり上ふたなり Futa on Futa, Futa X Futa, Dickgirl on Dickgirl, ふた×ふた" , "id":"19526"},' +
    '{"tag":"Gangbang / 一人対多人数" , "id":"2314"},' +
    '{"tag":"Gender Bender / ジェンダーベンダー Genderswap" , "id":"9960"},' +
    '{"tag":"Ghost / 幽霊 Yurei, Spirit" , "id":"13113"},' +
    '{"tag":"Giantess / 大女" , "id":"16270"},' +
    '{"tag":"Gokkun / ゴックン" , "id":"10317"},' +
    '{"tag":"Gothic / ゴシック Victorian" , "id":"16267"},' +
    '{"tag":"Group Sex / グループセックス Orgy" , "id":"3360"},' +
    '{"tag":"Guro / グロテスク Grotesque, Gore" , "id":"1450"},' +
    '{"tag":"Gyaru / ギャル Ganguro, ガングロ, Yamanba, ヤマンバ, Manba, マンバ, Kogyaru, コギャル" , "id":"12246"},' +
    '{"tag":"Hairjob / 髪コキ hair-job" , "id":"9164"},' +
    '{"tag":"Hairy Armpits / 脇毛" , "id":"13589"},' +
    '{"tag":"Handjob / 手コキ" , "id":"13770"},' +
    '{"tag":"Happy Sex / ハッピーセックス Love" , "id":"4139"},' +
    '{"tag":"Harem / ハーレム ハレム" , "id":"12438"},' +
    '{"tag":"Heterochromia / オッドアイ" , "id":"16179"},' +
    '{"tag":"Hotpants / ホットパンツ short shorts, shorts, cut-offs, daisy dukes" , "id":"19542"},' +
    '{"tag":"Huge Breasts / 爆乳 Bakunyuu" , "id":"1706"},' +
    '{"tag":"Huge Penis / 巨根 kyokon, big penis" , "id":"1355"},' +
    '{"tag":"Hypnosis / 催眠" , "id":"6311"},' +
    '{"tag":"Idol / アイドル" , "id":"3288"},' +
    '{"tag":"Imouto / 妹 Younger Sister" , "id":"3773"},' +
    '{"tag":"Impregnation / 受精 Fertilization" , "id":"5141"},' +
    '{"tag":"Incest / 近親姦" , "id":"320"},' +
    '{"tag":"Inverted Nipples / 陥没乳首" , "id":"4197"},' +
    '{"tag":"Kimono / 着物" , "id":"7701"},' +
    '{"tag":"Kunoichi / くノ一 Female Ninja" , "id":"13249"},' +
    '{"tag":"Kuudere / クウデレ Coodere, Emotionless, Cool" , "id":"19522"},' +
    '{"tag":"Lactation / 母乳" , "id":"3278"},' +
    '{"tag":"Lamia / ラミア Snake Girl" , "id":"20985"},' +
    '{"tag":"Large Breasts / 巨乳 Kyonyuu" , "id":"1705"},' +
    '{"tag":"Licking / ペロペロ" , "id":"10603"},' +
    '{"tag":"Lingerie / ランジェリー" , "id":"10050"},' +
    '{"tag":"Loli / ロリ Lolicon, ロリコン" , "id":"200"},' +
    '{"tag":"Lowleg / ローレグ" , "id":"3370"},' +
    '{"tag":"Maebari / 前貼り" , "id":"16142"},' +
    '{"tag":"Magical Girl / 魔法少女 Mahou Shoujo" , "id":"1680"},' +
    '{"tag":"Maid / メイド" , "id":"505"},' +
    '{"tag":"Maledom / 男性支配・マスター Male dominance" , "id":"3127"},' +
    '{"tag":"Masturbation / 自慰・性器愛撫" , "id":"2497"},' +
    '{"tag":"Megane / 眼鏡 Glasses, Meganekko, 眼鏡っ娘" , "id":"202"},' +
    '{"tag":"Menstruation / 月経 Period, Gekkei" , "id":"19518"},' +
    '{"tag":"Mermaid / 人魚" , "id":"10298"},' +
    '{"tag":"Miko / 巫女 Shrine Maiden, Priestess" , "id":"2328"},' +
    '{"tag":"MILF / 熟女 Jukujo, Mature Woman, Housewife" , "id":"3647"},' +
    '{"tag":"Military Uniform / ミリタリー制服" , "id":"12741"},' +
    '{"tag":"Mind Break / 調教 Corruption, Mindbreak" , "id":"2466"},' +
    '{"tag":"Mind Control / 洗脳" , "id":"1981"},' +
    '{"tag":"Monster / モンスター 怪物" , "id":"14182"},' +
    '{"tag":"Monster Girl / モンスター娘 モン娘, もんすたーむすめ, Monmusu" , "id":"10978"},' +
    '{"tag":"Mother / 母 Mom, Stepmother, Okaa-san" , "id":"2326"},' +
    '{"tag":"Mouth Gag / 口枷" , "id":"2821"},' +
    '{"tag":"Multiple Breasts / 複乳" , "id":"5091"},' +
    '{"tag":"Multiple Insertion / 複数挿入" , "id":"14722"},' +
    '{"tag":"Multiple Penises / 複根" , "id":"5092"},' +
    '{"tag":"Muscle / 筋肉" , "id":"8480"},' +
    '{"tag":"Naked Apron / 裸エプロン" , "id":"2820"},' +
    '{"tag":"Netorare / 寝取られ NTR" , "id":"471"},' +
    '{"tag":"Netori / 寝取り" , "id":"16636"},' +
    '{"tag":"Non-H" , "id":"9"},' +
    '{"tag":"Nun / 修道女" , "id":"4009"},' +
    '{"tag":"Nurse / ナース" , "id":"3600"},' +
    '{"tag":"Nyotaimori / 女体盛り Body sushi" , "id":"12375"},' +
    '{"tag":"Office Lady / オフィスレディー OL, オーエル" , "id":"2465"},' +
    '{"tag":"Onahole / オナホール" , "id":"14199"},' +
    '{"tag":"Onsen / 温泉 Hot Spring, Hot Spa, Sentou, Public Bath, 銭湯" , "id":"6097"},' +
    '{"tag":"Oppai Loli / ロリ巨乳 ろりきょにゅう" , "id":"10625"},' +
    '{"tag":"Otouto / 弟 Little Brother" , "id":"13329"},' +
    '{"tag":"Paizuri / パイズリ Mammary Intercourse, Titjob, Titfuck" , "id":"2496"},' +
    '{"tag":"Pajamas / パジャマ Pyjamas" , "id":"19545"},' +
    '{"tag":"Pantyhose / パンスト Tights" , "id":"5149"},' +
    '{"tag":"Pegging / ペギング" , "id":"18007"},' +
    '{"tag":"Pet Girl / ペット少女" , "id":"1993"},' +
    '{"tag":"Pettanko / ぺったんこ Hinnyuu, 貧乳, Binyuu, 微乳, Flat Chest, Small Breasts" , "id":"1700"},' +
    '{"tag":"Phimosis / 包茎" , "id":"6578"},' +
    '{"tag":"Piercings / ピアシング" , "id":"3601"},' +
    '{"tag":"Police Uniform / 警察官の制服" , "id":"19502"},' +
    '{"tag":"Pregnant / 妊娠" , "id":"1986"},' +
    '{"tag":"Princess / 王女 Hime" , "id":"19494"},' +
    '{"tag":"Prostitution / 売春" , "id":"2498"},' +
    '{"tag":"Pubic Hair / 陰毛" , "id":"9891"},' +
    '{"tag":"Race Queen / レースクイーン Pit Babe" , "id":"6312"},' +
    '{"tag":"Rape / 強姦 Forced Sex" , "id":"333"},' +
    '{"tag":"Reverse Rape / 逆レイプ" , "id":"9825"},' +
    '{"tag":"Robot Girl / ロボ娘 Robo Musume, Android, Cyborg, アンドロイド, サイボーグ" , "id":"9935"},' +
    '{"tag":"Scat / スカトロ Defecation, Shit, Poop, Feces, Crap" , "id":"1689"},' +
    '{"tag":"School Swimsuit / スクール水着 Sukumizu, スク水, School Mizugi, Sukuuru Mizugi, スクールみずぎ" , "id":"321"},' +
    '{"tag":"School Uniform / 学生服" , "id":"4869"},' +
    '{"tag":"Sex Toys / 性具 大人のおもちゃ" , "id":"3287"},' +
    '{"tag":"Nipple Fuck / 乳首ファック Nipple Insertion, Nipple Penetration, 乳首に挿入" , "id":"12460"},' +
    '{"tag":"Shemale / ニューハーフ Newhalf" , "id":"16137"},' +
    '{"tag":"Shimapan / 縞パン Striped Panties, Shima-Pantsu, 縞パンツ" , "id":"19141"},' +
    '{"tag":"Shota / ショタ Shotacon, ショタコン" , "id":"3587"},' +
    '{"tag":"Sixty-Nine / シックスナイン 69" , "id":"5176"},' +
    '{"tag":"Slave / 奴隷 Sex Slave, 性奴隷" , "id":"4135"},' +
    '{"tag":"Sleeping / 寝ている" , "id":"6781"},' +
    '{"tag":"Slime Girl / スライム娘 すらいむむすめ" , "id":"10426"},' +
    '{"tag":"Small Penis / 短小 小さなペニス, Tiny Penis, Little Penis, Micropenis" , "id":"17088"},' +
    '{"tag":"Smegma / 恥垢 Dick Cheese" , "id":"15022"},' +
    '{"tag":"Spanking / スパンキング" , "id":"14001"},' +
    '{"tag":"Spats / スパッツ Thigh Short Pant, Bike Shorts" , "id":"14555"},' +
    '{"tag":"Spitroast / 串刺し3P" , "id":"13309"},' +
    '{"tag":"Squirting / 潮吹き Female Ejaculation" , "id":"14415"},' +
    '{"tag":"Stalking / ストーキング Stalker, ストーカー" , "id":"14352"},' +
    '{"tag":"Stockings / ストッキング Thigh-highs, Thighhighs, ニーソックス, ニーソ, Over Knee Socks, オーバーニー" , "id":"15124"},' +
    '{"tag":"Stomach Bulge / ボコォ Stomach Deformation, Distention" , "id":"13482"},' +
    '{"tag":"Straight Shota / ストレート・ショタ" , "id":"329"},' +
    '{"tag":"Strap-on / ペニスバンド" , "id":"4116"},' +
    '{"tag":"Succubus / サキュバス" , "id":"3453"},' +
    '{"tag":"Sumata / 素股 Thigh Sex, Bare Crotch, Grinding, Intercrural Sex" , "id":"4262"},' +
    '{"tag":"Suppository / 坐剤 ざやく" , "id":"19520"},' +
    '{"tag":"Swimsuit / 水着 Mizugi, みずぎ, Bathing-suit" , "id":"350"},' +
    '{"tag":"Symbol Shaped Pupils / シンボル目 Eye Shapes, Eye Stars, Eye Hearts, Heart Shaped Pupils, Starry Eyes" , "id":"19500"},' +
    '{"tag":"Tan / 日焼け Suntan" , "id":"5965"},' +
    '{"tag":"Tanlines / 日焼けライン" , "id":"5966"},' +
    '{"tag":"Tattoo / 入れ墨" , "id":"18601"},' +
    '{"tag":"Teacher / 教師 Sensei, Tutor" , "id":"2315"},' +
    '{"tag":"Tentacles / 触手" , "id":"324"},' +
    '{"tag":"Time Stop / 時間停止" , "id":"13870"},' +
    '{"tag":"Toddler / 幼児 Toddlercon" , "id":"6331"},' +
    '{"tag":"Tomboy / お転婆" , "id":"9759"},' +
    '{"tag":"Torture / 拷問 Abuse, Torment" , "id":"12109"},' +
    '{"tag":"Transparent Clothing / 透ける衣服 Transparent, 透け, See-through, シースルー, Wet Clothes, 濡れた服, Sheer" , "id":"14359"},' +
    '{"tag":"Trap / 男の娘" , "id":"5295"},' +
    '{"tag":"Tribadism / 貝合わせ tribbing" , "id":"4543"},' +
    '{"tag":"Tsundere / ツンデレ" , "id":"1679"},' +
    '{"tag":"Twins / 双子" , "id":"3382"},' +
    '{"tag":"Twintails / ツインテール" , "id":"12250"},' +
    '{"tag":"Uncensored / 無修正 Decensored" , "id":"10"},' +
    '{"tag":"Urethra Insertion / 尿道挿入 Sounding" , "id":"22341"},' +
    '{"tag":"Vampire / 吸血鬼" , "id":"4215"},' +
    '{"tag":"Vomit / 嘔吐 Puke, Throwing up" , "id":"16559"},' +
    '{"tag":"Vore / 丸呑み Vorarephilia, 丸呑みフェティシズム" , "id":"17137"},' +
    '{"tag":"Voyeurism / 覗き" , "id":"3364"},' +
    '{"tag":"Waitress / ウェートレス" , "id":"1363"},' +
    '{"tag":"Wakamezake / わかめ酒 Seaweed Sake" , "id":"12658"},' +
    '{"tag":"Watersports / 尿 Golden Shower, Urolagnia, Peeing, Urination, Omorashi, お漏らし" , "id":"1371"},' +
    '{"tag":"Widow / 未亡人" , "id":"19495"},' +
    '{"tag":"Witch / 魔女 魔女っ子, Majokko" , "id":"3652"},' +
    '{"tag":"X-ray / X線 Cross-Section, 断面図, Xray" , "id":"4551"},' +
    '{"tag":"Yandere / ヤンデレ" , "id":"8315"},' +
    '{"tag":"Yaoi / やおい Gay, Boys Love, BL" , "id":"2320"},' +
    '{"tag":"Yukata / 浴衣" , "id":"3363"},' +
    '{"tag":"Yuri / 百合 Lesbian, Girls Love" , "id":"198"},' +
    '{"tag":"Zombie / ゾンビ" , "id":"9934"}]}';

var spamlinks = '{"links": [' +
    '{"link":"www.masterwallcz.blogspot.com/"},' +
    '{"link":"www.epicwallcz.blogspot.com/"},' +
    '{"link":"www.sh.st/srUhM"},' +
    '{"link":"www.asmhentai.com"},' +
    '{"link":"www.spankjizz.com/hentai.html"},' +
    '{"link":"www.sh.st/axJJ4"},' +
    '{"link":"www.sh.st/kKxjS"},' +
    '{"link":"www.goo.gl/XwdpdM"},' +
    '{"link":"www.vc-models.com"},' +
    '{"link":"www.sh.st/xE8Fe"}]}';

var spamuser = '{"users": [' +
    '{"user":"DomBB" , "link":"http://forum.pururin.com/index.php?action=profile;u=7342"},' +
    '{"user":"cbyj223" , "link":"http://forum.pururin.com/index.php?action=profile;u=13395"},' +
    '{"user":"Vesta" , "link":"http://forum.pururin.com/index.php?action=profile;u=14130"},' +
    '{"user":"danle" , "link":"http://forum.pururin.com/index.php?action=profile;u=11513"},' +
    '{"user":"Animator" , "link":"http://forum.pururin.com/index.php?action=profile;u=14350"},' +
    '{"user":"pornoxyu" , "link":"http://forum.pururin.com/index.php?action=profile;u=8288"},' +
    '{"user":"werthrf" , "link":"http://forum.pururin.com/index.php?action=profile;u=11191"},' +
    '{"user":"djmichu55555" , "link":"http://forum.pururin.com/index.php?action=profile;u=13743"},' +
    '{"user":"KirbyGrass" , "link":"http://forum.pururin.com/index.php?action=profile;u=13784"},' +
    '{"user":"BrandieBlo" , "link":"http://forum.pururin.com/index.php?action=profile;u=13615"},' +
    '{"user":"DarciHoski" , "link":"http://forum.pururin.com/index.php?action=profile;u=13682"},' +
    '{"user":"gringo" , "link":"http://forum.pururin.com/index.php?action=profile;u=11710"},' +
    '{"user":"k" , "link":""},' +
    '{"user":"Check this out!" , "link":""},' +
    '{"user":"mentinos" , "link":"http://forum.pururin.com/index.php?action=profile;u=14710"},' +
    '{"user":"veh" , "link":"http://forum.pururin.com/index.php?action=profile;u=15051"},' +
    '{"user":"example" , "link":"http://forum.pururin.com/index.php?action=profile;u=userid"}]}';



//how do i get my json file out of here?
var sl = JSON.parse(spamlinks);
var su = JSON.parse(spamuser);
var st = JSON.parse(tags);
var comment, post, poster, spamnb, visible, recent;

spamnb = 0;
comment = document.getElementsByClassName("comment-box");
post = document.getElementsByClassName("subject");
poster = document.getElementsByClassName("poster");
recent = document.getElementsByClassName("core_posts");

function compareStrings(a, b){
    var finalstring = "";
    var originalstring = "";
    var originalword = "";
    var differentword = "";
    var nothing = 0;
    var n = 0;
    var trigger = 0;
    if(a == b){
        nothing = 1;
    }
    if(a == "-" && b != "-"){
        originalstring = "<a class = red>-</a>";
        finalstring = "<a class = green>" + b + "</a>";
    }else if(a != "-" && b == "-"){
        originalstring = "<a class = red>" + a + "</a>";
        finalstring = "<a class = green>" + b + "</a>";
    }else{        
        for(x = 0; x <= a.length; x++){
            trigger ++;
            if(trigger == 2000){
                console.log("triggered");
                break;
            }
            if(a.charAt(x) == b.charAt(x + n)){
                finalstring += a.charAt(x);
                originalstring += a.charAt(x);
            }else{
                originalword = "";
                differentword = ""; 
                if(a.charAt(x) == "<"){
                    for(y = x; y <= a.length; y++){
                        if(a.charAt(y) == ">"){
                            originalword += " ";
                            break;
                        }else{
                            originalword += a.charAt(y);
                        }       
                    }
                }else{
                    for(y = x; y <= a.length; y++){
                        if(a.charAt(y) == " "){
                            originalword += " ";
                            break;
                        }else{
                            originalword += a.charAt(y);
                        }
                    }  
                }
                if(b.indexOf(originalword, x + n) > 0 && originalword !== "" && originalword !== " "){
                    for (y = x + n; y < b.indexOf(originalword, x + n); y++){
                        differentword += b.charAt(y);
                    }   
                    n = b.indexOf(originalword, x + n) - x;   
                    finalstring += "<a class = green>" + differentword + "</a>";
                    x--;
                }else{                
                    originalstring += "<a class = red>" + originalword + "</a>";
                    x += originalword.length - 1; 
                    n -= originalword.length;
                }   
                if(originalword === ""){
                    break;   
                }
            }

        }
        if(b.charAt(a.length + n + 1) !== ""){           
            finalstring += "<a class = green>" +  b.slice(x + n + 1) + "</a>";
        }
        if(finalstring === ""){finalstring = "<a class = green>" +  b.charAt(0) + "</a>";}
    }
    return [finalstring, originalstring, nothing];    

}

function hideComment(i){
    //console.log(String(comment[i].className).slice(0,6) + " is now hidden:" + comment[i].children[1].children[1].innerHTML);
    comment[i].className = String(comment[i].className) + " comment-bad hidden #spam";
    comment[i].style.display = 'none';    
}

function sort(object) {
    var entry = document.getElementsByClassName("table-data")[0].children[1].children;
    var visible = 0;
    for (var i = 0; i < entry.length; i++) {
        if ( object == "New Tag" && ( String(entry[i].children[1].innerHTML).indexOf("[Artist]") > 0 || String(entry[i].children[1].innerHTML).indexOf("[Circle]") > 0 || String(entry[i].children[1].innerHTML).indexOf("[Convention]") > 0 ) || object == "Upload" && entry[i].children[0].innerHTML == object || object == "all") {
            entry[i].style.display = 'table-row'; 
            entry[i].className = "";
            visible ++;
        }else{
            entry[i].style.display = 'none'; 
            entry[i].className = "hidden";
        }
    }
    document.getElementById("visiblecontributions").innerHTML = "<h3>visible contributions: </h3>" + visible;
}

function SortByDate (a,b)
{
    var a = new Date($(a).attr("data-date")),
        b = new Date($(b).attr("data-date"));
    return (b.getTime() - a.getTime());
}

function SortByRank(a, b)
{
    var a = parseInt($(a).attr("oldrank")),
        b = parseInt($(b).attr("oldrank"));
    return b-a;
}

function rank(order) {
    document.getElementsByClassName("table-data")[0].setAttribute("id", "pending");
    //--- Get the table we want to sort.
    var jTableToSort    = $("table#pending");

    //--- Get the rows to sort, but skip the first row, since it contains column titles.
    var jRowsToSort     = jTableToSort.find ("tr:gt(0)");
    if(order == "submit"){
        //--- Sort the rows in place.
        jRowsToSort.sort(SortByDate).each(function(){jTableToSort.prepend(this);})
    }else{
        jRowsToSort.sort(SortByRank).each(function(){jTableToSort.prepend(this);})
    }
}

function show() {
    if (visible === 0) {
        visible = 1;
        if(String(window.location.href).slice(25,40) == String("index.php/board") || String(window.location.href).slice(25,40) == String("index.php/topic")){
            hdnli0.innerHTML = btnhide;
            hdnli1.innerHTML = btnhide;
        }
        for (var i = 0; i <= spamnb; i++) {
            if(window.location.hostname == "forum.pururin.com"){document.getElementsByClassName("#spam")[i].style.display = "";}
            if(window.location.hostname != "forum.pururin.com"){document.getElementsByClassName("comment-bad hidden")[i].style.display = "block";}
        }
    }
    if (visible === 1) {
        visible = 0;
        if(String(window.location.href).slice(25,40) == String("index.php/board") || String(window.location.href).slice(25,40) == String("index.php/topic")){
            hdnli0.innerHTML = btnshow;
            hdnli1.innerHTML = btnshow;
        }
        for (var i = 0; i <= spamnb; i++) {
            if(window.location.hostname == "forum.pururin.com"){document.getElementsByClassName("#spam")[i].style.display = "none";}
            if(window.location.hostname != "forum.pururin.com"){document.getElementsByClassName("comment-bad hidden")[i].style.display = "none";}
        }

    }
}

if(window.location.hostname != "forum.pururin.com") {
    if(document.getElementsByClassName("cf-error-details cf-error-522").length > 0) {
document.getElementsByClassName("cf-error-details cf-error-522")[0].innerHTML = '<iframe width="560" height="315" src="https://www.youtube.com/embed/VEJCIeUkA2Q?rel=0&amp&start=277&autoplay=1;controls=0" frameborder="0" allowfullscreen></iframe>';
    }
    if(String(window.location.href).slice(19,25) == String("finish") && document.getElementsByClassName("bold").length > 0){ 
        setInterval(function(){
            var oldtag = String(document.getElementsByClassName("bold")[1].innerHTML)
            for (var i = 0; i < st.tags.length; i++) {
                if(String(st.tags[i].tag).indexOf(oldtag.slice(0,oldtag.indexOf(" "))) > -1){                
                    document.getElementsByClassName("bold")[1].innerHTML = "<a href='/browse/" + st.tags[i].id + "/10/" + oldtag.slice(0,oldtag.indexOf(' ')) + ".html' target='_blank'>" + oldtag + "</a>";
                }
            }
        }, 100);
    }
    if(String(window.location.href).slice(19,43) == String("contribute/contributions")){ 
        var rows = document.getElementsByClassName("table-data")[0].children[1].children;
        var oldrank = [];
        var d = [];
        for (var i = 0; i < rows.length; i++) {
            rows[i].setAttribute("oldrank", i);
            d[i] = new Date(String(rows[i].children[3].innerHTML).replace(",","").replace(" at",""));
            rows[i].setAttribute("data-date", d[i]);
        }
        document.getElementsByClassName("block")[1].innerHTML =  document.getElementsByClassName("block")[1].innerHTML + "Important: <button id='all' class='btn btn-gray comment-post'><i class='icon-eye-open'></i> <span>All</span></button> | <button id='uploads' class='btn btn-gray comment-post'><i class='icon-upload'></i> <span>Uploads</span></button> | <button id='tags' class='btn btn-gray comment-post'><i class='icon-tags'></i> <span>Tags</span></button><br>Sort by: <button id='sort-submit' class='btn btn-gray comment-post'><i class=''></i> <span>Submit date</span></button> | <button id='sort-update' class='btn btn-gray comment-post'><i class=''></i><span>Last update</span></button><br><span class='label label-warning' id='visiblecontributions'></span>";
        document.getElementById("uploads").onclick=function(){sort('Upload');}
        document.getElementById("all").onclick=function(){sort('all');}
        document.getElementById("tags").onclick=function(){sort('New Tag');}
        document.getElementById("sort-submit").onclick=function(){rank('submit');}
        document.getElementById("sort-update").onclick=function(){rank('update');}
    }
    if(String(window.location.href).slice(19,34) == String("contribute/view")){ 
        if(document.getElementsByClassName("gallery-cover").length > 0){
            var hentaititle = String(document.getElementsByClassName("otitle")[0].innerHTML).replace('"'," ").replace("'"," ").replace(" ","+");
            document.getElementsByClassName("otitle")[0].innerHTML += "<a href='http://exhentai.org/?f_search=" + hentaititle + "' id='upload-search-title' target='_blank' style='float:right'><i class='icon-search'></i><span></span></a>";
        }  
        if(String(document.getElementsByTagName("h1")[0].innerHTML).slice(0,8) == "Edit for"){       
            var nb = document.getElementsByClassName("js-diff compare-changed").length;

            for(var i = 0; i < nb; i++){
                document.getElementsByClassName("js-diff compare-changed")[0].previousElementSibling.previousElementSibling.style.color = "orange";
                document.getElementsByClassName("js-diff compare-changed")[0].className = "js-diff";
            }

            if(document.getElementsByClassName("table-info")[0].children[0].children[document.getElementsByClassName("table-info")[0].children[0].children.length - 2].children[1].innerHTML != "-"){
                document.getElementsByClassName("table-info")[0].children[0].children[document.getElementsByClassName("table-info")[0].children[0].children.length - 2].children[1].style.color = "green";
                //document.getElementsByClassName("table-compare")[0].style.color = "red";
            }
            if(nb !== 0){
                for(i = 0; i < 5; i++){
                    var comparison = compareStrings(String(document.getElementById("compare_" + i).innerHTML), String(document.getElementsByClassName("js-diff")[i].innerHTML));
                    document.getElementById("compare_" + i).innerHTML = comparison[1];
                    document.getElementsByClassName("js-diff")[i].innerHTML = comparison[0];
                    if(comparison[2] === 1){
                        document.getElementById("compare_" + i).previousElementSibling.style.color = "white";
                    }
                }
            }
        } 
    }

    if(String(window.location.href).slice(19,27) == String("comments")){
        for (var i = 0; i < comment.length; i++) {
            if(i > 0 && comment[i].children[0].children[1].innerHTML == comment[i-1].children[0].children[1].innerHTML && String(comment[i].children[0].children[0].children[1].getAttribute("href")).slice(0, comment[i].children[0].children[0].children[1].getAttribute("href").length - 8) == String(comment[i-1].children[0].children[0].children[1].getAttribute("href")).slice(0, comment[i-1].children[0].children[0].children[1].getAttribute("href").length - 8)) {
                hideComment(i);
            }
            for (var m = 0; m < su.users.length; m++) {
                if(comment[i].children[0].children[1].innerHTML == su.users[m].user) {
                    hideComment(i);
                }
            }

            for (var m = 0; m < sl.links.length; m++) {
                if(String(comment[i].children[0].children[1].innerHTML).search(sl.links[m].link) > -1) {
                    hideComment(i);
                }
            }
        }
        visible = 0;
        spamnb = document.getElementsByClassName("comment-box comment-bad hidden").length;
        document.getElementsByClassName("content")[0].children[0].innerHTML = String(document.getElementsByClassName("content")[0].children[0].innerHTML).slice(0,35) + " (<a id='showspam' href='#' class='comment-toggleHidden'>" + spamnb + ' hidden</a>)';
        document.getElementById("showspam").onclick=function(){show();}
        console.log(spamnb + " comments hidden");
    }else if(String(document.getElementsByClassName("comment-list-header")[0].innerHTML) != "No comments yet"){
        for (var i = 0; i < comment.length; i++) {
            if(i > 0 && comment[i].children[1].children[1].innerHTML == comment[i-1].children[1].children[1].innerHTML) {
                hideComment(i);
            }
            for (var m = 0; m < su.users.length; m++) {
                if(comment[i].children[1].children[0].children[0].innerHTML == su.users[m].user) {
                    hideComment(i);
                }
            }

            for (var m = 0; m < sl.links.length; m++) {
                if(String(comment[i].children[1].children[1].innerHTML).search(sl.links[m].link) > -1) {
                    hideComment(i);
                }
            }
        }
        visible = 0;
        spamnb = document.getElementsByClassName("comment-box comment-bad hidden").length;
        document.getElementsByClassName("comment-toggleHidden")[0].innerHTML = spamnb + ' hidden';
        console.log(spamnb + " comments hidden");
    }
}
if(window.location.hostname == "forum.pururin.com" && String(window.location.href).slice(25,55) != String("index.php?action=unreadreplies") && String(window.location.href).slice(0,49) != String("http://forum.pururin.com/index.php?action=profile")){    
    if(String(window.location.href).slice(25,40) == String("index.php/board") || String(window.location.href).slice(25,48) == String("index.php?action=unread") || String(window.location.href).slice(25,40) == String("index.php/topic")) {
        for (var i = 0; i < post.length; i++) {
            for (var n = 0; n < su.users.length; n++) {
                if(String(window.location.href).slice(25,48) != String("index.php?action=unread") && String(window.location.href).slice(25,40) != String("index.php/topic")) {
                    if (post[i].children[0].lastElementChild.children[0].getAttribute("href") == su.users[n].link){
                        post[i].parentNode.style.display = "none";
                        post[i].parentNode.setAttribute("class", "#spam");
                        spamnb ++;
                        visible = 0;
                        console.log("post hidden from " + su.users[n].user);
                    }
                }else{
                    if (post[i].children[0].children[2].children[0].children[0].getAttribute("href") == su.users[n].link){
                        post[i].parentNode.style.display = "none";
                        post[i].parentNode.setAttribute("class", "#spam");
                        spamnb ++;
                        visible = 0;
                        console.log("post hidden from " + su.users[n].user);
                    }
                }
            }
        }

        for (var i = 0; i < poster.length; i++) {
            if(poster[i].children[1].children[0].innerHTML != "Guest"){
                for (var n = 0; n < su.users.length; n++) {
                    if (poster[i].children[0].children[0].getAttribute("href") == su.users[n].link){
                        poster[i].parentNode.parentNode.style.display = "none";
                        poster[i].parentNode.parentNode.className += " #spam";
                        spamnb ++;
                        visible = 0;
                        console.log("post hidden from " + su.users[n].user);
                    }
                }
            }
        }

        var btnshow = '<a class=""><span class= "#hide">show (' + spamnb + ')</span></a>';
        var btnhide = '<a class="active"><span class= "#hide">hide (' + spamnb + ')</span></a>';

        var hdnli0 = document.createElement("li");
        document.getElementsByClassName("buttonlist align_right")[0].children[0].appendChild(hdnli0).innerHTML = btnshow;
        hdnli0.onclick = show;

        var hdnli1 = document.createElement("li");
        document.getElementsByClassName("buttonlist align_right")[1].children[0].appendChild(hdnli1).innerHTML = btnshow;
        hdnli1.onclick = show;

    }else{
        for (var i = 0; i < recent.length; i++) {
            for (var n = 0; n < su.users.length; n++) {
                if (recent[i].children[1].children[1].children[1].children[0].children[0].getAttribute("href") == su.users[n].link){
                    recent[i].style.display = "none";
                    recent[i].className += " #spam";
                    visible = 0;
                    spamnb ++;
                    console.log("post hidden from " + su.users[n].user);                    
                }
                document.getElementsByClassName("ie6_header floatleft")[0].innerHTML = String(document.getElementsByClassName("ie6_header floatleft")[0].innerHTML).slice(0,105) + "   " + "(<a id='showspam' href='#' class='red' color='red'>" + spamnb + ' posts hidden</a>)';
            }           
            document.getElementById("showspam").onclick=function(){show();}
        }
        console.log(spamnb + " posts hidden");
    }  
}
