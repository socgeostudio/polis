// Autorská práva (C) 2012-současnost, Autoři. Tento program je svobodný software: můžete jej redistribuovat a/nebo upravit za podmínek GNU Affero General Public License, verze 3, jak ji publikovala Free Software Foundation. Tento program je distribuován v naději, že bude užitečný, ale BEZ JAKÉKOLIV ZÁRUKY; dokonce bez implicitní záruky OBCHODOVATELNOSTI nebo VHODNOSTI PRO URČITÝ ÚČEL. Podrobnosti naleznete v GNU Affero General Public License. Spolu s tímto programem byste měli obdržet kopii GNU Affero General Public License. Pokud ne, podívejte se na <http://www.gnu.org/licenses/>.

var s = {};

s.agree = "Souhlasím";
s.disagree = "Nesouhlasím";
s.pass = "Přeskočit";

s.importantCheckbox = "Tento komentář je důležitý";
s.howImportantPrompt = "Jak důležitý je tento výrok?";
s.howImportantLow = "Málo";
s.howImportantMedium = "Středně";
s.howImportantHigh = "Velmi";

s.modSpam = "Spam";
s.modOffTopic = "Mimo téma";
s.modImportant = "Důležité";
s.modSubmitInitialState = "Přeskočit (nic z výše uvedeného), další výrok";
s.modSubmit = "Hotovo, další výrok";

s.x_wrote = "napsal/a:";
s.x_tweeted = "tweetnul/a:";
s.comments_remaining = "{{num_comments}} zbývajících";
s.comments_remaining2 = "{{num_comments}} zbývajících výroků";
s.group_123 = "Skupina:";
s.comment_123 = "Výrok:";
s.majorityOpinion = "Většinový názor";
s.majorityOpinionShort = "Většina";
s.info = "Info";
s.addPolisToYourSite = "<img style='height: 20px; margin: 0px 4px;' src='{{URL}}'/>";
s.privacy = "Soukromí";
s.TOS = "TOS";
s.writePrompt = "Sdílejte svůj názor či návrh na řešení...";
s.anonPerson = "Anonym";
s.helpWhatAmISeeingTitle = "Co vidím?";
s.helpWhatAmISeeing = "Lidé, kteří hlasují podobně, jsou sdružení do skupin. Klikněte na skupinu pro zobrazení jejich názorů a postojů.";
s.helpWhatDoIDoTitle = " Co mám udělat?";
s.helpWhatDoIDo = "Hlasujte o výrocích ostatních lidí kliknutím na 'souhlasím' nebo 'nesouhlasím'. Zapište svůj výrok nebo názor (držte se jedné myšlenky) a pozvěte své přátele do diskuse!";
s.writeCommentHelpText = "Chybí vám v diskusi vaše zkušenosti s problémem nebo návrhy na jeho řešení? Pokud ano, <b>přidejte je</b> do políčka níže.";
s.helpWriteListIntro = "Co dělá výrok dobrým?";
s.helpWriteListStandalone = "Samostatná myšlenka";
s.helpWriteListRaisNew = "Originální perspektiva, vaše zkušenosti nebo úhel pohledu na věc";
s.helpWriteListShort = "Jasný návrh a jeho stručné zdůvodnění (omezeno na 140 znaků)";
s.heresHowGroupVoted = "Takto hlasovala skupina {{GROUP_NUMBER}}:";
s.one_person = "{{x}} osoba";
s.x_people = "{{x}} osoby";
s.acrossAllPtpts = "Mezi všemi diskutujícími:";
s.xPtptsSawThisComment = " vidělo tento výrok";
s.xOfThoseAgreed = "z těchto diskutujících souhlasilo";
s.xOfthoseDisagreed = "z těchto diskutujících nesouhlasilo";
s.opinionGroups = "Názorové skupiny";
s.topComments = "Top výroky";
s.divisiveComments = "Rozdělující/polarizující výroky";
s.pctAgreed = "{{pct}}% Souhlasilo";
s.pctDisagreed = "{{pct}}% Nesouhlasilo";
s.pctAgreedLong = "{{pct}}% ze všech, kteří hlasovali o výroku {{comment_id}} souhlasilo.";
s.pctAgreedOfGroup = "{{pct}}% ze Skupiny {{group}} souhlasilo";
s.pctDisagreedOfGroup = "{{pct}}% ze Skupiny {{group}} nesouhlasilo";
s.pctDisagreedLong = "{{pct}}% ze všech, kteří hlasovali o výroku {{comment_id}} nesouhlasilo.";
s.pctAgreedOfGroupLong = "{{pct}}% z těch ve skupině {{group}}, kteří hlasovali o výroku {{comment_id}} souhlasilo.";
s.pctDisagreedOfGroupLong = "{{pct}}% z těch ve skupině {{group}}, kteří hlasovali o výroku {{comment_id}} nesouhlasilo.";
s.commentSent = "Výrok úspěšně odeslán! Vaš výrok uvidí pouze ostatní účastníci a mohou s ním souhlasit nebo nesouhlasit.";
s.commentSendFailed = "Došlo k chybě při odesílání vašeho výroku.";
s.commentSendFailedEmpty = "Došlo k chybě při odesílání vašeho výroku - Výrok by neměl být prázdný.";
s.commentSendFailedTooLong = "Došlo k chybě při odesílání vašeho výroku - Výrok je příliš dlouhý.";
s.commentSendFailedDuplicate = "Došlo k chybě při odesílání vašeho výroku - Identický výrok již existuje.";
s.commentErrorDuplicate = "Duplikát! Tento výrok již existuje.";
s.commentErrorConversationClosed = "Tato konverzace je již uzavřena. Další výroky nelze odesílat.";
s.commentIsEmpty = "Výrok je prázdný";
s.commentIsTooLong = "Výrok je příliš dlouhý";
s.hereIsNextStatement = "Váš hlas byl úspěšně zaznamenaný. Přejděte nahoru pro zobrazení dalšímu výroku.";

s.connectFacebook = "Propojit Facebook";
s.connectTwitter = "Propojit X (dříve Twitter)";
s.connectToPostPrompt = "Propojte váš profil, pro odeslání výroku. Na vaši časovou osu nebudeme přidávat žádné příspěvky.";
s.connectToVotePrompt = "Propojte váš profil, abyste mohli hlasovat. Na vaši časovou osu nebudeme přidávat žádné příspěvky.";
s.tip = "Tip:";
s.commentWritingTipsHintsHeader = "Tipy pro psaní výroků";
s.tipCharLimit = "Výroky jsou omezeny na {{char_limit}} znaků.";
s.tipCommentsRandom = "Prosím pamatujte, že výroky jsou zobrazovány náhodně. Vaše výroky jsou nezávislými komentáři a nepředstavují odpovědi na výroky a komentáře ostatních diskutujících.";
s.tipOneIdea = "Rozdělte dlouhé výroky obsahující více myšlenek. Ostatním to ulehčí hlasování o vašem výroku.";
s.tipNoQuestions = "Výroky by neměly být ve formě otázky. Účastníci budou hlasovat 'souhlasím' nebo 'nesouhlasím! s vaším výrokem.";
s.commentTooLongByChars = "Limit délky výroku překročen o {{CHARACTERS_COUNT}} znaků.";
s.notSentSinceDemo = "(not really, this is a demo)";
s.submitComment = "Sdílet";
s.tipStarred = "Označeno jako důležité.";
s.participantHelpWelcomeText = "Vítejte u nového druhu on-line diskuse - <em>hlasujte</em> o návrzích a výrocích ostatních lidí.";
s.participantHelpGroupsText = "Lidé, kteří hlasovali podobně <span style='font-weight: 700;'>jsou seskupeni v názorových skupinách.</span> Klikněte na skupinu, abyste viděli, jaké názory zastávají. <a style='font-weight: 700; cursor: pointer; text-decoration: underline' id='helpTextGroupsExpand'>...další</a>";
s.participantHelpGroupsNotYetText = "Vizualizace se zobrazí, jakmile 7 účastníků začne hlasovat";
s.helpWhatAreGroupsDetail = "<p>Už jste pravděpodobně viděli 'doporučené produkty' na Amazonu nebo 'doporučené filmy' na Netflixu. Každá z těchto služeb používá statistiku, aby seskupila uživatele, kteří kupují a sledují podobné věci, a poté jim ukáže, co tyto osoby koupily nebo sledovaly.</p> <p> Když uživatel hlasuje o výrocích, je seskupen s lidmi, kteří hlasovali jako on! Tyto skupiny můžete vidět níže. Každá je složena z lidí, kteří mají podobné názory. V každé konverzaci se dají objevit fascinující poznatky. Jděte do toho - klikněte na skupinu a podívejte se, co je spojuje a co dělá každou z nich jedinečnou! </p>";
s.socialConnectPrompt = "Připojte se, pokud chcete, aby se ve vizualizaci zobrazili přátelé a lidé, které sledujete.";
s.connectFbButton = "Připojit přes Facebook";
s.connectTwButton = "Připojit přes X (dříve Twitter)";
s.polis_err_reg_fb_verification_email_sent = "Zkontrolujte svůj e-mail, kam jsme vám zaslali ověřovací link, poté se vraťte zpět a můžete pokračovat.";
s.polis_err_reg_fb_verification_noemail_unverified = "Váš Facebook účet není ověřen. Ověřte prosím svou e-mailovou adresu s Facebookem, poté se vraťte zpět a pokračujte.";
s.showTranslationButton = "Aktivovat překlad od třetí strany";
s.hideTranslationButton = "Deaktivovat překlad";
s.thirdPartyTranslationDisclaimer = "Překlad poskytla třetí strana";

s.notificationsAlreadySubscribed = "Jste přihlášeni k odběru aktualizací této konverzace.";
s.notificationsGetNotified = "Dostávejte oznámení, pokud přibudou další výroky:";
s.notificationsEnterEmail = "Zadejte svou e-mailovou adresu, abyste byli informováni, když přijdou další výroky:";
s.labelEmail = "E-mail";
s.notificationsSubscribeButton = "Přihlásit se k odběru";
s.notificationsSubscribeErrorAlert = "Chyba při přihlášení";
s.noCommentsYet = "Zatím nejsou žádné komentáře nebo výroky.";
s.noCommentsYetSoWrite = "Začněte konverzaci přidáním komentáře nebo výroku.";
s.noCommentsYetSoInvite = "Začněte konverzaci pozváním dalších účastníků nebo přidáním komentáře či výroku.";
s.noCommentsYouVotedOnAll = "Hlasovali jste o všech komentářích nebo výrocích.";
s.noCommentsTryWritingOne = "Pokud schcete sdílet svůj názor, napište vlastní výrok.";
s.convIsClosed = "Tato konverzace je uzavřena.";
s.noMoreVotingAllowed = "Další hlasování není povoleno.";


s.topic_good_01 = "Co bychom měli udělat, abychom vyřešili daný problém?";
s.topic_good_01_reason = "otevřené téma, každý může mít názor nebo odpověď týkající se tohoto tématu";
s.topic_good_02 = "Co si myslíte o novém návrhu?";
s.topic_good_02_reason = "otevřené téma, každý může mít názor nebo odpověď týkající se tohoto tématu";
s.topic_good_03 = "Co může zpomalovat vaši produktivitu?";

s.topic_bad_01 = "všichni nahlaste svoji připravenost";
s.topic_bad_01_reason = "lidé z různých týmů budou hlasovat o výrocích, ale možná nebudou mít dostatečné znalosti pro sebejisté hlasování.";
s.topic_bad_02 = "jaké jsou naše překážky spuštění?";
s.topic_bad_02_reason = "";


module.exports = s;
