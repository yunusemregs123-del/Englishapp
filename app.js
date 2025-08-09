const sentences = [
  { eng: "Can you send me the report by tomorrow?", tr: "Raporu yarına kadar gönderebilir misin?" },
  { eng: "I have a meeting with the client at 3 PM.", tr: "Saat 3'te müşteriyle toplantım var." },
  { eng: "Please update the spreadsheet with the latest data.", tr: "Lütfen tabloyu en son verilerle güncelle." },
  { eng: "The market is very competitive these days.", tr: "Piyasa şu günlerde çok rekabetçi." },
  { eng: "Could you help me find the right product?", tr: "Doğru ürünü bulmama yardımcı olabilir misin?" },
  { eng: "The professor explained the concept very clearly.", tr: "Profesör konsepti çok net açıkladı." },
  { eng: "I need to finish this assignment before the deadline.", tr: "Bu ödevi son teslim tarihinden önce bitirmem gerekiyor." },
  { eng: "Don't forget to submit your timesheet today.", tr: "Bugün çalışma saatlerinizi teslim etmeyi unutmayın." },
  { eng: "We should schedule a team meeting next week.", tr: "Gelecek hafta bir ekip toplantısı planlamalıyız." },
  { eng: "The university library has a vast collection of books.", tr: "Üniversite kütüphanesinde geniş bir kitap koleksiyonu var." },
  { eng: "I'm looking for a job in the marketing department.", tr: "Pazarlama departmanında iş arıyorum." },
  { eng: "Please review the document and give me feedback.", tr: "Lütfen dokümanı inceleyip bana geri bildirim ver." },
  { eng: "The new software will improve our productivity.", tr: "Yeni yazılım verimliliğimizi artıracak." },
  { eng: "She submitted her thesis last month.", tr: "Geçen ay tezini teslim etti." },
  { eng: "We need to prepare for the upcoming conference.", tr: "Yaklaşan konferansa hazırlanmalıyız." },
  { eng: "Could you explain this concept in simpler terms?", tr: "Bu konsepti daha basit terimlerle açıklayabilir misin?" },
  { eng: "I’ll call you back after the meeting.", tr: "Toplantıdan sonra seni arayacağım." },
  { eng: "Have you checked the email I sent yesterday?", tr: "Dün gönderdiğim e-postayı kontrol ettin mi?" },
  { eng: "The deadline for the project is next Friday.", tr: "Projenin teslim tarihi gelecek cuma." },
  { eng: "We need to cut costs to increase profits.", tr: "Kârı artırmak için masrafları kısmamız gerekiyor." },
  { eng: "Can you provide the latest sales figures?", tr: "En son satış rakamlarını verebilir misin?" },
  { eng: "The team is working hard to meet the targets.", tr: "Ekip hedeflere ulaşmak için çok çalışıyor." },
  { eng: "I’ll send you the minutes of the meeting.", tr: "Toplantı tutanaklarını sana göndereceğim." },
  { eng: "Please make sure the report is error-free.", tr: "Lütfen raporun hatasız olduğundan emin ol." },
  { eng: "The product launch was very successful.", tr: "Ürün lansmanı çok başarılı geçti." },
  { eng: "We should discuss the budget allocation tomorrow.", tr: "Bütçe dağılımını yarın konuşmalıyız." },
  { eng: "The client requested some changes in the design.", tr: "Müşteri tasarımda bazı değişiklikler istedi." },
  { eng: "Our office will be closed on public holidays.", tr: "Ofisimiz resmi tatillerde kapalı olacak." },
  { eng: "Can you arrange a training session for the staff?", tr: "Personel için bir eğitim seansı ayarlayabilir misin?" },
  { eng: "The IT department is upgrading the network.", tr: "BT departmanı ağı yükseltiyor." },
  { eng: "I’m preparing the presentation slides.", tr: "Sunum slaytlarını hazırlıyorum." },
  { eng: "Please submit your expense reports by Monday.", tr: "Gider raporlarını pazartesiye kadar teslim et." },
  { eng: "We have to comply with the new regulations.", tr: "Yeni düzenlemelere uymamız gerekiyor." },
  { eng: "The server maintenance will happen this weekend.", tr: "Sunucu bakımı bu hafta sonu yapılacak." },
  { eng: "Are you available for a quick call now?", tr: "Şu an hızlı bir görüşmeye müsait misin?" },
  { eng: "The feedback from customers has been positive.", tr: "Müşterilerden gelen geri bildirimler olumlu oldu." },
  { eng: "I will forward the email to you shortly.", tr: "E-postayı kısa süre içinde sana ileteceğim." },
  { eng: "Please find the invoice attached.", tr: "Faturayı ekte bulabilirsin." },
  { eng: "We need to finalize the contract by Friday.", tr: "Sözleşmeyi cuma gününe kadar kesinleştirmeliyiz." },
  { eng: "The recruitment process will start next month.", tr: "İşe alım süreci gelecek ay başlayacak." },
  { eng: "Let’s set up a meeting to discuss the strategy.", tr: "Stratejiyi konuşmak için toplantı ayarlayalım." },
  { eng: "The company policy has been updated recently.", tr: "Şirket politikası yakın zamanda güncellendi." },
  { eng: "Can you prepare a summary of the report?", tr: "Raporun bir özetini hazırlayabilir misin?" },
  { eng: "The workshop was very informative and useful.", tr: "Atölye çok bilgilendirici ve faydalıydı." },
  { eng: "I will be on vacation next week.", tr: "Gelecek hafta tatilde olacağım." },
  { eng: "The deadline is approaching fast.", tr: "Teslim tarihi hızla yaklaşıyor." },
  { eng: "Please confirm your attendance by tomorrow.", tr: "Katılımını yarına kadar onayla lütfen." },
  { eng: "We need to order more office supplies.", tr: "Daha fazla kırtasiye malzemesi sipariş etmemiz gerekiyor." },
  { eng: "The marketing campaign was launched last week.", tr: "Pazarlama kampanyası geçen hafta başlatıldı." },
  { eng: "Could you review this draft and suggest improvements?", tr: "Bu taslağı inceleyip iyileştirme önerir misin?" },
  { eng: "The client meeting has been postponed.", tr: "Müşteri toplantısı ertelendi." },
  { eng: "I will update you as soon as I have news.", tr: "Haber alır almaz seni bilgilendireceğim." },
  { eng: "The data analysis shows promising results.", tr: "Veri analizi umut verici sonuçlar gösteriyor." },
  { eng: "Please keep me copied on all relevant emails.", tr: "Tüm ilgili e-postalara beni de dahil et." },
  { eng: "The project manager requested a progress report.", tr: "Proje yöneticisi ilerleme raporu istedi." },
  { eng: "I’m scheduling a call with the stakeholders.", tr: "Paydaşlarla bir görüşme planlıyorum." },
  { eng: "The financial report will be published next week.", tr: "Finansal rapor gelecek hafta yayınlanacak." },
  { eng: "Please ensure all documents are signed.", tr: "Tüm belgelerin imzalandığından emin ol." },
  { eng: "We need to improve customer satisfaction.", tr: "Müşteri memnuniyetini artırmalıyız." },
  { eng: "The team is brainstorming new ideas.", tr: "Ekip yeni fikirler üzerine beyin fırtınası yapıyor." },
  { eng: "I will send the updated schedule shortly.", tr: "Güncellenmiş programı kısa süre içinde göndereceğim." },
  { eng: "The contract negotiation is still ongoing.", tr: "Sözleşme görüşmeleri hala devam ediyor." },
  { eng: "Please provide your availability for next week.", tr: "Gelecek hafta için müsaitlik durumunu bildir." },
  { eng: "The meeting room is booked for 2 PM.", tr: "Toplantı odası saat 14:00 için rezerve edildi." },
  { eng: "We are expecting a delivery tomorrow.", tr: "Yarın bir teslimat bekliyoruz." },
  { eng: "Can you assist me with this task?", tr: "Bu görevde bana yardımcı olabilir misin?" },
  { eng: "The product specification document is attached.", tr: "Ürün spesifikasyon dokümanı ekte." },
  { eng: "I’ll follow up with you next week.", tr: "Seninle gelecek hafta takip edeceğim." },
  { eng: "The deadline was extended by two days.", tr: "Teslim tarihi iki gün uzatıldı." },
  { eng: "Please make sure to back up your data regularly.", tr: "Verilerini düzenli olarak yedeklemeyi unutma." },
  { eng: "The annual report highlights key achievements.", tr: "Yıllık rapor önemli başarıları vurguluyor." },
  { eng: "We need to schedule a performance review.", tr: "Performans değerlendirmesi planlamalıyız." },
  { eng: "The software update will be rolled out tonight.", tr: "Yazılım güncellemesi bu gece yayına alınacak." },
  { eng: "Please check if the invoice matches the purchase order.", tr: "Faturanın siparişle uyumlu olup olmadığını kontrol et." },
  { eng: "The team celebrated reaching the quarterly goals.", tr: "Ekip, çeyrek hedeflerine ulaşmayı kutladı." },
  { eng: "I’m working on the budget proposal.", tr: "Bütçe teklifini hazırlıyorum." },
  { eng: "Can you send me the contact details?", tr: "İletişim bilgilerini bana gönderebilir misin?" },
  { eng: "The presentation will be held next Monday.", tr: "Sunum gelecek pazartesi yapılacak." },
  { eng: "Please let me know if you have any questions.", tr: "Herhangi bir sorunuz varsa lütfen bana bildirin." },
  { eng: "The team is collaborating on the new project.", tr: "Ekip yeni proje üzerinde iş birliği yapıyor." },
  { eng: "We need to finalize the vendor list.", tr: "Tedarikçi listesini kesinleştirmeliyiz." },
  { eng: "The training materials are now available online.", tr: "Eğitim materyalleri artık çevrimiçi erişilebilir." },
  { eng: "I will prepare a report on the findings.", tr: "Bulgularla ilgili bir rapor hazırlayacağım." },
  { eng: "The client approved the budget proposal.", tr: "Müşteri bütçe teklifini onayladı." },
  { eng: "Please ensure timely delivery of all products.", tr: "Tüm ürünlerin zamanında teslim edildiğinden emin ol." },
  { eng: "The workshop will cover advanced techniques.", tr: "Atölyede ileri teknikler ele alınacak." },
  { eng: "I need to reschedule our appointment.", tr: "Randevumuzu yeniden planlamam gerekiyor." },
  { eng: "The company is launching a new product line.", tr: "Şirket yeni bir ürün serisi piyasaya sürüyor." },
  { eng: "Please confirm receipt of this email.", tr: "Bu e-postayı aldığını onayla lütfen." },
  { eng: "The IT team resolved the network issue.", tr: "BT ekibi ağ sorununu çözdü." },
  { eng: "I will be attending the conference next month.", tr: "Gelecek ay konferansa katılacağım." },
  { eng: "The marketing strategy needs revision.", tr: "Pazarlama stratejisinin revize edilmesi gerekiyor." },
  { eng: "Can you prepare a summary of the meeting?", tr: "Toplantının bir özetini hazırlayabilir misin?" },
  { eng: "The deadline is firm and cannot be extended.", tr: "Teslim tarihi kesin ve uzatılamaz." },
  { eng: "We are looking for ways to improve efficiency.", tr: "Verimliliği artırmanın yollarını arıyoruz." },
  { eng: "Please update me on the project status.", tr: "Proje durumu hakkında beni bilgilendir." },
  { eng: "The contract was signed yesterday.", tr: "Sözleşme dün imzalandı." },
  { eng: "We need to hire additional staff for the project.", tr: "Proje için ek personel almamız gerekiyor." },
  { eng: "The new policy will take effect next month.", tr: "Yeni politika gelecek ay yürürlüğe girecek." },
  { eng: "Please send the revised document by end of day.", tr: "Gün sonuna kadar revize edilmiş dokümanı gönder." },
  { eng: "The team is analyzing customer feedback.", tr: "Ekip müşteri geri bildirimlerini analiz ediyor." },
  { eng: "I’ll be out of office next Friday.", tr: "Gelecek cuma ofis dışında olacağım." },
  { eng: "Please make sure all tasks are completed on time.", tr: "Tüm görevlerin zamanında tamamlandığından emin ol." },
  { eng: "The software license needs to be renewed.", tr: "Yazılım lisansı yenilenmeli." },
  { eng: "Can you help me with this technical issue?", tr: "Bu teknik konuda bana yardımcı olabilir misin?" },
  { eng: "The project kickoff meeting is scheduled for Monday.", tr: "Proje başlangıç toplantısı pazartesi için planlandı." },
  { eng: "Please send me the latest version of the file.", tr: "Dosyanın en güncel versiyonunu gönder." },
  { eng: "We have to comply with industry standards.", tr: "Sektör standartlarına uymamız gerekiyor." },
  { eng: "The client requested additional features.", tr: "Müşteri ek özellikler talep etti." },
  { eng: "I will update the team on the new developments.", tr: "Yeni gelişmeler hakkında ekibi bilgilendireceğim." },
  { eng: "The meeting has been moved to 4 PM.", tr: "Toplantı saat 16:00’ya alındı." },
  { eng: "Please check the inventory levels.", tr: "Stok seviyelerini kontrol et lütfen." },
  { eng: "The product was delivered ahead of schedule.", tr: "Ürün zamanından önce teslim edildi." },
  { eng: "We need to review the compliance documents.", tr: "Uyum dokümanlarını gözden geçirmeliyiz." },
  { eng: "I’m drafting the proposal for the new client.", tr: "Yeni müşteri için teklif taslağı hazırlıyorum." },
  { eng: "The team is coordinating with external vendors.", tr: "Ekip dış tedarikçilerle koordinasyon halinde." },
  { eng: "Please arrange for technical support.", tr: "Teknik destek ayarla lütfen." },
  { eng: "The quarterly report will be ready next week.", tr: "Çeyrek raporu gelecek hafta hazır olacak." },
  { eng: "Can you send me the project timeline?", tr: "Proje zaman çizelgesini bana gönderebilir misin?" },
  { eng: "We need to schedule regular maintenance.", tr: "Düzenli bakım planlamamız gerekiyor." },
  { eng: "Please confirm your participation.", tr: "Katılımını onayla lütfen." },
  { eng: "The system upgrade is planned for tonight.", tr: "Sistem yükseltmesi bu gece planlandı." },
  { eng: "I will review the contract terms.", tr: "Sözleşme şartlarını inceleyeceğim." },
  { eng: "The presentation was well received by the audience.", tr: "Sunum izleyiciler tarafından olumlu karşılandı." },
  { eng: "Please prepare the budget estimate.", tr: "Bütçe tahminini hazırla lütfen." },
  { eng: "The project team met the deadlines successfully.", tr: "Proje ekibi teslim tarihlerini başarıyla karşıladı." },
  { eng: "I’ll send you the updated contact list.", tr: "Güncellenmiş iletişim listesini sana göndereceğim." },
  { eng: "The customer requested a refund.", tr: "Müşteri iade talebinde bulundu." },
  { eng: "Please submit your leave application.", tr: "İzin başvurunu teslim et lütfen." },
  { eng: "The audit report highlights some issues.", tr: "Denetim raporu bazı sorunları ortaya koyuyor." },
  { eng: "Can you provide training for the new software?", tr: "Yeni yazılım için eğitim verebilir misin?" },
  { eng: "The product warranty lasts for two years.", tr: "Ürün garantisi iki yıl sürer." },
  { eng: "Please backup all important files.", tr: "Tüm önemli dosyaları yedekle lütfen." },
  { eng: "The server experienced unexpected downtime.", tr: "Sunucu beklenmedik bir kesinti yaşadı." },
  { eng: "I am coordinating with the marketing team.", tr: "Pazarlama ekibiyle koordinasyon halindeyim." },
  { eng: "Please find attached the meeting agenda.", tr: "Toplantı gündemini ekte bulabilirsin." },
  { eng: "The project scope has been clearly defined.", tr: "Proje kapsamı net bir şekilde tanımlandı." },
  { eng: "We need to address customer complaints promptly.", tr: "Müşteri şikayetlerini hızlıca çözmemiz gerekiyor." },
  { eng: "The company is expanding into new markets.", tr: "Şirket yeni pazarlara açılıyor." },
  { eng: "Please complete the survey by Friday.", tr: "Anketi cuma gününe kadar tamamla lütfen." },
  { eng: "The team is preparing for the product launch.", tr: "Ekip ürün lansmanına hazırlanıyor." },
  { eng: "We need to evaluate the project risks carefully.", tr: "Proje risklerini dikkatlice değerlendirmeliyiz." },
  { eng: "Please make sure the documents are signed by all parties.", tr: "Belgelerin tüm taraflarca imzalandığından emin ol." },
  { eng: "The sales figures have increased this quarter.", tr: "Bu çeyrekte satış rakamları arttı." },
  { eng: "Can you provide a detailed cost breakdown?", tr: "Detaylı maliyet dökümünü verebilir misin?" },
  { eng: "I will prepare a presentation for the board meeting.", tr: "Yönetim kurulu toplantısı için sunum hazırlayacağım." },
  { eng: "The customer support team is available 24/7.", tr: "Müşteri destek ekibi 7/24 hizmet veriyor." },
  { eng: "Please check the shipment status and update me.", tr: "Gönderim durumunu kontrol edip beni bilgilendir." },
  { eng: "The project deadline has been extended by one week.", tr: "Proje teslim tarihi bir hafta uzatıldı." },
  { eng: "We need to discuss the contract renewal soon.", tr: "Sözleşme yenilemesini yakında konuşmalıyız." },
  { eng: "The training session will be held online.", tr: "Eğitim oturumu çevrimiçi yapılacak." },
  { eng: "Please send your feedback by the end of the day.", tr: "Gün sonunda geri bildiriminizi gönderin lütfen." },
  { eng: "The new policy affects all employees.", tr: "Yeni politika tüm çalışanları etkiliyor." },
  { eng: "I am working on improving the customer experience.", tr: "Müşteri deneyimini iyileştirmek için çalışıyorum." },
  { eng: "Please update the project plan accordingly.", tr: "Proje planını buna göre güncelle." },
  { eng: "The vendor delivered the products on time.", tr: "Tedarikçi ürünleri zamanında teslim etti." },
  { eng: "We need to finalize the agenda for the meeting.", tr: "Toplantının gündemini kesinleştirmeliyiz." },
  { eng: "The budget has been approved by management.", tr: "Bütçe yönetim tarafından onaylandı." },
  { eng: "Can you prepare a report on the sales performance?", tr: "Satış performansı ile ilgili bir rapor hazırlayabilir misin?" },
  { eng: "The system will undergo maintenance this weekend.", tr: "Sistem bu hafta sonu bakım görecek." },
  { eng: "Please confirm the delivery address.", tr: "Teslimat adresini onayla lütfen." },
  { eng: "The marketing team launched a new campaign.", tr: "Pazarlama ekibi yeni bir kampanya başlattı." },
  { eng: "I will coordinate the project activities.", tr: "Proje faaliyetlerini koordine edeceğim." },
  { eng: "The client requested a demonstration of the product.", tr: "Müşteri ürünün demosunu istedi." },
  { eng: "Please make sure the software is updated.", tr: "Yazılımın güncel olduğundan emin ol." },
  { eng: "We need to organize a team-building event.", tr: "Bir ekip oluşturma etkinliği düzenlemeliyiz." },
  { eng: "The financial team is preparing the annual budget.", tr: "Finans ekibi yıllık bütçeyi hazırlıyor." },
  { eng: "Can you send me the contact information?", tr: "İletişim bilgilerini bana gönderebilir misin?" },
  { eng: "The product design was approved by the client.", tr: "Ürün tasarımı müşteri tarafından onaylandı." },
  { eng: "Please submit the report by the deadline.", tr: "Raporu teslim tarihine kadar gönder." },
  { eng: "The team is working remotely this week.", tr: "Ekip bu hafta uzaktan çalışıyor." },
  { eng: "I will review the proposal and get back to you.", tr: "Teklifi inceleyip sana döneceğim." },
  { eng: "The company is committed to sustainability.", tr: "Şirket sürdürülebilirliğe bağlıdır." },
  { eng: "Please ensure data privacy compliance.", tr: "Veri gizliliği uyumunu sağla." },
  { eng: "The project scope has been expanded.", tr: "Proje kapsamı genişletildi." },
  { eng: "We need to conduct a risk assessment.", tr: "Risk değerlendirmesi yapmamız gerekiyor." },
  { eng: "The client is satisfied with the progress.", tr: "Müşteri ilerlemeden memnun." },
  { eng: "Please arrange a conference call for tomorrow.", tr: "Yarın için bir telekonferans ayarla." },
  { eng: "The development team fixed the bugs.", tr: "Geliştirme ekibi hataları giderdi." },
  { eng: "I will prepare the documentation.", tr: "Dokümantasyonu hazırlayacağım." },
  { eng: "The sales department exceeded their targets.", tr: "Satış departmanı hedeflerini aştı." },
  { eng: "Please provide training materials to the staff.", tr: "Personel için eğitim materyalleri sağla." },
  { eng: "The meeting minutes have been distributed.", tr: "Toplantı tutanakları dağıtıldı." },
  { eng: "We need to update the company website.", tr: "Şirket web sitesini güncellememiz gerekiyor." },
  { eng: "Can you send me the project requirements?", tr: "Proje gereksinimlerini bana gönderebilir misin?" },
  { eng: "The budget constraints are challenging.", tr: "Bütçe kısıtlamaları zorluyor." },
  { eng: "Please check the quality of the products.", tr: "Ürünlerin kalitesini kontrol et." },
  { eng: "The team celebrated the successful launch.", tr: "Ekip başarılı lansmanı kutladı." },
  { eng: "I’m preparing for the client presentation.", tr: "Müşteri sunumuna hazırlanıyorum." },
  { eng: "Please submit your weekly report.", tr: "Haftalık raporunu teslim et." },
  { eng: "The product specifications need revision.", tr: "Ürün spesifikasyonlarının revize edilmesi gerekiyor." },
  { eng: "We need to improve communication within the team.", tr: "Ekip içi iletişimi geliştirmeliyiz." },
  { eng: "The IT department is resolving technical issues.", tr: "BT departmanı teknik sorunları çözüyor." },
  { eng: "Please confirm the meeting time.", tr: "Toplantı saatini onayla lütfen." },
  { eng: "The project manager is on leave today.", tr: "Proje yöneticisi bugün izinli." },
  { eng: "I will follow up on the pending tasks.", tr: "Bekleyen görevlerin takibini yapacağım." },
  { eng: "The client requested additional documentation.", tr: "Müşteri ek dokümantasyon istedi." },
  { eng: "Please prepare a summary report.", tr: "Özet bir rapor hazırla." },
  { eng: "The training program was very effective.", tr: "Eğitim programı çok etkiliydi." },
  { eng: "We need to allocate resources efficiently.", tr: "Kaynakları verimli bir şekilde tahsis etmeliyiz." },
  { eng: "The customer feedback is valuable.", tr: "Müşteri geri bildirimi değerli." },
  { eng: "Please check the contract terms carefully.", tr: "Sözleşme şartlarını dikkatlice incele." },
  { eng: "The company is hiring new employees.", tr: "Şirket yeni çalışanlar alıyor." },
  { eng: "I will send you the meeting agenda.", tr: "Toplantı gündemini sana göndereceğim." },
  { eng: "The software license expires next month.", tr: "Yazılım lisansı gelecek ay sona eriyor." },
  { eng: "Please ensure compliance with the regulations.", tr: "Düzenlemelere uyumu sağla." },
  { eng: "The team is preparing the final report.", tr: "Ekip son raporu hazırlıyor." },
  { eng: "Can you update the client on the progress?", tr: "Müşteriyi ilerleme hakkında bilgilendirebilir misin?" },
  { eng: "The delivery was delayed due to bad weather.", tr: "Teslimat kötü hava koşulları nedeniyle gecikti." },
  { eng: "Please review the budget proposal.", tr: "Bütçe teklifini incele." },
  { eng: "The marketing strategy is being revised.", tr: "Pazarlama stratejisi revize ediliyor." },
  { eng: "I will schedule a follow-up meeting.", tr: "Takip toplantısı planlayacağım." },
  { eng: "The project team is collaborating effectively.", tr: "Proje ekibi etkili bir şekilde iş birliği yapıyor." },
  { eng: "Please submit your timesheet by Friday.", tr: "Çalışma saatlerinizi cuma gününe kadar teslim edin." },
  { eng: "The client approved the design.", tr: "Müşteri tasarımı onayladı." },
  { eng: "We need to prepare the project budget.", tr: "Proje bütçesini hazırlamalıyız." },
  { eng: "The system update will improve performance.", tr: "Sistem güncellemesi performansı artıracak." },
  { eng: "Please confirm your attendance at the event.", tr: "Etkinliğe katılımınızı onaylayın lütfen." },
  { eng: "The training materials are available online.", tr: "Eğitim materyalleri çevrimiçi erişilebilir." },
  { eng: "I will coordinate with the logistics team.", tr: "Lojistik ekibi ile koordinasyon sağlayacağım." },
  { eng: "The client requested a product demo.", tr: "Müşteri ürün demosu istedi." },
  { eng: "Please check the inventory before ordering.", tr: "Sipariş vermeden önce stoğu kontrol et." },
  { eng: "The project deadline is strict.", tr: "Proje teslim tarihi kesin." },
  { eng: "We need to prepare a contingency plan.", tr: "Alternatif bir plan hazırlamalıyız." },
  { eng: "The team is meeting to discuss the issues.", tr: "Ekip sorunları tartışmak için toplantı yapıyor." },
  { eng: "Please send the updated files.", tr: "Güncellenmiş dosyaları gönder." },
  { eng: "The customer is happy with the service.", tr: "Müşteri hizmetten memnun." },
  { eng: "I will review the final draft.", tr: "Son taslağı inceleyeceğim." },
  { eng: "The company is launching a new marketing campaign.", tr: "Şirket yeni bir pazarlama kampanyası başlatıyor." },
  { eng: "Please provide the project documentation.", tr: "Proje dokümantasyonunu sağla." },
  { eng: "The server upgrade will happen this weekend.", tr: "Sunucu yükseltmesi bu hafta sonu yapılacak." },
  { eng: "Can you send me the client’s feedback?", tr: "Müşterinin geri bildirimini bana gönderebilir misin?" },
  { eng: "The team is preparing the project timeline.", tr: "Ekip proje zaman çizelgesini hazırlıyor." },
  { eng: "Please confirm the payment details.", tr: "Ödeme bilgilerini onayla lütfen." },
  { eng: "The marketing team is analyzing customer data.", tr: "Pazarlama ekibi müşteri verilerini analiz ediyor." },
  { eng: "I will follow up on the contract status.", tr: "Sözleşme durumunu takip edeceğim." },
  { eng: "The client requested changes to the proposal.", tr: "Müşteri teklifte değişiklik istedi." },
  { eng: "Please ensure all team members are informed.", tr: "Tüm ekip üyelerinin bilgilendirildiğinden emin ol." },
  { eng: "The project scope needs clarification.", tr: "Proje kapsamının netleştirilmesi gerekiyor." },
  { eng: "We are planning a product launch event.", tr: "Bir ürün lansman etkinliği planlıyoruz." },
  { eng: "Please review the contract before signing.", tr: "İmzalamadan önce sözleşmeyi incele." },
  { eng: "The team is working on a new design.", tr: "Ekip yeni bir tasarım üzerinde çalışıyor." },
  { eng: "I will prepare a report for the management.", tr: "Yönetim için bir rapor hazırlayacağım." },
  { eng: "The company is investing in new technology.", tr: "Şirket yeni teknolojiye yatırım yapıyor." },
  { eng: "Please check the software compatibility.", tr: "Yazılım uyumluluğunu kontrol et." },
  { eng: "The meeting has been rescheduled to next week.", tr: "Toplantı gelecek haftaya ertelendi." },
  { eng: "We need to train the staff on new procedures.", tr: "Personeli yeni prosedürler konusunda eğitmeliyiz." },
  { eng: "The client approved the budget.", tr: "Müşteri bütçeyi onayladı." },
  { eng: "Please send me the invoice.", tr: "Faturayı bana gönder." },
  { eng: "The project team met all the milestones.", tr: "Proje ekibi tüm kilometre taşlarını tamamladı." },
  { eng: "I will arrange a meeting with the client.", tr: "Müşteri ile bir toplantı ayarlayacağım." },
  { eng: "The system backup is scheduled for tonight.", tr: "Sistem yedeği bu gece planlandı." },
  { eng: "Please ensure timely delivery of the project.", tr: "Projenin zamanında teslim edildiğinden emin ol." },
  { eng: "The marketing strategy focuses on digital channels.", tr: "Pazarlama stratejisi dijital kanallara odaklanıyor." },
  { eng: "Can you provide a list of potential clients?", tr: "Olası müşterilerin listesini verebilir misin?" },
  { eng: "The training will be held in the main conference room.", tr: "Eğitim ana konferans salonunda yapılacak." },
  { eng: "Please review the latest project updates.", tr: "Son proje güncellemelerini incele." },
  { eng: "The client requested a revised schedule.", tr: "Müşteri revize edilmiş bir program istedi." },
  { eng: "We need to update the software regularly.", tr: "Yazılımı düzenli olarak güncellemeliyiz." },
  { eng: "The team is working overtime to meet the deadline.", tr: "Ekip teslim tarihine yetişmek için fazla mesai yapıyor." },
  { eng: "Please send your availability for next week.", tr: "Gelecek hafta için müsaitlik durumunu gönder." },
  { eng: "The project manager is reviewing the risks.", tr: "Proje yöneticisi riskleri gözden geçiriyor." },
  { eng: "I will send the meeting notes after the call.", tr: "Görüşmeden sonra toplantı notlarını göndereceğim." },
  { eng: "The company policy requires annual training.", tr: "Şirket politikası yıllık eğitim gerektiriyor." },
  { eng: "Please make sure to comply with safety regulations.", tr: "Güvenlik düzenlemelerine uyduğundan emin ol." },
  { eng: "The team is collaborating with external consultants.", tr: "Ekip dış danışmanlarla iş birliği yapıyor." },
  { eng: "We need to finalize the project budget.", tr: "Proje bütçesini kesinleştirmeliyiz." },
  { eng: "The software update fixed several bugs.", tr: "Yazılım güncellemesi birkaç hatayı giderdi." },
  { eng: "Please prepare the presentation slides.", tr: "Sunum slaytlarını hazırla." },
  { eng: "The client is interested in a long-term partnership.", tr: "Müşteri uzun vadeli bir ortaklıkla ilgileniyor." },
  { eng: "I will schedule a training session next month.", tr: "Gelecek ay bir eğitim oturumu planlayacağım." },
  { eng: "The project scope includes new features.", tr: "Proje kapsamı yeni özellikleri içeriyor." },
  { eng: "Please check the network connectivity.", tr: "Ağ bağlantısını kontrol et." },
  { eng: "The team is preparing for the annual audit.", tr: "Ekip yıllık denetime hazırlanıyor." },
  { eng: "We need to improve customer communication.", tr: "Müşteri iletişimini geliştirmeliyiz." },
  { eng: "The report highlights key performance indicators.", tr: "Rapor önemli performans göstergelerini vurguluyor." },
  { eng: "Please send the updated contract.", tr: "Güncellenmiş sözleşmeyi gönder." },
  { eng: "The marketing team is planning a social media campaign.", tr: "Pazarlama ekibi bir sosyal medya kampanyası planlıyor." },
  { eng: "I will review the budget estimates.", tr: "Bütçe tahminlerini inceleyeceğim." },
  { eng: "The company is expanding its product line.", tr: "Şirket ürün yelpazesini genişletiyor." },
  { eng: "Please confirm the delivery date.", tr: "Teslim tarihini onayla." },
  { eng: "The team is working on the final testing phase.", tr: "Ekip son test aşaması üzerinde çalışıyor." },
  { eng: "We need to update the project documentation.", tr: "Proje dokümantasyonunu güncellemeliyiz." },
  { eng: "The client approved the final design.", tr: "Müşteri son tasarımı onayladı." },
  { eng: "Please prepare a report on customer satisfaction.", tr: "Müşteri memnuniyeti hakkında bir rapor hazırla." },
  { eng: "The project timeline has been updated.", tr: "Proje zaman çizelgesi güncellendi." },
  { eng: "We need to train new employees next week.", tr: "Gelecek hafta yeni çalışanları eğitmeliyiz." },
  { eng: "The IT team resolved the server issues.", tr: "BT ekibi sunucu sorunlarını çözdü." },
  { eng: "Please send the meeting agenda to all participants.", tr: "Toplantı gündemini tüm katılımcılara gönder." },
  { eng: "The contract negotiation is in progress.", tr: "Sözleşme görüşmeleri devam ediyor." },
  { eng: "I will update you on the project status tomorrow.", tr: "Seni yarın proje durumu hakkında bilgilendireceğim." },
  { eng: "The company is implementing new security measures.", tr: "Şirket yeni güvenlik önlemleri uyguluyor." },
  { eng: "Please review and approve the budget.", tr: "Bütçeyi inceleyip onayla lütfen." },
  { eng: "The team is preparing for the product demonstration.", tr: "Ekip ürün demosuna hazırlanıyor." },
  { eng: "We need to order more office supplies.", tr: "Daha fazla kırtasiye malzemesi sipariş etmemiz gerekiyor." },
  { eng: "The client requested a detailed project plan.", tr: "Müşteri detaylı bir proje planı istedi." },
  { eng: "Please ensure timely submission of all documents.", tr: "Tüm belgelerin zamanında teslim edilmesini sağla." },
  { eng: "The training session was very informative.", tr: "Eğitim oturumu çok bilgilendiriciydi." },
  { eng: "I will coordinate the logistics for the event.", tr: "Etkinlik için lojistiği koordine edeceğim." },
  { eng: "The marketing campaign generated positive results.", tr: "Pazarlama kampanyası olumlu sonuçlar getirdi." },
  { eng: "Please check the quality of the delivered products.", tr: "Teslim edilen ürünlerin kalitesini kontrol et." },
  { eng: "The project deadline is next Friday.", tr: "Projenin teslim tarihi gelecek cuma." },
  { eng: "We need to discuss the budget allocation.", tr: "Bütçe dağılımını tartışmamız gerekiyor." },
  { eng: "The client is satisfied with our services.", tr: "Müşteri hizmetlerimizden memnun." },
  { eng: "Please prepare a summary of the meeting.", tr: "Toplantının bir özetini hazırla." },
  { eng: "The software update will improve security.", tr: "Yazılım güncellemesi güvenliği artıracak." },
  { eng: "I will send the final report by the end of the day.", tr: "Son raporu gün sonunda göndereceğim." },
  { eng: "The team is working hard to meet the project goals.", tr: "Ekip proje hedeflerine ulaşmak için çok çalışıyor." },
  { eng: "Please confirm your attendance at the conference.", tr: "Konferansa katılımını onayla lütfen." },
  { eng: "The product launch was a great success.", tr: "Ürün lansmanı büyük bir başarıydı." },
  { eng: "We need to update the project scope.", tr: "Proje kapsamını güncellememiz gerekiyor." },
  { eng: "The client requested additional features.", tr: "Müşteri ek özellikler talep etti." },
  { eng: "Please send me the latest sales figures.", tr: "En son satış rakamlarını bana gönder." },
  { eng: "The team is reviewing the project requirements.", tr: "Ekip proje gereksinimlerini gözden geçiriyor." },
  { eng: "I will follow up with the client next week.", tr: "Gelecek hafta müşteri ile takip yapacağım." },
  { eng: "The company policy has been updated.", tr: "Şirket politikası güncellendi." },
  { eng: "Please prepare the budget proposal.", tr: "Bütçe teklifini hazırla." },
  { eng: "The marketing team is planning a new campaign.", tr: "Pazarlama ekibi yeni bir kampanya planlıyor." },
  { eng: "We need to finalize the contract soon.", tr: "Sözleşmeyi yakında kesinleştirmeliyiz." },
  { eng: "The project manager is on vacation this week.", tr: "Proje yöneticisi bu hafta tatilde." },
  { eng: "Please review the document and provide feedback.", tr: "Dokümanı inceleyip geri bildirim ver." },
  { eng: "The training materials are available online.", tr: "Eğitim materyalleri çevrimiçi olarak mevcut." },
  { eng: "I will schedule a meeting with the stakeholders.", tr: "Paydaşlarla bir toplantı planlayacağım." },
  { eng: "The system upgrade is scheduled for tonight.", tr: "Sistem yükseltmesi bu gece planlandı." },
  { eng: "Please ensure all team members are informed.", tr: "Tüm ekip üyelerinin bilgilendirildiğinden emin ol." },
  { eng: "The project timeline needs to be adjusted.", tr: "Proje zaman çizelgesi ayarlanmalı." },
  { eng: "The client approved the final design.", tr: "Müşteri son tasarımı onayladı." },
  { eng: "Please send the updated project plan.", tr: "Güncellenmiş proje planını gönder." },
  { eng: "The team is working on the final testing phase.", tr: "Ekip son test aşaması üzerinde çalışıyor." },
  { eng: "I will send the meeting minutes after the call.", tr: "Görüşmeden sonra toplantı tutanaklarını göndereceğim." },
  { eng: "The company is committed to quality service.", tr: "Şirket kaliteli hizmete bağlıdır." },
  { eng: "Please check the network connectivity.", tr: "Ağ bağlantısını kontrol et." },
  { eng: "The client requested a product demonstration.", tr: "Müşteri ürün demosu istedi." },
  { eng: "We need to prepare a contingency plan.", tr: "Alternatif bir plan hazırlamalıyız." },
  { eng: "The team celebrated meeting the quarterly goals.", tr: "Ekip çeyreklik hedeflere ulaşmayı kutladı." },
  { eng: "Please confirm the delivery address.", tr: "Teslimat adresini onayla." },
  { eng: "The software license expires next month.", tr: "Yazılım lisansı gelecek ay sona eriyor." },
  { eng: "I will review the budget estimates.", tr: "Bütçe tahminlerini inceleyeceğim." },
  { eng: "The marketing strategy focuses on digital media.", tr: "Pazarlama stratejisi dijital medyaya odaklanıyor." },
  { eng: "Please submit your leave application.", tr: "İzin başvurunu teslim et." },
  { eng: "The project scope has been expanded.", tr: "Proje kapsamı genişletildi." },
  { eng: "The IT team fixed the server problems.", tr: "BT ekibi sunucu problemlerini çözdü." },
  { eng: "Please send the invoice as soon as possible.", tr: "Faturayı mümkün olan en kısa sürede gönder." },
  { eng: "The client is happy with the new features.", tr: "Müşteri yeni özelliklerden memnun." },
  { eng: "I will update the project schedule.", tr: "Proje takvimini güncelleyeceğim." },
  { eng: "The team is collaborating with external partners.", tr: "Ekip dış ortaklarla iş birliği yapıyor." },
  { eng: "Please check the quality standards.", tr: "Kalite standartlarını kontrol et." },
  { eng: "The project deadline is fast approaching.", tr: "Proje teslim tarihi hızla yaklaşıyor." },
  { eng: "We need to order new equipment.", tr: "Yeni ekipman sipariş etmemiz gerekiyor." },
  { eng: "The client requested additional documentation.", tr: "Müşteri ek dokümantasyon istedi." },
  { eng: "Please prepare a summary report.", tr: "Özet bir rapor hazırla." },
  { eng: "The training session will be held next week.", tr: "Eğitim oturumu gelecek hafta yapılacak." },
  { eng: "I will coordinate with the logistics team.", tr: "Lojistik ekibiyle koordinasyon sağlayacağım." },
  { eng: "The marketing campaign generated good results.", tr: "Pazarlama kampanyası iyi sonuçlar getirdi." },
  { eng: "Please check the delivery status.", tr: "Teslimat durumunu kontrol et." },
  { eng: "The project budget was approved.", tr: "Proje bütçesi onaylandı." },
  { eng: "The team is preparing the final report.", tr: "Ekip son raporu hazırlıyor." }
];

let usedIndices = new Set();
let currentIndex = -1;

const engSentenceEl = document.getElementById("english-sentence");
const trSentenceEl = document.getElementById("turkish-translation");
const nextBtn = document.getElementById("next-btn");
const wordPopup = document.getElementById("word-popup");
const showWordbookBtn = document.getElementById("show-wordbook-btn");
const wordBookSection = document.getElementById("word-book-section");
const wordListEl = document.getElementById("word-list");
const closeWordbookBtn = document.getElementById("close-wordbook-btn");

let wordBook = JSON.parse(localStorage.getItem("wordBook") || "{}");

// Cümleyi kelimelere ayırıp kelimeleri tıklanabilir yapar
function renderSentence(sentence) {
  engSentenceEl.innerHTML = ""; // Temizle

  // Kelimeleri boşluk ve noktalama dahil ayır
  const words = sentence.split(/(\s+|[.,?!;:])/);

  words.forEach(word => {
    if (word.trim() === "") {
      engSentenceEl.innerHTML += word; // boşluk veya noktalama
    } else {
      const span = document.createElement("span");
      span.textContent = word;
      span.classList.add("clickable-word");
      span.style.cursor = "pointer";
      span.style.color = "#007bff";
      span.style.userSelect = "none";

      // Kelimeye tıklanınca popup ve kelime defterine ekleme
      span.addEventListener("click", (e) => {
        e.stopPropagation();
        addToWordBook(word);
        const rect = e.target.getBoundingClientRect();
        showWordPopup(word, rect.left, rect.bottom);
      });

      engSentenceEl.appendChild(span);
    }
  });
}

// Türkçe cümleyi göster
function renderTranslation(translation) {
  trSentenceEl.textContent = translation;
}

// Popup açar
function showWordPopup(word, x, y) {
  const lowerWord = word.toLowerCase().replace(/[.,?!;:]$/, "");
  let meaning = wordBook[lowerWord] || "Kelime defterinde kayıtlı değil.";

  wordPopup.textContent = `${word}: ${meaning}`;
  wordPopup.style.left = x + "px";
  wordPopup.style.top = y + "px";
  wordPopup.classList.add("visible");

  setTimeout(() => wordPopup.classList.remove("visible"), 3000);
}

// Kelime defterine ekler (ve prompt ile anlam sorar)
function addToWordBook(word) {
  const lowerWord = word.toLowerCase().replace(/[.,?!;:]$/, "");
  if (!(lowerWord in wordBook)) {
    const meaning = prompt(`"${word}" kelimesinin Türkçe anlamını gir:`);
    if (meaning && meaning.trim()) {
      wordBook[lowerWord] = meaning.trim();
      localStorage.setItem("wordBook", JSON.stringify(wordBook));
      alert(`"${word}" kelimesi kelime defterine eklendi.`);
      renderWordBook();
    }
  } else {
    alert(`"${word}" kelimesi zaten kelime defterinde.`);
  }
}

// Kelime defterini listeler
function renderWordBook() {
  wordListEl.innerHTML = "";
  for (const [word, meaning] of Object.entries(wordBook)) {
    const li = document.createElement("li");
    li.textContent = `${word} — ${meaning}`;
    li.addEventListener("click", () => {
      alert(`${word}: ${meaning}`);
    });
    wordListEl.appendChild(li);
  }
}

// Cümleleri rastgele seç ve göster (örnek sentences dizin olsun)
function showSentence() {
  if (usedIndices.size === sentences.length) {
    usedIndices.clear(); // Baştan başla
  }
  do {
    currentIndex = Math.floor(Math.random() * sentences.length);
  } while (usedIndices.has(currentIndex));
  usedIndices.add(currentIndex);

  const sentence = sentences[currentIndex];
  renderSentence(sentence.eng);
  renderTranslation(sentence.tr);
}

// Olay dinleyiciler
nextBtn.addEventListener("click", showSentence);

showWordbookBtn.addEventListener("click", () => {
  wordBookSection.classList.remove("hidden");
});

closeWordbookBtn.addEventListener("click", () => {
  wordBookSection.classList.add("hidden");
});

// İlk cümleyi göster ve kelime defterini render et
showSentence();
renderWordBook();
