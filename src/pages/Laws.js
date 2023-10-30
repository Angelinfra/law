import React from "react";
import NavbarLaw from "./Navbar";
import "./index.css";
import { BsSearch, BsArrowRight } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import Footer from "./Footer";
import { useState, useEffect } from "react";

export default function Laws() {
  //--------------------to navigate Home

  let navigate = useNavigate();
  const MoreInfoComponent = (text) => {
    navigate(`/Lawyer/${text}`, { state: "sub" });
  };

  //---------------to change color
  let [col, setcol] = useState("#cccccc");
  const change = () => {
    setcol("#4296f4");
  };
  const notchange = () => {
    setcol("#cccccc");
  };

  //-------list of laws----------------------------------------------------------

  let lawsList = [
    {
      name: "Aadhaar (Targeted Delivery of Financial and other Subsidies, Benefits and Services) Act, 2016",
      summary:
        "An Act to provide for, as a good governance, efficient, transparent, and targeted delivery of subsidies, benefits and services, the expenditure for which is incurred from the Consolidated Fund of India, 1[or the Consolidated Fund of the State] to individuals residing in India through assigning of unique identity numbers to such individuals and for matters connected therewith or incidental thereto be it enacted by Parliament in the Sixty-seventh Year of the Republic of India as follows.",
      Chapters: [
        {
          name: "1. Preliminary",
          sections: [
            {
              name: "1. Short title, extent and commencement",
              details: [
                "1. This Act may be called the Aadhaar (Targeted Delivery of Financial and Other Subsidies, Benefits and Services) Act, 2016.",
                "2. It shall extend to the whole of India 2*** and save as otherwise provided in this Act, it shall also apply to any offence or contravention thereunder committed outside India by any person.",
                "3. It shall come into force on such date3 as the Central Government may, by notification in the Official Gazette, appoint; and different dates may, be appointed for different provisions of this Act and any reference in any such provision to the commencement of this Act shall be construed as a reference to the commencement of that provision.",
              ],
            },
            {
              name: "2.	Definitions",
              details: [
                {
                  name: "In this Act, unless the context otherwise requires,",
                  details: [
                    "⁴[(a) 'Aadhaar number' means an identification number issued to an individual under sub-section (3) of section 3, and includes any alternative virtual identity generated under sub-section (4) of that section;]",
                    "⁵[(aa) 'Aadhaar ecosystem' includes enrolling agencies, Registrars, requesting entities, offline verification-seeking entities and any other entity or group of entities as may be specified by regulations;]",
                    "(b) ' Aadhaar number holder' means an individual who has been issued an Aadhaar number under this Act;",
                    "⁴(ba) 'Adjudicating Officer' means an Adjudicating Officer appointed under sub-section (1) of section 33B",
                    "(bb) 'Appellate Tribunal' means the Appellate Tribunal referred to in sub-section (1) of section 33C;",
                    "(c) 'authentication' means the process by which the Aadhaar number alongwith demographic information or biometric information of an individual is submitted to the Central Identities Data Repository for its verification and such Repository verifies the correctness, or the lack thereof, on the basis of information available with it;",
                    "(d) 'authentication record' means the record of the time of authentication and identity of the requesting entity and the response provided by the Authority thereto",
                    "(e) 'Authority' means the Unique Identification Authority of India established under sub-section (1) of section 11;",
                    "(f) 'benefit ' means any advantage, gift, reward, relief, or payment, in cash or kind, provided to an individual or a group of individuals and includes such other benefits as may be notified by the Central Government;",
                    "(g) 'biometric information' means photograph, finger print, Iris scan, or such other biological attributes of an individual as may be specified by regulations;",
                    {
                      name:"(h) 'Central Identities Data Repository' means a centralised database in one or more locations containing all Aadhaar numbers issued to Aadhaar number holders along with the corresponding demographic information and biometric information of such individuals and other information related thereto;",
                      details:[
                        "(i) 'Chairperson' means the Chairperson of the Authority appointed under section 12; ",
                        "1[(ia) 'child' means a person who has not completed eighteen years of age;]",
                      ],
                    },
                    "(j) 'core biometric information' means finger print, Iris scan, or such other biological attribute of an individual as may be specified by regulations;",
                    "(k) 'demographic information' includes information relating to the name, date of birth, address and other relevant information of an individual, as may be specified by regulations for the purpose of issuing an Aadhaar number, but shall not include race, religion, caste, tribe, ethnicity, language, records of entitlement, income or medical history;",
                    "(l) 'enrolling agency' means an agency appointed by the Authority or a Registrar, as the case may be, for collecting demographic and biometric information of individuals under this Act;",
                    "(m) 'enrolment' means the process, as may be specified by regulations, to collect demographic and biometric information from individuals by the enrolling agencies for the purpose of issuing Aadhaar numbers to such individuals under this Act;",
                    "(n) 'identity information' in respect of an individual, includes his Aadhaar number, his biometric information and his demographic information;",
                    "(o) 'Member' includes the Chairperson and Member of the Authority appointed under section 12;",
                    {
                      name:"(p) 'notification' means a notification published in the Official Gazette and the expression 'notified' with its cognate meanings and grammatical variations shall be construed accordingly; ",
                      details:[
                        "1[(pa) 'offline verification' means the process of verifying the identity of the Aadhaar number holder without authentication, through such offline modes as may be specified by regulations; ",
                        "(pb) 'offline verification-seeking entity' means any entity desirous of undertaking offline verification of an Aadhaar number holder;]",
                      ],
                    },
                    "(r) 'records of entitlement' means records of benefits, subsidies or services provided to, or availed by, any individual under any programme;",
                    "(s) 'Registrar' means any entity authorised or recognised by the Authority for the purpose of enrolling individuals under this Act;",
                    "(u) 'requesting entity' means an agency or person that submits the Aadhaar number, and demographic information or biometric information, of an individual to the Central Identities Data Repository for authentication",
                    "(v) 'resident' means an individual who has resided in India for a period or periods amounting in all to one hundred and eighty-two days or more in the twelve months immediately preceding the date of application for enrolment;",
                    "(w) 'service' means any provision, facility, utility or any other assistance provided in any form to an individual or a group of individuals and includes such other services as may be notified by the Central Government;",
                    "(x) 'subsidy' means any form of aid, support, grant, subvention, or appropriation, in cash or kind, to an individual or a group of individuals and includes such other subsidies as may be notified by the Central Government.",
                    "",
                    "", 
                    "1. Ins. by Act 14 of 2019, s. 3 (w.e.f. 25-7-2019).",
                    "2. The words except the State of 'Jammu and Kashmir' omitted by Act 34 of 2019, s. 95 and the Fifth Schedule (w.e.f. 31-10- 2019)",
                    "3. 12th September, 2016 - Sections 1 to 10, 24 to 47, vide notification No.S.O. 2927 (E), dated 12th September, 2016 see Gazette of India Extraordinary, Part II, s. 3 (ii).",
                    "12th July, 2016- Sections 11 to 20, 22 and 23, 48 to 59, vide notification No. S.O. 2357 (E), dated 12 the July 2016, see Gazette of India, Extraordinary, Part II, s. 3 (ii).",
                    "25th July, 2019 - Sections1 to 30, vide notification No. S.O. 2649 (E), dated 25th July, 2019 see Gazette of India, Extraordinary, Part II, s. 3 (ii).",
                    "4. Subs. by Act 14 of 2019, s, 3, for clause (a) (w.e.f. 25-7-2019).",
                    "5. Ins. by s. 3, ibid, (w.e.f. 25-7-2019).",
                   

                  ],
                  
                },
              ],
            },
          ],
        },
        {
          name: "2. Enrolment",
          sections: [
            {
              name: "3. Aadhaar number",
              details: [
                "1. Every resident shall be entitled to obtain an Aadhaar number by submitting his demographic information and biometric information by undergoing the process of enrolment:"," Provided that the Central Government may, from time to time, notify such other category of individuals who may be entitled to obtain an Aadhaar number",
                {
                  name:"2. The enrolling agency shall, at the time of enrolment, inform the individual undergoing enrolment of the following details in such manner as may be specified by regulations, namely the manner in which the information shall be used",
                  details:[
                    "(a) the manner in which the information shall be used;",
                    "(b) the nature of recipients with whom the information is intended to be shared during authentication; and",
                    "(c) the existence of a right to access information, the procedure for making requests for such access, and details of the person or department in-charge to whom such requests can be made.",
                  ],
                },
                "3.On receipt of the demographic information and biometric information under sub-section (1), the Authority shall, after verifying the information, in such manner as may be specified by regulations, issue an Aadhaar number to such individual",
                "¹[4. The Aadhaar number issued to an individual under sub-section (3) shall be a twelve-digit identification number and any alternative virtual identity as an alternative to the actual Aadhaar number of an individual that shall be generated by the Authority in such manner as may be specified by regulations.]",
                "",
                "",
                "1. Ins. by Act 14 of 2019, s. 4 (w.e.f. 25-7-2019).",
              ],
            },
            { name: "3A. Aadhaar number of children", details: [
              "²[3A. Aadhaar number of children. The enrolling agency shall, at the time of enrolment of a child, seek the consent of the parent or guardian of the child, and inform the parent or guardian, the details specified under sub-section (2) of section 3.",
              "A child who is an Aadhaar number holder may, within a period of six months of attaining the eighteen years of age, make an application to the Authority for cancellation of his Aadhaar number, in such manner as may be specified by regulations and the Authority shall cancel his Aadhaar number",
              "Notwithstanding anything in section 7, a child shall not be denied any subsidy, benefit or service under that section in case of failure to establish his identity by undergoing authentication, or furnishing proof of possession of Aadhaar number, or in the case of a child to whom no Aadhaar number has been assigned, producing an application for enrolment.]",
              "","",
              "2. Ins. by s. 5, ibid, (w.e.f. 25-7-2019).",
            ] },
            { name: "4. Properties of Aadhaar number", details: [
              "1. An Aadhaar number, issued to an individual shall not be re-assigned to any other individual.",
              "2. An Aadhaar number shall be a random number and bear no relation to the attributes or identity of the Aadhaar number holder",
              "3.Every Aadhaar number holder to establish his identity, may voluntarily use his Aadhaar number in physical or electronic form by way of authentication or offline verification, or in such other form as may be notified, in such manner as may be specified by regulations","  Explanation. For the purposes of this section, voluntary use of the Aadhaar number by way of authentication means the use of such Aadhaar number only with the informed consent of the Aadhaar number holder.",
              {
                name:"4. An entity may be allowed to perform authentication, if the Authority is satisfied that the requesting entity is",
                details:[
                  "(a) compliant with such standards of privacy and security as may be specified by regulations; and",
                  "(b) (i) permitted to offer authentication services under the provisions of any other law made by Parliament; or",
                  "(ii) seeking authentication for such purpose, as the Central Government in consultation with the Authority, and in the interest of State, may prescribe.",
                ]
              },
              "5. The Authority may, by regulations, decide whether a requesting entity shall be permitted the use of the actual Aadhaar number during authentication or only an alternative virtual identity",
              "6. Every requesting entity to whom an authentication request is made by an Aadhaar number holder under sub-section (3) shall inform to the Aadhaar number holder of alternate and viable means of identification and shall not deny any service to him for refusing to, or being unable to, undergo authentication",
              "7. Notwithstanding anything contained in the foregoing provisions, mandatory authentication of an Aadhaar number holder for the provision of any service shall take place if such authentication is required by a law made by Parliament",
              "","",
              "1.	Subs. by Act 14 of 2019, s. 6, for Sub-section (3) (w.e.f. 25-7-2019).",
            ] },
            {
              name: "5. Special measures for issuance of Aadhaar number to certain category of persons",
              details: [" Special measures for issuance of Aadhaar number to certain category of persons. The Authority shall take special measures to issue Aadhaar number to women, children, senior citizens, persons with disability, unskilled and unorganised workers, nomadic tribes or to such other persons who do not have any permanent dwelling house and such other categories of individuals as may be specified by regulations",],
            },
            { name: "6. Update of certain information", details: ["Update of certain information. The Authority may require Aadhaar number holders to update their demographic information and biometric information, from time to time, in such manner as may be specified by regulations, so as to ensure continued accuracy of their information in the Central Identities Data Repository",] },
          ],
        },
        {
          name:"3. Authentication",
          sections:[
            {
              name:"7. Proof of Aadhaar number necessary for receipt of certain subsidies, benefits and services, etc. ",
              details:[
                "Proof of Aadhaar number necessary for receipt of certain subsidies, benefits and services, etc. The Central Government or, as the case may be, the State Government may, for the purpose of establishing identity of an individual as a condition for receipt of a subsidy, benefit or service for which the expenditure is incurred from, or the receipt therefrom forms part of, the Consolidated Fund of India, ¹[or the Consolidated Fund of State] require that such individual undergo authentication, or furnish proof of possession of Aadhaar number or in the case of an individual to whom no Aadhaar number has been assigned, such individual makes an application for enrolment:",
                
                "Provided that if an Aadhaar number is not assigned to an individual, the individual shall be offered alternate and viable means of identification for delivery of the subsidy, benefit or service.",
                "","",
                "1.	Ins. by Act 14 of 2019, s. 7 (w.e.f. 25-7-2019).",
              ]
            },
            {
              name:"8. Authentication of Aadhaar number. ",details:[
                "1.The Authority shall perform authentication of the Aadhaar number of an Aadhaar number holder submitted by any requesting entity, in relation to his biometric information or demographic information, subject to such conditions and on payment of such fees and in such manner as may be specified by regulations.",
                {
                  name:"2. A requesting entity shall",
                  details:[
                    "(a) unless otherwise provided in this Act, obtain the consent of an individual ²[or in the case of a child obtain the consent of his parent or guardian] before collecting his identity information for the purposes of authentication in such manner as may be specified by regulations; and",
                    "(b) ensure that the identity information of an individual is only used for submission to the Central Identities Data Repository for authentication.",
                    "²[Provided that the requesting entity shall, in case of failure to authenticate due to illness, injury or infirmity owing to old age or otherwise or any technical or other reasons, provide such alternate and viable means of identification of the individual, as may be specified by regulations.]",
                    "",
                  ]
                },
                {
                  name:"3. A requesting entity shall inform, in such manner as may be specified by regulations, the individual submitting his identity information for authentication ²[or in the case of a child, his parent or guardian], the following details with respect to authentication, namely:",
                  details:[
                    "(a) the nature of information that may be shared upon authentication;",
                    "(b) the uses to which the information received during authentication may be put by the requesting entity; and",
                    "(c) alternatives to submission of identity information to the requesting entity",
                    
                  ]
                },
                "(4) The Authority shall respond to an authentication query with a positive, negative or any other appropriate response sharing such identity information excluding any core biometric information.",
                "","",
                "2.	Ins. by s. 8, ibid, (w.e.f. 25-7-2019).",
              ]
            },
            {
              name:"8A. Offline verification of Aadhaar number. ",
              details:
              ["³[8A. Offline verification of Aadhaar number. (1) Every offline verification of an Aadhaar number holder shall be performed in accordance with the provisions of this section.",
              {
                name:"2. Every offline verification-seeking entity shall,",
                details:["(a) before performing offline verification, obtain the consent of an individual, or in the case of a child, his parent or guardian, in such manner as may be specified by regulations; and",
                "(b) ensure that the demographic information or any other information collected from the individual for offline verification is only used for the purpose of such verification.",
              ]
              },
              {
                name:"3. An offline verification-seeking entity shall inform the individual undergoing offline verification, or in the case of a child, his parent or guardian, the following details with respect to offline verification, in such manner as may be specified by regulations, namely:",
                details:["(a) the nature of information that may be shared upon offline verification;",
                "(b) the uses to which the information received during offline verification may be put by the offline verification-seeking entity; and",
                "(c) alternatives to submission of information requested for, if any.",
              ]
              },
              {
                name:"4. No offline verification-seeking entity shall",
                details:["(a) subject an Aadhaar number holder to authentication;",
                "(b) collect, use, or store an Aadhaar number or biometric information of any individual for any purpose;",
                "(c) take any action contrary to any obligation on it as may be specified by regulations.]",
              ]
              },
              "","",
              "3.	Ins. by s. 9, ibid, (w.e.f. 25-7-2019).",             
            ],
            },
            { name: "9. Aadhaar number not evidence of citizenship or domicile, etc", details: ["The Aadhaar number or the authentication thereof shall not, by itself, confer any right of, or be proof of, citizenship or domicile in respect of an Aadhaar number holder.",] },
            { name: "10. Central Identities Data Repository", details: ["The Authority may engage one or more entities to establish and maintain the Central Identities Data Repository and to perform any other functions as may be specified by regulations.",] },
          ]
       },
       {
        name:"4. Unique Identification Authorityof India",
        sections:[
          {
            name:"11.	Establishment of Authority",
            details:[
              "1. The Central Government shall, by notification, establish an Authority to be known as the Unique Identification Authority of India to be responsible for the processes of enrolment and authentication and perform such other functions assigned to it under this Act.",

              "2. The Authority shall be a body corporate by the name aforesaid, having perpetual succession and a common seal, with power, subject to the provisions of this Act, to acquire, hold and dispose of property, both movable and immovable, and to contract, and shall, by the said name, sue or be sued.",

              "3. The head office of the Authority shall be in New Delhi.",

              "4. The Authority may, with the prior approval of the Central Government, establish its offices at other places in India.",
            ]
          },
          {
            name:"12.	Composition of Authority. ",details:[
              "The Authority shall consist of a Chairperson, appointed on part-time or full-time basis, two part-time Members, and the chief executive officer who shall be Member-Secretary of the Authority, to be appointed by the Central Government",
            ]
          },
          {
            name:"13.	Qualifications for appointment of Chairperson and Members of Authority. ",
            details:[
            "The Chairperson and Members of the Authority shall be persons of ability and integrity having experience and knowledge of at least ten years in matters relating to technology, governance, law, development, economics, finance, management, public affairs or administration",]
          },
          { name: "14. Term of office and other conditions of service of Chairperson and Members.",
           details: ["1. The Chairperson and the Members appointed under this Act shall hold office for a term of three years from the date on which they assume office and shall be eligible for re-appointment:",
          "2. The Chairperson and every Member shall, before entering office, make and subscribe to, an oath of office and of secrecy, in such form and in such manner and before such Authority as may be prescribed.",
          {
            name:"3. Notwithstanding anything contained in sub-section (1), the Chairperson or Member may",
            details:[
              "(a) relinquish his office, by giving in writing to the Central Government, a notice of not less than thirty days; or",
              "(b) be removed from his office in accordance with the provisions of section 15.",
            ]
          },
          "4. The salaries and allowances payable to, and the other terms and conditions of service of, the Chairperson and allowances or remuneration payable to part-time Members shall be such as may be prescribed.",

        ]
         },
          { name: "15. Removal of Chairperson and Members.",       

            details: [
              {
                name:"1. The Central Government may remove from office, the Chairperson, or a Member, who",
                details:[
                  "(a) is, or at any time has been adjudged as insolvent;",
                  "(b) has become physically or mentally incapable of acting as the Chairperson or, as the case may be, a Member;",
                  "(c) has been convicted of an offence which, in the opinion of the Central Government, involves moral turpitude;",
                  "(d) has acquired such financial or other interest as is likely to affect prejudicially his functions as the Chairperson or, as the case may be, a Member; or",
                  "(e) has, in the opinion of the Central Government, so abused his position as to render his continuance in office detrimental to the public interest.",
                ]
              },
              "(2) The Chairperson or a Member shall not be removed under clause (b), clause (d) or clause (e) of sub-section (1) unless he has been given a reasonable opportunity of being heard.",
            ]
         },
          {name:"16. Restrictions on Chairperson or Members on employment after cessation of office.",
          details:[
            {
              name:"The Chairperson or a Member on ceasing to hold office for any reason, shall not, without previous approval of the Central Government,",
              details:[
                "(a) accept any employment in, or be connected with the management of any organisation, company or any other entity which has been associated with any work done or contracted out by the Authority, whether directly or indirectly, during his tenure as Chairperson or Member, as the case may be, for a period of three years from the date on which he ceases to hold office:",
                "Provided that nothing contained in this clause shall apply to any employment under the Central Government or a State Government or local authority or in any statutory authority or any corporation established by or under any Central, State or provincial Act or a Government Company, as defined in clause (45) of section 2 of the Companies Act, 2013 (18 of 2013);",
                "(b) act, for or on behalf of any person or organisation in connection with any specific proceeding or transaction or negotiation or a case to which the Authority is a party and with respect to which the Chairperson or such Member had, before cessation of office, acted for or provided advice to, the Authority;",
                "(c) give advice to any person using information which was obtained in his capacity as the Chairperson or a Member and being unavailable to or not being able to be made available to the public; or",
                "(d) enter, for a period of three years from his last day in office, into a contract of service with, accept an appointment to a board of directors of, or accept an offer of employment with, an entity with which he had direct and significant official dealings during his term of office.",
              ]
            }
          ]},
          {name:"17. Functions of Chairperson.",details:["The Chairperson shall preside over the meetings of the Authority, and without prejudice to any provision of this Act, exercise and discharge such other powers and functions of the Authority as may be prescribed.",]},
          {name:"18. Chief executive officer.",
          details:[
            "1. There shall be a chief executive officer of the Authority, not below the rank of Additional Secretary to the Government of India, to be appointed by the Central Government.",
            {
              name:"2. The chief executive officer shall be the legal representative of the Authority and shall be responsible for",
              details:[
                "(a) the day-to-day administration of the Authority;",
                "(b) implementing the work programmes and decisions adopted by the Authority;",
                "(c) drawing up of proposal for the Authority's decisions and work programmes;",
                "(d) the preparation of the statement of revenue and expenditure and the execution of the budget of the Authority; and",
                "(e) performing such other functions, or exercising such other powers, as may be specified by regulations.",
              ]
            },
            {
              name:"3. Every year, the chief executive officer shall submit to the Authority for approval",
              details:[
                "(a) a general report covering all the activities of the Authority in the previous year;",
                "(b) programmes of work;",
                "(c) the annual accounts for the previous year; and",
                "(d) the budget for the coming year.",
              ]
            },
          "The chief executive officer shall have administrative control over the officers and other employees of the Authority.",
          ]},
          {name:"19. Meetings of Authority.",details:[
            "1. The Authority shall meet at such times and places and shall observe such rules of procedure in regard to the transaction of business at its meetings, including quorum at such meetings, as may be specified by regulations.",
            "2. The Chairperson, or, if for any reason, he is unable to attend a meeting of the Authority, the senior most Member shall preside over the meetings of the Authority",
            "3. All questions which come up before any meeting of the Authority shall be decided by a majority of votes by the Members present and voting and in the event of anequality of votes, the Chairperson or in his absence the presiding Member shall have a casting vote",
            "4. All decisions of the Authority shall be signed by the Chairperson or any other Member or the Member-Secretary authorised by the Authority in this behalf.",
            "5. If any Member, who is a director of a company and who as such director, has any direct or indirect pecuniary interest in any manner coming up for consideration at a meeting of the Authority, he shall, as soon as possible after relevant circumstances have come to his knowledge, disclose the nature of his interest at such meeting and such disclosure shall be recorded in the proceedings of the Authority, and the Member shall not take part in any deliberation or decision of the Authority with respect to that matter",
          ]},
          {name:"20. Vacancies, etc., not to invalidate proceedings of Authority.",
          details:[
            {
              name:"No act or proceeding of the Authority shall be invalid merely by reason of",
              details:[
                "(a) any vacancy in, or any defect in the constitution of, the Authority;",
                "(b) any defect in the appointment of a person as Chairperson or Member of the Authority; or ",
                "(c) any irregularity in the procedure of the Authority not affecting the merits of the case.",
              ]
            }
          ]},
          {name:"21. Officers and other employees of Authority.",details:[
            "¹[Officers and other employees of Authority. (1) The Authority shall appoint such officers and employees as may be required for the discharge of its functions under this Act.",
            "(2) The salaries and allowances payable to, and the other terms and conditions of service of, the officers and employees of the Authority shall be such as may be specified by regulations.]",
            "1. Subs. by Act 14 of 2019, s. 10, for section 21 (w.e.f. 25-7-2019).",

          ]},
          {name:"22. Transfer of assets, liabilities of Authority.",
          details:[
            {
              name:"On and from the establishment of the Authority",
              details:[
                "(a) all the assets and liabilities of the Unique Identification Authority of India, established vide notification of the Government of India in the Planning Commission number A-43011/02/2009-Admin. I, dated the 28th January, 2009, shall stand transferred to, and vested in, the Authority.",
                "Explanation. The assets of such Unique Identification Authority of India shall be deemed to include all rights and powers, and all properties, whether movable or immovable, including, in particular, cash balances, deposits and all other interests and rights in, or arising out of, such properties as may be in the possession of such Unique Identification Authority of India and all books of account and other documents relating to the same; and liabilities shall be deemed to include all debts, liabilities and obligations of whatever kind;",
                "(b) without prejudice to the provisions of clause (a), all data and information collected during enrolment, all details of authentication performed, debts, obligations and liabilities incurred, all contracts entered into and all matters and things engaged to be done by, with or for such Unique Identification Authority of India immediately before that day, for or in connection with the purpose of the said Unique Identification Authority of India, shall be deemed to have been incurred, entered into or engaged to be done by, with or for, the Authority;",
                "(c) all sums of money due to the said Unique Identification Authority of India immediately before that day shall be deemed to be due to the Authority; and",
                "(d) all suits and other legal proceedings instituted or which could have been instituted by or against such Unique Identification Authority of India immediately before that day may be continued or may be instituted by or against the Authority.",

              ]
            }
          ]},
          {name:"23. Powers and functions of Authority.",details:[
            "1. The Authority shall develop the policy, procedure and systems for issuing Aadhaar numbers to individuals and perform authentication thereof under this Act.",
            {
              name:"2. Without prejudice to sub-section (1), the powers and functions of the Authority, inter alia, include",
              details:[
                "(a) specifying, by regulations, demographic information and biometric information required for enrolment and the processes for collection and verification thereof;",
                "(b) collecting demographic information and biometric information from any individual seeking an Aadhaar number in such manner as may be specified by regulations;",
                "(c) appointing of one or more entities to operate the Central Identities Data Repository; ",
                "(d) generating and assigning Aadhaar numbers to individuals; ",
                "(e) performing authentication of Aadhaar numbers;",
                "(f) maintaining and updating the information of individuals in the Central Identities Data Repository in such manner as may be specified by regulations;",
                "(g) omitting and deactivating of an Aadhaar number and information relating thereto in such manner as may be specified by regulations;",
                "(h) specifying the manner of use of Aadhaar numbers for the purposes of providing or availing of various subsidies, benefits, services and other purposes for which Aadhaar numbers may be used;",
                "(i) specifying, by regulations, the terms and conditions for appointment of Registrars, enrolling agencies and service providers and revocation of appointments thereof;",
                "(j) establishing, operating and maintaining of the Central Identities Data Repository;",
                "(k) sharing, in such manner as may be specified by regulations, the information of Aadhaar number holders, subject to the provisions of this Act;",
                "(l) calling for information and records, conducting inspections, inquiries and audit of the operations for the purposes of this Act of the Central Identities Data Repository, Registrars, enrolling agencies and other agencies appointed under this Act;",
                "(m) specifying, by regulations, various processes relating to data management, security protocols and other technology safeguards under this Act;",
                "(n) specifying, by regulations, the conditions and procedures for issuance of new Aadhaar number to existing Aadhaar number holder;",
                "(o) levying and collecting the fees or authorising the Registrars, enrolling agencies or other service providers to collect such fees for the services provided by them under this Act in such manner as may be specified by regulations;",
                "(p) appointing such committees as may be necessary to assist the Authority in discharge of its functions for the purposes of this Act;",
                "(q) promoting research and development for advancement in biometrics and related areas, including usage of Aadhaar numbers through appropriate mechanisms;",
                "(r) evolving of, and specifying, by regulations, policies and practices for Registrars, enrolling agencies and other service providers;",
                "(s) setting up facilitation centres and grievance redressal mechanism for redressal of grievances of individuals, Registrars, enrolling agencies and other service providers;",
                "(t) such other powers and functions as may be prescribed.",
                
              ]
            },
            {
              name:"3. The Authority may,",
              details:[
                "(a) enter into Memorandum of Understanding or agreement, as the case may be, with the Central Government or State Governments or Union territories or other agencies for the purpose of performing any of the functions in relation to collecting, storing, securing or processing of information or delivery of Aadhaar numbers to individuals or performing authentication;",
                "(b) by notification, appoint such number of Registrars, engage and authorise such agencies to collect, store, secure, process information or do authentication or perform such other functions in relation thereto, as may be necessary for the purposes of this Act.",         
              ]
            },
            "4. The Authority may engage such consultants, advisors and other persons as may be required for efficient discharge of its functions under this Act on such allowances or remuneration and terms and conditions as may be specified by contract.",
          ]},
          {name:"23A. Power of Authority to issue directions.",details:[
            "¹[23A. Power of Authority to issue directions. (1) The Authority may for the discharge of its functions under this Act, or any rules or regulations made there under, by order, issue such directions from time to time to any entity in the Aadhaar ecosystem, as it may consider necessary.",
            "(2) Every direction issued under sub-section (1) shall be complied with by the entity in the Aadhaar ecosystem to whom such direction is issued.]",

            "1. Ins. by Act 14 of 2019, s. 11 (w.e.f. 25-7-2019).",
          ]},
        ]  
      },
      {
        name:"5. Grants, Accountsand Auditand Annual Report",
        sections:[
          {
            name:"24.	Grants by Central Government.",
            details:["The Central Government may, after due appropriation made by Parliament by law in this behalf, make to the Authority, grants of such sums of money as the Central Government may think fit for being utilised for the purposes of this Act",]},
          {name:"25. Fund.",details:[
            {
              name:"¹[25. Fund. (1) There shall be constituted a Fund to be called the Unique Identification Authority of India Fund and there shall be credited thereto",
              details:[
                "(a) all grants, fees and charges received by the Authority under this Act; and",
                "(b) all sums received by the Authority from such other sources as may be decided upon by the Central Government.",
              ]
            },
            {
              name:"2. The Fund shall be applied for meeting",
              details:[
                "(a) the salaries and allowances payable to the Chairperson and members and administrative expenses including the salaries, allowances and pension payable to or in respect of officers and other employees of the Authority; and",
                "(b) the expenses on objects and for purposes authorised by this Act.]",
              ]
            },
          ]},
          {name:"26. Accounts and audit.",details:[
            "1. The Authority shall maintain proper accounts and other relevant records and prepare an annual statement of accounts in such form as may be prescribed by the Central Government in consultation with the Comptroller and Auditor-General of India",
              "2. The accounts of the Authority shall be audited annually by the Comptroller and Auditor-General of India at such intervals as may be specified by him and any expenditure incurred in connection with such audit shall be payable by the Authority to the Comptroller and Auditor-General",
              "3. The Comptroller and Auditor-General of India and any person appointed by him in connection with the audit the accounts of the Authority under this Act shall have the same rights and privileges and authority in connection with such audit as the Comptroller and Auditor -General generally has in connection with the audit of Government accounts, and in particular, shall have the right to demand production of books, accounts, connected vouchers and other documents and papers, and to inspect any of the offices of the Authority",
              "4. The accounts of the Authority, as certified by the Comptroller and Auditor-General of India or any other person appointed by him in this behalf, together with the audit report thereon shall be forwarded annually to the Central Government by the Authority and the Central Government shall cause the audit report to be laid, as soon as may be after it is received, before each House of Parliament",
          ]},
          {name:"27. Returns and annual report, etc.",details:[
            "1. The Authority shall furnish to the Central Government at such time and in such form and manner as may be prescribed or as the Central Government may direct, such returns and statements and particulars in regard to any matter under the jurisdiction of the Authority, as the Central Government may from time to time require.",
            {
              name:"2. The Authority shall prepare, once in every year, and in such form and manner and at such time as may be prescribed, an annual report giving",
              details:[
                "(a) a description of all the activities of the Authority for the previous years;",
                "(b) the annual accounts for the previous year; and",
                "(c) the programmes of work for coming year.",
              ]
            },
            "(3) A copy of the report received under sub-section (2) shall be laid by the Central Government, as soon as may be after it is received, before each House of Parliament.",
          ]},
        ]  
      },
      {
        name:"6. Protectionof Information",
        sections:[
         {
           name:"28. Security and confidentiality of information.",
            details:[
              "1. The Authority shall ensure the security of identity information and authentication records of individuals",
              "2. Subject to the provisions of this Act, the Authority shall ensure confidentiality of identity information and authentication records of individuals.",
              "3. The Authority shall take all necessary measures to ensure that the information in the possession or control of the Authority, including information stored in the Central Identities Data Repository, is secured and protected against access, use or disclosure not permitted under this Act or regulations made thereunder, and against accidental or intentional destruction, loss or damage",
              {
                name:"4. Without prejudice to sub-sections (1) and (2), the Authority shall",
                details:[
                "(a) adopt and implement appropriate technical and organisational security measures;",
                "(b) ensure that the agencies, consultants, advisors or other persons appointed or engaged for performing any function of the Authority under this Act, have in place appropriate technical and organisational security measures for the information; and",
                "(c) ensure that the agreements or arrangements entered into with such agencies, consultants, advisors or other persons, impose obligations equivalent to those imposed on the Authority under this Act, and require such agencies, consultants, advisors and other persons to act only on instructions from the Authority.",
                ]
              },
              "(5) Notwithstanding anything contained in any other law for the time being in force, and save as otherwise provided in this Act, the Authority or any of its officers or other employees or any agency that maintains the Central Identities Data Repository shall not, whether during his service or thereafter, reveal any information stored in the Central Identities Data Repository or authentication record to anyone:",
              "Provided that an Aadhaar number holder may request the Authority to provide access to his identity information excluding his core biometric information in such manner as may be specified by regulations.",
            ]},
          {name:"29. Restriction on sharing information.",details:[
            {
              name:"1. No core biometric information, collected or created under this Act, shall be",
              details:[
                "(a) shared with anyone for any reason whatsoever; or",
                "(b) used for any purpose other than generation of Aadhaar numbers and authentication under this Act.",
              ]
            },
            "2. The identity information, other than core biometric information, collected or created under this Act may be shared only in accordance with the provisions of this Act and in such manner as may be specified by regulations.",
            {
              name:"¹[(3) No identity information available with a requesting entity or offline verification-seeking entity shall be",
              details:[
                "(a) used for any purpose, other than the purposes informed in writing to the individual at the time of submitting any information for authentication or offline verification; or",
                "(b) disclosed for any purpose, other than purposes informed in writing to the individual at the time of submitting any information for authentication or offline verification:",
                "Provided that the purposes under clauses (a) and (b) shall be in clear and precise language understandable to the individual.]",
              ]
            },
            "No Aadhaar number ¹[, demographic information or photograph] collected or created under this Act in respect of an Aadhaar number holder shall be published, displayed or posted publicly, except for the purposes as may be specified by regulations.",
            "1. Subs. by Act 14 of 2019, s. 13, for sub-section (3) (w.e.f. 25-7-2019).",
          ]},
          {name:"30. Biometric information deemed to be sensitive personal information.",details:[
            {
              name:"The biometric information collected and stored in electronic form, in accordance with this Act and regulations made thereunder, shall be deemed to be 'electronic record' and 'sensitive personal data or information', and the provisions contained in the Information Technology Act, 2000 (21 of 2000) and the rules made thereunder shall apply to such information, in addition to, and to the extent not in derogation of the provisions of this Act.",
              details:[
                "Explanation.	For the purposes of this section, the expressions",
                "(a) 'electronic form' shall have the same meaning as assigned to it in clause (r) of sub-section (1) of section 2 of the Information Technology Act, 2000 (21 of 2000);",
                "(b) 'electronic record' shall have the same meaning as assigned to it in clause (t) of sub-section (1) of section 2 of the Information Technology Act, 2000 (21 of 2000);",
                "(c) 'sensitive personal data or information' shall have the same meaning as assigned to it in clause (iii) of the Explanation to section 43A of the Information Technology Act, 2000 (21 of 2000).",
              ]
            },
          ]},
          {name:"31. Alteration of demographic information or biometric information.",details:[
            "1. In case any demographic information of an Aadhaar number holder is found incorrect or changes subsequently, the Aadhaar number holder shall request the Authority to alter such demographic information in his record in the Central Identities Data Repository in such manner as may be specified by regulations",
              "2. In case any biometric information of Aadhaar number holder is lost or changes subsequently for any reason, the Aadhaar number holder shall request the Authority to make necessary alteration in his record in the Central Identities Data Repository in such manner as may be specified by regulations",
              "3. On receipt of any request under sub-section (1) or sub-section (2), the Authority may, if it is satisfied, make such alteration as may be required in the record relating to such Aadhaar number holder and intimate such alteration to the concerned Aadhaar number holder",
              "4. No identity information in the Central Identities Data Repository shall be altered except in the manner provided in this Act or regulations made in this behalf",
          ]},
          {name:"32. Access to own information and records of requests for authentication.",details:[
            "1. The Authority shall maintain authentication records in such manner and for such period as may be specified by regulations",
              "2. Every Aadhaar number holder shall be entitled to obtain his authentication record in such manner as may be specified by regulations",
              "3. The Authority shall not, either by itself or through any entity under its control, collect, keep or maintain any information about the purpose of authentication",
          ]},
          {name:"33. Disclosure of information in certain cases.",details:[
            "(1) Nothing contained in sub-section (2) or sub-section (5) of section 28 or sub-section (2) of section 29 shall apply in respect of any disclosure of information, including identity information or authentication records, made pursuant to an order of a court not inferior to that of a ²[Judge of a High Court]:",
            "Provided that no order by the court under this sub-section shall be made without giving an opportunity of hearing to the Authority ³[and the concerned Aadhaar number holder]",
            "³[Provided further that the core biometric information shall not be disclosed under this sub-section.](2) Nothing contained in sub-section (2) or sub -section (5) of section 28 and clause (b) of sub-section (1), sub-section (2) or sub-section (3) of section 29 shall apply in respect of any disclosure of information, including identity information or authentication records, made in the interest of national security in pursuance of a direction of an officer not below the rank of ¹[Secretary] to the Government of India specially authorised in this behalf by an order of the Central Government: ",
            "Provided that every direction issued under this sub-section, shall be reviewed by an Oversight Committee consisting of the Cabinet Secretary and the Secretaries to the Government of India in the Department of Legal Affairs and the Department of Electronics and Information Technology, before it takes effect:",
            "Provided further that any direction issued under this sub-section shall be valid for a period of three months from the date of its issue, which may be extended for a further period of three months after the review by the Oversight Committee.",
            "1. Subs. by Act 14 of 2019, s. 13, for 'or core biometric information' (w.e.f. 25-7-2019).",
            "2. Subs. by s. 14, ibid., for 'District Judge' (w.e.f. 25-7-2019).",
            "3. Ins. by s. 14, ibid, (w.e.f. 25-7-2019).",
          ]},
        ]  
      },
      {
        name:"²[6A. Civil Penalties",
        sections:[
         {
           name:"33A. Penalty for failure to comply with provisions of this Act, rules, regulations and directions.",
            details:[
              "(1) Where an entity in the Aadhaar ecosystem fails to comply with the provision of this Act, the rules or regulations made there under or directions issued by the Authority under section 23A, or fails to furnish any information, document, or return of report required by the Authority, such entity shall be liable to a civil penalty which may extend to one crore rupees for each contravention and in case of a continuing failure, with additional penalty which may extend to ten lakh rupees for every day during which the failure continues after the first contravention",
              "(2) The amount of any penalty imposed under this section, if not paid, may be recovered as if it were an arrear of land revenue",

              "1. Subs. by Act 14 of 2019, s. 14, for 'Joint Secretary' (w.e.f. 25-7-2019).",
              "2. Ins. by s. 15, ibid, (w.e.f. 25-7-2019).",
            ]},
          {name:"33B. Power to adjudicate.",details:[
            "(1) For the purposes of adjudication under section 33A and imposing a penalty there under, the Authority shall appoint an officer of the Authority, who is not below the rank of a Joint Secretary to the Government of India and possessing such qualification and experience as may be prescribed, to be an Adjudicating Officer for holding an inquiry in such manner as may be prescribed.",
            "(2) No inquiry under sub-section (1) shall be initiated except by a complaint made by the Authority.",
            {
              name:"(3) While holding an inquiry, the Adjudicating Officer shall",
              details:[
                "(a) provide the entity in the Aadhaar ecosystem against whom complaint is made, an opportunity of being heard;",
                "(b) have the power to summon and enforce the attendance of any person acquainted with the facts and circumstances of the case to give evidence or to produce any document which, in the opinion of the Adjudicating Officer, may be useful for or relevant to the subject matter of the inquiry.",
              ]
            },
            "(4) If the Adjudicating Officer, on such inquiry, is satisfied that the entity in the Aadhaar ecosystem has failed to comply with any provision of this Act or the rules or regulations made there under or directions issued by the Authority under section 23A, or has failed to furnish any information, document, or return of report required by the Authority, the Adjudicating Officer may, by order, impose such penalty under section 33A as he thinks fit.",

            "1. Subs. by Act 14 of 2019, s. 14, for 'Joint Secretary' (w.e.f. 25-7-2019).",
            "2. Ins. by s. 15, ibid, (w.e.f. 25-7-2019).",
          ]
        },
          {name:"33C. Appeals to Appellate Tribunal.",details:[
            "(1) The Telecom Disputes Settlement and Appellate Tribunal established under section 14 of the Telecom Regulatory Authority of India Act, 1997 (24 of 1997), shall be Appellate Tribunal for the purposes of hearing appeals against the decision of the Adjudicating Officer under this Act",
              "(2) A person or entity in the Aadhaar ecosystem aggrieved by an order of the Adjudicating Officer under section 33B, may prefer an appeal to the Appellate Tribunal within a period of forty-five days from the date of receipt of the order appealed against, in such form and manner and accompanied with such fee as may be prescribed  Provided that the Appellate Tribunal may entertain an appeal after the expiry of the said period of forty-five days if it is satisfied that there was sufficient cause for not filing it within that period.",
              "(3) On receipt of an appeal under sub-section (2), the Appellate Tribunal may, after giving the parties to the appeal an opportunity of being heard, pass such orders thereon as it thinks fit, confirming, modifying or setting aside the order appealed against",
              "(4) The Appellate Tribunal shall send a copy of every order made by it to the parties to the appeal and to the Adjudicating Officer",
              "(5) Any appeal filed under sub-section (2) shall be dealt with by the Appellate Tribunal as expeditiously as possible and every endeavour shall be made by it to dispose of the appeal within six months from the date on which it is presented to it",
              "(6) The Appellate Tribunal may, for the purpose of deciding an appeal before it, call for the records relevant to disposing of such appeal and make such orders as it thinks fit",
              "1. Subs. by Act 14 of 2019, s. 14, for 'Joint Secretary' (w.e.f. 25-7-2019).",
              "2. Ins. by s. 15, ibid, (w.e.f. 25-7-2019).",

          ]},
          {name:"33D. Procedure and powers of the Appellate Tribunal.",details:[
            "The provisions of sections 14-I to 14K (both inclusive), 16 and 17 of the Telecom Regulatory Authority of India Act, 1997 (24 of 1997) shall, mutatis mutandis, apply to the Appellate Tribunal in the discharge of its functions under this Act, as they apply to it in the discharge of its functions under that Act",
            "1. Subs. by Act 14 of 2019, s. 14, for 'Joint Secretary' (w.e.f. 25-7-2019).",
            "2. Ins. by s. 15, ibid, (w.e.f. 25-7-2019).",

          ]},
          {name:"33E. Appeal to Supreme Court of India.",details:[
            "(1) Notwithstanding anything contained in the Code of Civil Procedure, 1908 (5 of 1908) or in any other law for the time being in force, an appeal shall lie against any order, not being an interlocutory order, of the Appellate Tribunal to the Supreme Court on any substantial question of law arising out of such order",
              "(2) No appeal shall lie against any decision or order made by the Appellate Tribunal which the parties have consented to",
              "(3) Every appeal under this section shall be preferred within a period of forty-five days from the date of the decision or order appealed against" ," Provided that the Supreme Court may entertain an appeal after the expiry of the said period of forty-five days if it is satisfied that there was sufficient cause for not filing it within that period",
              "1. Subs. by Act 14 of 2019, s. 14, for 'Joint Secretary' (w.e.f. 25-7-2019).",
              "2. Ins. by s. 15, ibid, (w.e.f. 25-7-2019).",

          ]},
          {name:"33F. Civil court not to have jurisdiction.",details:[
            " No civil court shall have jurisdiction to entertain any suit or proceeding in respect of any matter which an Adjudicating Officer appointed under this Act or the Appellate Tribunal is empowered, by or under this Act to determine, and no injunction shall be granted by any court or other authority in respect of any action taken or to be taken in pursuance of any power conferred by or under this Act",
            "1. Subs. by Act 14 of 2019, s. 14, for 'Joint Secretary' (w.e.f. 25-7-2019).",
            "2. Ins. by s. 15, ibid, (w.e.f. 25-7-2019).",

          ]},
        ]  
      },
      {
        name:"7. Offencesand Penalties",
        sections:[
         {
           name:"34. Penalty for impersonation at time of enrolment.",
            details:["Whoever impersonates or attempts to impersonate another person, whether dead or alive, real or imaginary, by providing any false demographic information or biometric information, shall be punishable with imprisonment for a term which may extend to three years or with a fine which may extend to ten thousand rupees or with both",]},
          {name:"35. Penalty for impersonation of Aadhaar number holder by changing demographic information or biometric information.",details:["Whoever, with the intention of causing harm or mischief to an Aadhaar number holder, or with the intention of appropriating the identity of an Aadhaar number holder changes or attempts to change any demographic information or biometric information of an Aadhaar number holder by impersonating or attempting to impersonate another person, dead or alive, real or imaginary, shall be punishable with imprisonment for a term which may extend to three years and shall also be liable to a fine which may extend to ten thousand rupees",]},
          {name:"36. Penalty for impersonation.",details:[
            "Whoever, not being authorised to collect identity information under the provisions of this Act, by words, conduct or demeanour pretends that he is authorised to do so, shall be punishable with imprisonment for a term which may extend to three years or with a fine which may extend to ten thousand rupees or, in the case of a company, with a fine which may extend to one lakh rupees or with both",
          ]},
          {name:"37. Penalty for disclosing identity information.",details:[
            "Whoever, intentionally discloses, transmits, copies or otherwise disseminates any identity information collected in the course of enrolment or authentication to any person not authorised under this Act or regulations made thereunder or in contravention of any agreement or arrangement entered into pursuant to the provisions of this Act, shall be punishable with imprisonment for a term which may extend to three years or with a fine which may extend to ten thousand rupees or, in the case of a company, with a fine which may extend to one lakh rupees or with both",
          ]},
          {name:"38. Penalty for unauthorised access to the Central Identities Data Repository.",details:[
            {
              name:"Whoever, not being authorised by the Authority, intentionally,",
              details:[
                "(a) accesses or secures access to the Central Identities Data Repository;",
                "(b) downloads, copies or extracts any data from the Central Identities Data Repository or stored in any removable storage medium;",
                "(c) introduces or causes to be introduced any virus or other computer contaminant in the Central Identities Data Repository;",
                "(d) damages or causes to be damaged the data in the Central Identities Data Repository; ",
                "(e) disrupts or causes disruption of the access to the Central Identities Data Repository;",
                "(f) denies or causes a denial of access to any person who is authorised to access the Central Identities Data Repository;",
                "(g) reveals any information in contravention of sub-section (5) of section 28, or shares, uses or displays information in contravention of section 29 or assists any person in any of the aforementioned acts;",
                "(h) destroys, deletes or alters any information stored in any removable storage media or in the Central Identities Data Repository or diminishes its value or utility or affects it injuriously by any means; or",
                "(i) steals, conceals, destroys or alters or causes any person to steal, conceal, destroy or alter any computer source code used by the Authority with an intention to cause damage,shall be punishable with imprisonment for a term which may extend to three years 1[ten years] and shall also be liable to a fine which shall not be less than ten lakh rupees.",
                "Explanation. For the purposes of this section, the expressions 'computer contaminant', 'computer virus' and 'damage' shall have the meanings respectively assigned to them in the Explanation to section 43 of the Information Technology Act, 2000 (21 of 2000), and the expression 'computer source code' shall have the meaning assigned to it in the Explanation to section 65 of the said Act.",
              ]
            },
            "1. Subs. by Act 14 of 2019, s. 16 for 'three years' (w.e.f. 25-7-2019).",
          ]},
          {name:"39. Penalty for tampering with data in Central Identities Data Repository.",details:["Whoever, not being authorised by the Authority, uses or tampers with the data in the Central Identities Data Repository or in any removable storage medium with the intent of modifying information relating to Aadhaar number holder or discovering any information thereof, shall be punishable with imprisonment for a term which may extend to ²[ten years] and shall also be liable to a fine which may extend to ten thousand rupees",
        
         "2. Subs. by s. 17, ibid., (w.e.f. 25-7-2019)."]},
          {name:"³[40. Penalty for unauthorised use by requesting entity or offline verification-seeking entity.",details:[
            {
              name:"Whoever,",
              details:[
                "(a) being a requesting entity, uses the identity information of an individual in contravention of sub-section (2) of section 8; or",
                "(b) being an offline verification-seeking entity, uses the identity information of an individual in contravention of sub-section (2) of section 8A, shall be punishable with imprisonment which may extend to three years or with a fine which may extend to ten thousand rupees or, in the case of a company, with a fine which may extend to one lakh rupees or with both.]",

                "3. Subs. by s. 18, for section 40 (w.e.f. 25-7-2019).",
              ]
            },
          ]},
          {name:"41. Penalty for non-compliance with intimation requirements.",details:["Whoever, being an enrolling agency or a requesting entity, fails to comply with the requirements of sub-section (2) of section 3 or sub-section (3) of section 8, shall be punishable with imprisonment which may extend to one year or with a fine which may extend to ten thousand rupees or, in the case of a company, with a fine which may extend to one lakh rupees or with both",]},
          {name:"42. General penalty.",details:["Whoever commits an offence under this Act or any rules or regulations made thereunder for which no specific penalty is provided elsewhere than this section, shall be punishable with imprisonment for a term which may extend to ⁴[three year] or with a fine which may extend to twenty-five thousand rupees or, in the case of a company, with a fine which may extend to one lakh rupees, or with both.",
          "4. Subs. by s. 19, for 'One year' (w.e.f. 25-7-2019).",]},
          {name:"43. Offences by companies.",details:[" (1) Where an offence under this Act has been committed by a company, every person who at the time the offence was committed was in charge of, and was responsible to, the company for the conduct of the business of the company, as well as the company, shall be deemed to be guilty of the offence and shall be liable to be proceeded against and punished accordingly:",
          "Provided that nothing contained in this sub -section shall render any such person liable to any punishment provided in this Act if he proves that the offence was committed without his knowledge or that he had exercised all due diligence to prevent the commission of such offence.",
          {
            name:"(2) Notwithstanding anything contained in sub-section (1), where any offence under this Act has been committed by a company and it is proved that the offence has been committed with the consent or connivance of, or is attributable to, any neglect on the part of any director, manager, secretary or other officer of the company, such director, manager, secretary or other officer shall also be deemed to be guilty of the offence and shall be liable to be proceeded against and punished accordingly.",
            details:[
              "Explanation.	For the purposes of this section",
              "(a) 'company' means any body corporate and includes a firm or other association of individuals; and",
              "(b) 'director', in relation to a firm, means a partner in the firm.",
            ]
          }]},
          {name:"44. Act to apply for offence or contravention committed outside India.",details:[
            "(1) Subject to the provisions of sub-section (2), the provisions of this Act shall apply also to any offence or contravention committed outside India by any person, irrespective of his nationality",
              "(2) For the purposes of sub-section (1), the provisions of this Act shall apply to any offence or contravention committed outside India by any person, if the act or conduct constituting the offence or contravention involves any data in the Central Identities Data Repository."
          ]},
          {name:"45. Power to investigate offences.",details:["Notwithstanding anything contained in the Code of Criminal Procedure, 1973 (2 of 1974), a police officer not below the rank of Inspector of Police shall investigate any offence under this Act"]},
          {name:"46. Penalties not to interfere with other punishments.",details:["No penalty imposed under this Act shall prevent the imposition of any other penalty or punishment under any other law for the time being in force"]},
          {name:"47. Cognizance of offences.",details:["(1) No court shall take cognizance of any offence punishable under this Act, save on a complaint made by the Authority or any officer or person authorised by it." ,"¹[Provided that the court may, on a complaint made by an Aadhaar number holder or individual take cognizance of any offence punishable under section 34 or 35 or 36 or 37 or 40 or section 41.] ",
          "(2) No court inferior to that of a Chief Metropolitan Magistrate or a Chief Judicial Magistrate shall try any offence punishable under this Act.",
          "1.	Ins. by Act 14 of 2019, s. 21 (w.e.f. 25-7-2019).",]},
        ]  
      },
      {
        name:"8. Miscellaneous",
        sections:[
         {
           name:"48.	Power of Central Government to supersede Authority.",
            details:[
            {
              name:"(1) If, at any time, the Central Government is of the opinion,",
              details:[
                "(a) that, on account of circumstances beyond the control of the Authority, it is unable to discharge the functions or perform the duties imposed on it by or under the provisions of this Act; or",
                "(b) that the Authority has persistently defaulted in complying with any direction given by the Central Government under this Act or in the discharge of the functions or performance of the duties imposed on it by or under the provisions of this Act and as a result of such default the financial position of the Authority or the administration of the Authority has suffered; or",
                "(c) that a public emergency exists, the Central Government may, by notification, supersede the Authority for such period, not exceeding six months, as may be specified in the notification and appoint a person or persons as the President may direct to exercise powers and discharge functions under this Act:",
                "Provided that before issuing any such notification, the Central Government shall give a reasonable opportunity to the Authority to make representations against the proposed supersession and shall consider the representations, if any, of the Authority.",
              ]
            },
            {
              name:"(2) Upon the publication of a notification under sub-section (1), superseding the Authority,",
              details:[
                "(a) the Chairperson and other Members shall, as from the date of supersession, vacate their offices as such;",
                "(b) all the powers, functions and duties which may, by or under the provisions of this Act, be exercised or discharged by or on behalf of the Authority shall, until the Authority is reconstituted under sub-section (3), be exercised and discharged by the person or persons referred to in sub-section (1); and",
                "(c) all properties owned or controlled by the Authority shall, until the Authority is reconstituted under sub-section (3), vest in the Central Government.",
              ]
            },
            "(3) On or before the expiration of the period of supersession specified in the notification issued under sub-section (1), the Central Government shall reconstitute the Authority by a fresh appointment of its Chairperson and other Members and in such case any person who had vacated his office under clause (a) of sub-section (2) shall not be deemed to be disqualified for reappointment.",
            "(4) The Central Government shall cause a copy of the notification issued under sub-section (1) and a full report of any action taken under this section and the circumstances leading to such action to be laid before each House of Parliament at the earliest.",
          ]},
          {name:"49.	Members, officers, etc., to be public servants.",details:["The Chairperson, Members, officers and other employees of the Authority shall be deemed, while acting or purporting to act in pursuance of any of the provisions of this Act, to be public servants within the meaning of section 21 of the Indian Penal Code (45 of 1860).",]},
          {name:"50.	Power of Central Government to issue directions.",details:[
            "(1) Without prejudice to the foregoing provisions of this Act, the Authority shall, in exercise of its powers or the performance of its functions under this Act be bound by such directions on questions of policy, as the Central Government may give, in writing to it, from time to time:",
            "Provided that the Authority shall, as far as practicable, be given an opportunity to express its views before any direction is given under this sub-section:",
            "Provided further that nothing in this section shall empower the Central Government to issue directions pertaining to technical or administrative matters undertaken by the Authority.",
            "(2) The decision of the Central Government, whether a question is one of policy or not, shall be final.",
          ]},
          {name:"¹[50A. Exemption from tax on income.",details:["¹[50A. Exemption from tax on income. Notwithstanding anything contained in the Income-tax Act, 1961 (43 of 1961) or any other enactment for the time being in force relating to tax on income, profits or gains, the Authority shall not be liable to pay income-tax or any other tax in respect of its income, profits or gains.]",
          "1.	Ins. by Act 14 of 2019, s. 21 (w.e.f. 25-7-2019).",]},
          {name:"51.	Delegation",details:["The Authority may, by general or special order in writing, delegate to any ²[Member or officer] of the Authority or any other person, subject to such conditions, if any, as may be specified in the order, such of its powers and functions under this Act (except the power under section 54) as it may deem necessary. ",
        
          "2. Subs. by s. 22, ibid., for 'Member, officer'(w.e.f. 25-7-2019)",]},
          {name:"52.	Protection of action taken in good faith.",details:["No suit, prosecution or other legal proceeding shall lie against the Central Government or the Authority or the Chairperson or any Member or any officer, or other employees of the Authority for anything which is in good faith done or intended to be done under this Act or the rule or regulation made thereunder.",]},
          {name:"53.	Power of Central Government to make rules.",details:[
            "(1) The Central Government may, by notification, make rules to carry out the provisions of this Act.",
            {
              name:"(2) In particular, and without prejudice to the generality of the foregoing power, such rules may provide for all or any of the following matters, namely:",
              details:[
                "(a) the form and manner in which and the authority before whom the oath of office and of secrecy is to be subscribed by the Chairperson and Members under sub-section (2) of section 14;",
                "³[(aa) the purpose for which the requesting entity may be allowed by the Authority to perform authentication under sub-clause (ii) of clause (b) of sub-section (4) of section 4;]",
                "(b) the salary and allowances payable to, and other terms and conditions of service of, the Chairperson and the allowances or remuneration payable to Members of the Authority under sub-section (4) of section 14;",
                "(c) the other powers and functions of the Chairperson of the Authority under section 17; ",
                "(d) the other powers and functions of the Authority under clause (t) of sub-section (2) of section 23;",
                "(e) the form of annual statement of accounts to be prepared by Authority under sub-section (1) of section 26;",
                "(f) the form and the manner in which and the time within which returns and statements and particulars are to be furnished under sub-section (1) of section 27;",
                "(g) the form and the manner and the time at which the Authority shall furnish annual report under sub-section (2) of section 27;",
                "¹[(ga) the qualification and experience of, and the manner of appointment of, the Adjudicating Officer under sub-section (1) of section 33B;",
                "(gb) the form, manner, and fee for an appeal to be filed under sub-section (2) of section 33C;]",
                "(h) any other matter which is required to be, or may be, prescribed, or in respect of which provision is to be or may be made by rules.",
              ]
            },
            "1. Ins. by Act 14 of 2019, s. 23 (w.e.f. 25-7-2019).",

            "3. Ins. by s. 23, ibid, (w.e.f. 25-7-2019).",
          ]},
          {name:"54.	Power of Authority to make regulations.",details:[
            "(1) The Authority may, by notification, make regulations consistent with this Act and the rules made thereunder, for carrying out the provisions of this Act.",
            {
              name:"(2) In particular, and without prejudice to the generality of the foregoing power, such regulations may provide for all or any of the following matters, namely:",
              details:[
                "²[(a) the entities or group of entities in the Aadhaar ecosystem under clause (aa), the biometric information under clause (g) and the demographic information under clause (k), the process of collecting demographic information and biometric information from the individuals by enrolling agencies under clause (m), and the modes of offline verification of Aadhaar number holder under clause (pa) of section 2;]",
                "(b) the manner of verifying the demographic information and biometric information for issue of Aadhaar number under sub-section (3) of section 3;",
                "³[(ba) the manner of generating an alternative virtual identity under sub-section (4) of section 3;",
                "(bb) the manner in which cancellation of an Aadhaar number may be carried out under sub-section (2) of section 3A;]",
                "(c) the conditions for accepting an Aadhaar number as proof of identity of the Aadhaar number holder under sub-section (3) of section 4;",
                "³[(ca) standards of privacy and security to be complied with by the requesting entities under sub-section (4) of section 4;",
                "(cb) the classification of requesting entities under sub-section (5) of section 4;]",
                "(d) the other categories of individuals under section 5 for whom the Authority shall take special measures for allotment of Aadhaar number;",
                "(e) the manner of updating biometric information and demographic information under section 6;",
                "(f) the procedure for authentication of the Aadhaar number under section 8;",
                "¹[(fa) the alternate and viable means of identification of individual under the proviso to clause (b) of sub-section (2) of section 8;",
                "(fb) the manner of obtaining consent under clause (a) of sub-section (2), the manner of providing information to the individual undergoing offline verification under sub-section (3), and the obligations of offline verification-seeking entities under clause (c) of sub-section (4) of section 8A;]",
                "(g) the other functions to be performed by the Central Identities Data Repository under section 10;",
                "(h) the time and places of meetings of the Authority and the procedure for transaction of business to be followed by it, including the quorum, under sub-section (1) of section 19;",
                "(i) the salary and allowances payable to, and other terms and conditions of service of, the chief executive officer, officers and other employees of the Authority under sub-section (2) of section 21;",
                "(j) the demographic information and biometric information under clause (a) and the manner of their collection under clause (b) of sub-section (2) of section 23;",
                "(k) the manner of maintaining and updating the information of individuals in the Central Identities Data Repository under clause (f) of sub-section (2) of section 23;",
                "(l) the manner of omitting and deactivating an Aadhaar number and information relating thereto under clause (g) of sub-section (2) of section 23;",
                "(m) the manner of use of Aadhaar numbers for the purposes of providing or availing of various subsidies, benefits, services and other purposes for which Aadhaar numbers may be used under clause (h) of sub-section (2) of section 23;",
                "(n) the terms and conditions for appointment of Registrars, enrolling agencies and other service providers and the revocation of appointments thereof under clause (i) of sub-section (2) of section 23;",                
                "(o) the manner of sharing information of Aadhaar number holder under clause (k) of sub-section (2) of section 23;",             
                "(p) various processes relating to data management, security protocol and other technology safeguards under clause (m) of sub-section (2) of section 23;",                
                "(q) the procedure for issuance of new Aadhaar number to existing Aadhaar number holder under clause (n) of sub-section (2) of section 23;",                
                "(r) manner of authorising Registrars, enrolling agencies or other service providers to collect such fees for services provided by them under clause (o) of sub-section (2) of section 23;",              
                "(s) policies and practices to be followed by the Registrar, enrolling agencies and other service providers under clause (r) of sub-section (2) of section 23;",              
                "(t) the manner of accessing the identity information by the Aadhaar number holder under the proviso to sub-section (5) of section 28;",              
                "(u) the manner of sharing the identity information, other than core biometric information, collected or created under this Act under sub-section (2) of section 29;",
                "(v) the manner of alteration of demographic information under sub-section (1) and biometric information under sub-section (2) of section 31;",
                "(w) the manner of and the time for maintaining the request for authentication and the response thereon under sub-section (1), and the manner of obtaining, by the Aadhaar number holder, the authentication records under sub-section (2) of section 32;",
                "(x) any other matter which is required to be, or may be, specified, or in respect of which provision is to be or may be made by regulations.",
              
              ]
            },
            "---------------------------------------------------",
            "1.	Ins. by Act 14 of 2019, s. 23 (w.e.f. 25-7-2019).",
            "2.	Subs. by s. 24, ibid., for clause (a) (w.e.f. 25-7-2019).",
            "3.	Ins. by s. 24, ibid, (w.e.f. 25-7-2019). ",
          ]
        },
          {name:"55.	Laying of rules and regulations before Parliament.",details:[
            "Every rule and every regulation made under this Act shall be laid, as soon as may be after it is made, before each House of Parliament, while it is in session, for a total period of thirty days which may be comprised in one session or in two or more successive sessions, and if, before the expiry of the session immediately following the session or the successive sessions aforesaid, both Houses agree in making any modification in the rule or regulation, or both the Houses agree that the rule or regulation should not be made, the rule or regulation shall thereafter have effect only in such modified form or be of no effect, as the case may be; so, however, that any such modification or annulment shall be without prejudice to the validity of anything previously done under that rule or regulation.",
          ]},
          {name:"56.	Application of other laws not barred.",details:["The provisions of this Act shall be in addition to, and not in derogation of, any other law for the time being in force.",]},
          {name:"57.	[Omitted].",details:["57.	Act not to prevent use of Aadhaar number for other purposes under law. Omitted by the Aadhaar and Other Laws (Amendment) Act 2019 (Act 14 of 2019), s. 25 (w.e.f. 25-07-2019).",]},
          {name:"58.	Power to remove difficulties.",details:["(1) If any difficulty arises in giving effect to the provisions of this Act, the Central Government may, by order, published in the Official Gazette, make such provisions not inconsistent with the provisions of this Act as may appear to be necessary for removing the difficulty:",
          "Provided that no such order shall be made under this section after the expiry of three years from the commencement of this Act.",
          "(2) Every order made under this section shall be laid, as soon as may be after it is made, before each House of Parliament.",]},
          {name:"59.	Savings.",details:["Anything done or any action taken by the Central Government under the Resolution of the Government of India, Planning Commission bearing notification number A-43011/02/2009-Admin. I, dated the 28th January, 2009, or by the Department of Electronics and Information Technology under the Cabinet Secretariat Notification bearing notification number S.O.2492 (E), dated the 12th September, 2015, as the case may be, shall be deemed to have been validly done or taken under this Act.",]},
        ]  
      },
      ],
    },
  
    {
      name:"Academy of Scientific and Innovative Research, 2011",
      summary:
      "An Act to establish an Academy for furtherance of the advancement of learning and prosecution of research in the field of science and technology in association with Council of Scientific and Industrial Research and to declare the institution known as the Academy of Scientific and Innovative Research, to be an institution of national importance to provide for its incorporation and matters connected therewith or incidental thereto.BE it enacted by Parliament in the Sixty-second Year of the Republic of India as follows:",
      Chapters:[
        {
          name:"",
          sections:[
            {
              name:"1. Short title, extent and commencement.", details:[
                "(1) This Act may be called the Academy of Scientific and Innovative Research Act, 2011.",
                "(2) It extends to the whole of India except the State of Jammu and Kashmir.",
                "(3) It shall come into force on such date1 as the Central Government may, by notification in the Official Gazette, appoint and different dates may be appointed for different provisions of this Act.",
              ]
            },
            { name: "2.	Definitions",details: [
              {
                name:"In this Act, and in all Statutes and Ordinances made thereunder, unless the context otherwise requires,In this Act, and in all Statutes and Ordinances made thereunder, unless the context otherwise requires,",
                details:[
                  "(a) 'Academy' means the Academy of Scientific and Innovative Research established under sub-section (1) of section 3;",
                  "(b) 'Board' means the Board of Governors of the Academy of Scientific and Innovative Research referred to in section 10;",
                  "(c) 'Council of Scientific and Industrial Research' means a society registered by the name of the Council of Scientific and Industrial Research under the Societies Registration Act, 1860 (21 of 1860);",
                  "(d) 'Chairperson' means the Chairperson of the Board appointed under section 12;",
                  "(e) 'Chancellor' means the Chancellor of the Academy referred to in section 20;",
                  "(f) 'Director' means the Director of the Academy appointed under section 22;",
                  "(g) 'distinguished scientists' or 'outstanding scientists' of the Council of Scientific and Industrial Research means scientists of the Council of Scientific and Industrial Research designated as such;",
                  "(h) 'existing Academy' means the Academy of Scientific and Innovative Research established in pursuance of the Resolution of the Government of India in the Ministry of Science and Technology, Department of Scientific and Industrial Research, Council of Scientific and Industrial Research, vide No. 6/1/CSIR-Ac SIR/2010-PPD, dated the 1st July, 2010;",
                  "(i) 'Faculty of the Academy' means Academy Professors, Professors of Eminence, Distinguished Professors, Outstanding Professors, Senior Professors, Emeritus Professors, Professors, Associate Professors, Assistant Professors, visiting faculty, and such other persons as may be appointed for imparting instruction or conducting research in the Academy or institutions maintained by the Academy and includes the scientists of Council of Scientific and Industrial Research assigned for imparting instruction or conducting research;",
                  "(j) 'notification' means a notification published in the Official Gazette;",
                  "(k) 'Statutes and Ordinances' means the Statutes and the Ordinances of the Academy for the time being in force.",
                ]
              },
              "-----------------------------------------------------------------",
              "1. 3rd April, 2012 [except sub-section (2) of section 5], vide notification No. S.O. 709(E), dated 2nd April, 2012, see Gazette of India, Extraordinary, Part II, sec. 3(ii).",

              "26th June, 2013 [sub-sec. (2) of section 5], vide notification No. S.O. 1850(E), dated 26th June, 2013, see Gazette of India, Extraordinary, Part II, sec. 3(ii).",
              
              "*. Vide notification No. S.O. 3912(E), dated 30th October, 2019, this Act is made applicable to the Union territory of Jammu and Kashmir and the Union territory of Ladakh.",

            ]},
            { name: "3. Establishment of Academy of Scientific and Innovative Research",details: [
              "(1) With effect from such date as the Central Government may, by notification, appoint in this behalf, there shall be established for the purposes of this Act an Academy to be called the 'Academy of Scientific and Innovative Research' a body corporate by such name.",
              "(2) The headquarters of the Academy shall be at such place as the Central Government may, by notification, specify.",
              "(3) The Academy may have such number of regional centres and campuses, as it may deem fit.",
              "(4) The Academy shall have perpetual succession and a common seal with power, subject to the provisions of this Act, to acquire, hold and dispose of property and to contract, and shall by that name, sue and be sued.",
            ]},
            { name: "4. Object of Academy",details: [
              {
                name:"(1) The objects of the Academy shall be to:-",
                details:[
                  "(a) disseminate advanced knowledge in science and technology, by providing teaching and research facilities in such branches of learning as it may deem fit, particularly in emerging areas and such areas as may emerge in future;",
                  "(b) undertake inter-disciplinary studies and research;     ",,             
                  "(c) conduct courses in, and integrate into its courses, inter-disciplinary and multi-disciplinary areas covering natural sciences, life sciences, mathematical and computational sciences, medical sciences, engineering, applied art, humanities, social sciences, law relating to these areas and interfaces thereof; ",                
                  "(d) take appropriate measures for innovations in teaching and learning processes; ",
                  "(e) create an ambience for learning and scholarship in advanced science and technology instead of exclusively focusing on marks or grades;",
                  "(f) educate and train manpower in scientific and technological fields;                  ",
                  "(g) establish linkages with industries in India and outside India for the promotion of science and technology;",
                  "(h) collaborate, in appropriate areas in the field of science and technology, with reputed universities and institutions in India or outside India;                  ",
                  "(i) promote research in science and technology having a bearing on social, economic, cultural, intellectual and academic welfare of the people.",

                ]
              },
              "(2) The Academy shall primarily focus on research and imparting instruction in such areas as are not ordinarily taught in regular academic universities in India.",
              "(3) The curricula, pedagogy and evaluation of the Academy shall be innovative and directed towards creating highest quality personnel with cross-disciplinary knowledge, aiming to provide leaders in the field of science and technology.",

            ]},
            { name: "5.	Relationship of Academy with Council of Scientific and Industrial Research",details: [
              "(1) The Academy shall be, provided, or, allowed to use, the infrastructure and scientific manpower of the Council of Scientific and Industrial Research for teaching and research purposes for mutual benefit.",
              "(2) The Academy, within two weeks of the commencement of this Act, shall, notwithstanding anything contained in any other Act, rules, regulations or bye-laws for the time being in force, enter into a Memorandum of Understanding with the Council of Scientific and Industrial Research, for the purposes of its affiliation with the Academy for the purposes of academics, teaching and award of degrees or diplomas, and, the persons pursuing the studies in the Council for award of any degree or diploma, after entering of such Memorandum of Understanding, be awarded degrees or diplomas by the said Academy:",
              "Provided that any person pursuing any academic or research course, before the commencement of this Act, in the Council of Scientific and Industrial Research for award of any degree or diploma and registered for the said purpose with any other university, may, with the approval of the university with which such person is registered, migrate after such commencement to the Academy established under this Act and be registered with the said Academy for grant of the same degree or diploma by the Academy established under this Act and such person shall be deemed to have migrated and registered with the Academy established under this Act at the same level of study in the university from which such person migrated.",              
              "(3) Nothing contained in sub-section (1) or sub-section (2) shall be construed to affect the functions or powers of the Council of Scientific and Industrial Research, being discharged or exercised, before the commencement of this Act, by the Council or to affiliate with any other university or institution for the purposes of academics, teaching and award of degrees or diplomas or for any other purposes necessary for pursuing its objects.",
            ]},
            { name: "6. Declaration of Academy as an institution of national importance",details: ["It is hereby declared that the Academy of Scientific and Innovative Research shall be an institution of national importance.",]},
            { name: "7.	Transfer of assets, liabilities, etc., of existing Academy to Academy established under this Act and other provisions, etc",details: [
              {
                name:"(1) On and from the date of establishment of the Academy,-",
                details:[
                  "(a) any reference to the existing Academy in any law other than this Act or in any contract or other instrument shall be deemed as a reference to the Academy;",
                  "(b) all properties and assets, movable and immovable, of, or belonging to, the existing Academy, shall vest in the Academy;                  ",
                  "(c) all rights and liabilities of the existing Academy shall be transferred to, and be the rights and liabilities of, the Academy;                  ",
                  "(d) without prejudice to the provisions of clause (c), all debts, obligations and liabilities incurred, all contracts entered into and all matters and things engaged to be done by, with or for the existing Academy immediately before that date, for or in connection with the purpose of the said existing Academy shall be deemed to have been incurred, entered into or engaged to be done by, with or for, the Academy;                  ",
                  "(e) all sums of money due to the existing Academy immediately before that date shall be deemed to be due to the Academy;                  ",
                  "(f) all suits and other legal proceedings instituted or which could have been instituted by or against the existing Academy immediately before that date may be continued or may be instituted by or against the Academy;                  ",
                  "(g) every employee (including those appointed for imparting instruction or conducting research in the existing Academy) holding any office under the existing Academy or teaching therein immediately before that date shall hold his office in the Academy or continue teaching therein by the same tenure and upon the same terms and conditions of service as respects remuneration, leave, provident fund, retirement and other terminal benefits as he would have held such office if the Academy had not been established and shall continue to do so as an employee of the Academy or until the expiry of the period of six months from that date if such employee opts not to be the employee of the Academy within such period.",
                ]
              },
              "(2) Any person pursuing any academic or research course, before the commencement of this Act, in the existing Academy for award of any degree or diploma or certificate shall be entitled to pursue such academic or research course after the establishment of the Academy under this Act and be registered with the said Academy for grant of the same degree or diploma or certificate by the Academy established under this Act and such person shall be deemed to have migrated and registered with the Academy established under this Act at the same level of study in the existing Academy from which such person migrated.",
              "(3) Any person, who immediately before the commencement of this Act, had been awarded a degree or diploma or certificate for having qualified any course by the existing Academy, shall be entitled to award of equivalent degree or diploma by the Academy subject to approval by the Board of the Academy.",
              "(4) Notwithstanding anything contained in the Industrial Disputes Act, 1947 (14 of 1947) or in any other law for the time being in force, absorption of any employee by the Academy in its regular service under this section shall not entitle such employee to any compensation under that Act or other law and no such claim shall be entertained by any court, tribunal or other authority.",
            ]},
            { name: "8.	Functions and powers of Academy",details: [
              {
                name:"(1) The Academy shall discharge its functions and exercise the following powers, namely:-",
                details:[
                  "(i) to provide for instructions and conduct research in such branches of learning like natural sciences, life sciences, mathematical and computational sciences, medical sciences, engineering, applied art, humanities, social sciences,law relating to these areas and interfaces thereof, and in particular, in inter-disciplinary and multi-disciplinary areas of these branches, and in all such areas as may emerge in future and other emerging areas of knowledge, as the Academy may from time to time determine and make provision for advancement and dissemination of knowledge;",
                  "(ii)to lay administrative standards and structures and decide on all matters of creation of posts, laying down standards for recruitment, determining compensation packages, and contractual arrangements;                  ",
                  "(iii)to design its curriculum and pedagogy for award of diplomas or certificates and confer degrees or other academic distinctions as it may deem fit;                  ",
                  "(iv) to grant, subject to such conditions as the Academy may determine, diplomas or certificates and confer degrees or other academic distinctions on the basis of such methods of evaluation and to hold its examinations, as the Academy may, from time to time, determine and to withdraw any such diplomas, certificates, degrees or other academic distinctions for good and sufficient cause;",               
                  "(v) to frame Statutes and Ordinances and to alter, modify or rescind the same;                  ",
                  "(vi) toorganise and undertake extramural studies, training and extension services;                  ",
                  "(vii) to confer honorary degrees or other distinctions;                  ",
                  "(viii) to provide distance education in such branches of learning and to such persons as it may determine;                  ",
                  "(ix) to institute professorships, associate professorships and assistant professorships including Academy Professors, Professors of Eminence, Distinguished Professors, Outstanding Professors, Senior Professors, Emeritus Professors, or visiting positions and other teaching or academic or other positions, required by the Academy and to make appointments to such positions; ",                 
                  "(x) to appoint persons from any other university, or institution, or industry, or persons of eminence from appropriate fields of studies, including those outside the country, as Faculty of the Academy;                  ",
                  "(xi) to create administrative, ministerial and other posts and to make appointments thereto;                  ",
                  "(xii) to co-operate or collaborate or associate with any body including, any university or institution, or industry, located in India or outside India;                  ",
                  "(xiii) to establish such centres and specialised laboratories or other units for research and instruction as may be required;                  ",
                  "(xiv) to set up schools, centres and campuses and function therefrom or conduct classes from any place of its choice, including the premises of laboratories or other centres of the Council of Scientific and Industrial Research;      ",            
                  "(xv) to institute and award fellowships, scholarships, studentships, medals and prizes;                  ",
                  "(xvi) to conduct research, advisory and consultancy services with or for any entity, public or private, whether in India or outside India, which are in conformity with the spirit and object of the Academy;                  ",
                  "(xvii) to engage scientists of the Council of Scientific and Industrial Research as Faculty in imparting instruction and conducting research in the Academy;                  ",
                  "(xviii) to establish, maintain and manage institutions and hostels for residence of students or establish and maintain such institutions through the Council of Scientific and Industrial Research or any other body;                  ",
                  "(xix) to fix, demand and receive payment of fees and other charges;                  ",
                  "(xx) to determine the standards of admission to the Academy, which may include examination, other innovative models of testing or evaluation;                  ",
                  "(xxi) to supervise the residences of the students of the Academy and to make arrangements for promoting their health, general welfare, cultural and corporate life;                  ",
                  "(xxii) to lay down conditions of service for all categories of employees, including their code of conduct;                  ",
                  "(xxiii) to regulate and enforce discipline, among the students and employees and to take such disciplinary measures in this regard as may be necessary;                  ",
                  "(xxiv) to make arrangements for promoting the health and general welfare of the employees;                  ",
                  "(xxv) to receive grants, benefactions, donations, gifts, bequests and transfer or acquire, hold and manage and dispose of any property movable or immovable, including trust and endowment properties for the purposes of the Academy:   ",               
                  "Provided that no such grants, benefactions, donations, gifts, bequests and transfer shall be accepted by the Academy which in the opinion of the Board involves conditions or obligations opposed to the spirit and object of this Act;  ",                
                  "(xxvi) to borrow, on the security of property of the Academy or otherwise, money for the purposes of the Academy or utilise its property for such purposes as are in conformity with the spirit and object of this Act;                  ",
                  "(xxvii) to do all such other acts and things as may be necessary, incidental or conducive to the attainment of all or any of its objects.",
                ]
              },
              {
                name:"(2) In exercising its powers referred to in sub-section (1), it shall be the endeavour of the Academy to maintain an all India character and high standards of teaching and research, and, the Academy shall, among other measures which may be necessary for the said purpose, take, in particular, the following measures, namely:-",
                details:[
                  "(i) subject to the provisions of section 9, the admission of students shall be made on merit;",
                  "(ii) continuous evaluation or other innovative methods of evaluation and choice based credit system may be introduced and the Academy may enter into agreements with other universities and academic institutions in India or outside India for credit transfer and joint degree programmes;   ",               
                  "(iii) innovative courses and programmes of studies shall be introduced with a provision for periodic review and restructuring;                  ",
                  "(iv) the imparting of instruction shall be, as far as may be, through use of modern techniques or technologies;                  ",
                  "(v) the systems and structures of the Academy should be flexible to adapt to the requirements of multi-disciplinary and inter-disciplinary studies;                  ",
                  "(vi) active participation of students may be ensured in governance of academic matters of the Academy.",

                ]
              },
            ]},
            { name: "9.Academy open to all castes, creed, race or class",details: [
              "(1) The Academy shall be open to all persons, of either sex, irrespective of caste, creed, race or class, and it shall not be lawful for the Academy to adopt or impose on any person, any test whatsoever of religious belief or profession in order to be entitled to be appointed as a Faculty of the Academy or to hold any other office therein, or to be employed therein or to be admitted as a student in the Academy or to graduate thereat or to enjoy or exercise any privilege thereof.",
              "(2) The Academy shall make special provision for the employment or admission of women, persons with disabilities or of persons belonging to the weaker sections of the society and, in particular, of the Scheduled Castes, the Scheduled Tribes and the other socially and educationally backward classes of citizens and any exemption from making such reservation under the proviso to clause (b) of section 4 of the Central Educational Institutions (Reservation in Admission) Act, 2006 (5 of 2007) shall not be applicable to the Academy:  ",            
              "Provided that no such special provision shall be made on the ground of domicile.",
            ]},
            { name: "10. Authorities of Academy",details: [
              {
                name:"The following shall be the authorities of the Academy, namely:-",
                details:[
                  "(a) The Board;",
                  "(b) Senate; ",      
                  "(c) Director;",        
                  "(d) Boards of Studies;",                 
                  "(e) such other authorities as may be declared by the Statutes to be the authorities of the Academy.",
                ]
              }
            ]},
            { name: "11. Composition of Board of Governors",details: [
              {
                name:"(1) The Board referred to in clause (a) of section 10 shall consist of the following, namely:-",
                details:[
                 "(a) the Chairperson of the Board, to be appointed under section 12;",
                 "(c) the President of the Indian National Science Academy, ex officio member;                  ",
                 "(d) the Chairman, Atomic Energy Commission, Government of India, ex officio member;                  ",
                 "(e) the Chairman, Space Commission, Government of India, ex officio member;                  ",
                 "(f) the Chairman, University Grants Commission, Government of India, ex officio member;                  ",
                 "(g) the Finance Secretary in the Ministry of finance Government of India, ex officio member;               ",   
                 "(h) the heads of three premier institutions in the field of imparting education in Science and Technology,members to be nominated under section 13; ",               
                 "(i) four distinguished scientists or academicians of global eminence, of which two should be from reputed institutions outside India, members to be nominated under section 13;",       
                 "(j) three eminent industrialists or technologists, members to be nominated under section 13;               ",   
                 "(k) four distinguished scientists or outstanding scientists or Directors of laboratories of Council of Scientific and Industrial Research, members to be nominated under section 14;   ",               
                 "(l) the Director of the Academy, ex officio member.",
                 "(b) the Director-General of the Council of Scientific and Industrial Research, ex officio vice-chairperson;",
                ]
              },
              "(2) The Chairperson shall ordinarily preside over the meetings of the Board.",

              "(3) The Board may evolve its own procedure for the purpose of conducting its meetings and transacting business therein.",
              
              "(4) The Associate Director in charge of administration of the Academy shall be the Secretary of the Board.",
            ]},
            { name: "12. Appointment of Chairperson",details: [
              "(1) The Chairperson shall be appointed by the President of the Council of Scientific and Industrial Research, on the recommendation of the selection committee constituted under sub-section (2):",
              "Provided that the Director-General of the Council of Scientific and Industrial Research, being the ex officio Vice-Chairperson , as referred to in clause (b) of sub-section (1) of section 11, shall act as the Chairperson until the first Chairperson is selected and appointed in accordance with the provisions of this Act:  ",            
              "Provided further that no person shall be selected and appointed as Chairperson unless such person is an Indian citizen.              ",
              "(2) The selection committee referred to in sub-section (1) shall consist of four eminent scientists or technologists of international repute, as may be nominated by the President of the Council of Scientific and Industrial Research.              ",
              "(3) At least two eminent scientists or technologists of international repute nominated under subsection (2) shall be from the heads of international societies, academies, or similar organisations in the field of science and technology.",
              {
                name:"(4) The selection committee referred to in sub-section (2) shall-",
                details:[
                  "(a) be constituted within six months before the completion of tenure of the incumbent as the Chairperson of the Board;",
                  "(b) submit its recommendation at least three months before the completion of the tenure of the incumbent Chairperson.",
                ]
              },
              "(5) The selection committee may evolve its own procedure for the purposes of meetings and making recommendations under sub-section (1) including making recommendations in respect of a person who has not applied for the post of Chairperson.",
              "(6) Three members of the selection committee referred to in sub-section (1) shall form quorum for the meeting of the committee. ",       
              "(7) The Chairperson shall exercise such other powers and perform such other functions as may be assigned to him by this Act or the Statutes.",
            ]},
            { name: "13.Nomination of distinguished scientists or academicians of global eminence, eminent industrialists or technologists and heads of three premier institutions in the field of imparting education in science and technology",details: ["The heads of three premier institutions in the field of imparting education in science and technology, referred to in clause (h), the distinguished scientists or academicians of global eminence referred to in clause (i), and eminent industrialists or technologists referred to in clause (j), of sub-section (1) of section 11, shall be nominated, by the President of the Council of Scientific and Industrial Research.",]},
            { name: "14. Nomination of distinguished scientists or outstanding scientists of Council of Scientific and Industrial  Research or Directors of Council of Scientific and Industrial Research laboratories",details: ["The nomination of distinguished scientists or outstanding scientists of the Council of Scientific and Industrial Research or Directors of Council of Scientific and Industrial Research laboratories, referred to in clause (k) of sub-section (1) of section 11 shall be made by the Governing Body of the Council of Scientific and Industrial Research.",]},
            { name: "15. Allowances payable to members of Board",details: ["The members of the Board shall be entitled to such allowances, if any, from the Academy, as may be provided for, in the Statutes but no member other than the Director of the Academy referred to in clause (l) of sub-section (1) of section 11, shall be entitled to any salary by reason of this section.",]},
            { name: "16. Term of office of members of Board",details: [
              "(1) Save as otherwise provided in this section, term of office of the Chairperson or any other nominated member of the Board shall be four years, being one term of the Board and they shall not be eligible to be re-appointed as Chair person or nominated as a member, as the case may be.",
              "Explanation I.- The period of term of office of the Chairperson or any other nominated member of the Board [other than ex officio Vice-Chairperson and ex officio members and nominated members under clause (k) of sub-section (1) of section 11] of the existing Academy shall be counted for the purposes of this sub-section.              ",
              "Explanation II.- For the removal of doubt it is hereby declared that a person who held the office of a member shall not be eligible to be re-appointed as a member but may be appointed as the Chairperson in accordance with the provisions of this Act:              ",
              "Provided that an outgoing member of the Board shall, unless or otherwise directed, continue in office until another person is appointed, or, as the case may be, nominated as a member in his place.              ",
              "(2) In the event of vacancy in the office of the Chairperson, by reason of his death or resignation or otherwise, the Vice-Chairperson shall act as the Chairperson until a new Chairperson is appointed in accordance with the provisions of this Act to fill the vacancy and enter upon his office:              ",
              "Provided that a person appointed due to a vacancy in the office of Chairperson under sub-section (2), shall be eligible to be appointed as Chairperson in accordance with the provisions of this Act only for one term in addition to the period for which he was appointed to fill the vacancy of Chairperson.              ",
              "(3) In the event of vacancy in the office of a nominated member under clauses (h), (i), (j) and (k) of sub-section (1) of section 11 by reason of his death or resignation or otherwise, the vacancy shall be filled in accordance with the provisions of this Act:              ",
              "Provided that a person nominated under sub-section (1) of section 11 due to a vacancy in the office of the member, such person shall be eligible to be nominated only for one term as member in accordance with the provisions of this Act, in addition to the period for which he was nominated to fill the vacancy.              ",
              "(4) The term of office of an ex officio member shall continue as long as he holds the office by virtue of which he is a member.              ",
              "(5) One-fourth of the members, being distinguished scientists or outstanding scientists or Directors of laboratories of the Council of Scientific and Industrial Research nominated under clause (k) of sub-section (1) of section 11 shall retire every year and new members shall be nominated in their place in accordance with the provisions of this Act:              ",
              "Provided that, notwithstanding anything contained in this sub-section, the members, being distinguished scientists or outstanding scientists of the Council of Scientific and Industrial Research or Directors of the Council of Scientific and Industrial Research laboratories nominated under clause (k) of sub-section (1) of section 11, immediately after the commencement of this Act for the first time, may hold office for such period, as may be specified in their nomination and provisions of this sub-section shall not be applicable to such nominated members.",
            ]},
            { name: "17. Powers of Board",details: [
              "(1) Subject to the provisions of this Act, the Board shall be responsible for the general superintendence, direction and control of the affairs of the Academy and shall exercise all the powers of the Academy not otherwise provided for by this Act, the Statutes and the Ordinances, and shall have the power to review the acts of the Senate.",
              {
                name:"(2) Without prejudice to the provisions of sub-section (1), the Board shall have the powers to-",
                details:[
                  "(a) take decisions on questions of policy relating to the administration and working of the Academy;",
                  "(b) institute courses of study at the Academy;                  ",
                  "(c) make Statutes;                  ",
                  "(d) institute and appoint persons to academic as well as other posts in the Academy;                  ",
                  "(e) consider and modify or cancel or rescind Ordinances;                  ",
                  "(f) consider and pass resolutions on the annual report, the annual accounts and the budget estimates of the Academy for the next financial year, together with a statement of its development plans;",                  
                  "(g) approve investments in infrastructure of the Academy in any land or building;                  ",
                  "(h) exercise such other powers and perform such other duties as may be conferred or imposed upon it by this Act or the Statutes.",
                ]
              },
              "(3) The Board shall also have the power to appoint such committees of one or more persons as it considers necessary for exercise of its powers and the performance of its duties and hold enquiries under this Act.",
            ]},
            { name: "18. Senate",details: [
              {
                name:"(1) The Senate shall consist of the following, namely:-",
                details:[
                  "(a) the Director, ex officio, who shall be the Chairperson of the Senate;",
                  "(b) all Associate Directors, ex officio members;                  ",
                  "(c) all Deans of the Academy, ex officio members;                  ",
                  "(d) two Professors from each area of study represented by the Boards of Studies of the Academy, as may be nominated by the Board, ex officio members;                  ",
                  "(e) two scientists of the Council of Scientific and Industrial Research, who being the youngest in age; and recipient of Shanti Swaroop Bhatnagar Award; and who are also Faculty of the Academy, as may be nominated by the Director-General of the Council of Scientific and Industrial Research;              ",    
                  "(f) two scientists of the Council of Scientific and Industrial Research, who being the youngest in age; and recipient of CSIR-Young Scientist Award; and who are Faculty of the Academy, as may be nominated by the Director-General of the Council of Scientific and Industrial Research;                  ",
                  "(g) three Directors or distinguished scientists or outstanding scientists of the Council of Scientific and Industrial Research laboratories, nominated by its Director-General;                  ",
                  "(h) three persons, not being the employees of the Academy or the Council of Scientific and Industrial Research, to be nominated by the Chancellor in consultation with the Director from amongst educationists of repute, one being from each of the fields of science, engineering and social sciences;         ",         
                  "(i) such other members of the staff as may be laid down in the Statutes.",
                ]
              },
              "(2) The tenure of the nominated members under clauses (d) to (h) of sub-section (1) shall be two years:",
              "Provided that the Senate shall not, at any time, have less than fifty per cent. of its members from the Councilof Scientific and Industrial Research scientists teaching in the Academy.",
            ]},
            { name: "19. Powers of Senate",details: ["Subject to the provisions of this Act, the Statutes and the Ordinances, the Senate of the Academy shall have the control and general regulation, and be responsible for the maintenance, of standards of instruction, education and examinations in the Academy and shall exercise such other powers and perform such other duties as may be conferred or imposed upon it by the Statutes and Ordinances.",]},
            { name: "20. Chancellor of Academy",details: [
              "(1) The Chairperson of the Board shall be the Chancellor of the Academy.",
              "(2) The Chancellor shall ordinarily preside at the Convocations of the Academy.",
            ]},
            { name: "21. Director of Academy",details: ["The Director shall be the principal academic and executive officer of the Academy and shall be responsible for the administration of the Academy and imparting instruction, research and maintenance of discipline.",]},
            { name: "22. Appointment and duty of Director of Academy",details: [
              "(1) The Director shall be appointed, by the President of the Council of Scientific and Industrial Research, on the recommendation of the selection committee constituted under sub-section (2).",
              {
                name:"(2) The selection committee referred to in sub-section (1) shall consist of-",
                details:[
                  "(a)the Chairperson of the Board;",
                  "(b) the Vice-Chairperson of the Board;",
                  "(c) the President of the Indian National Science Academy;         ",         
                  "(d) the Chairman, Atomic Energy Commission, Government of India;  ",                
                  "(e) the Chairman, Space Commission, Government of India.",
                ]
              },
              {
                name:"(3) The selection committee referred to in sub-section (2) shall-",
                details:[
                  "(a) be constituted within six months before the completion of tenure of the incumbent as the Director;",
                  "(b) submit its recommendation at least three months before the completion of the tenure of the incumbent Director.",
                ]
              },
              "(4) The selection committee may evolve its own procedure for the purposes of meetings and making recommendations under sub-section (1) including making recommendations in respect of a person who has not applied for the post of Director.",
              "(5) Three members of the selection committee referred to in sub-section (1) shall form quorum for the meeting of the committee:",
              "Provided that no person shall be selected or nominated as Director unless such person is an Indian citizen.",          
              "(6) It shall be the duty of the Director that the decisions taken by the Board are implemented.",
              "(7) The Director shall submit an annual report and accounts of the Academy to the Board.",     
              "(8) The Director shall exercise such other powers and perform such other duties as may be assigned to him by this Act or the Statutes or the Ordinances.", 
              "(9) The term of the Director shall be five years.",
            ]},
            { name: "23. Associate Directors",details: [
              "(1) The Associate Directors of the Academy shall, be appointed by the Director with the approval of the Board, from amongst Professors of the Academy or scientists of the Council of Scientific and Industrial Research engaged in academic activity in the Academy, for such period, and on such terms and conditions, as may be laid down by the Statutes, and, shall exercise such powers and perform such duties as may be assigned to them by this Act or the Statutes or by the Director.",
              "(2) The Board may assign any other designation for the Associate Directors, for the purpose of administrative convenience or academic efficiency.",
            ]},
            { name: "24. Powers of other authorities",details: [
              "(1) The constitution and powers of Board of Studies shall be such as may be provided in the Statutes.",
              "(2) The powers, including the financial powers and duties of authorities, officers and other functionaries of the Academy shall be as provided by the Statutes.",
            ]},
            { name: "25. Funds of Academy",details: [
              {
                name:"(1) The Academy shall maintain and retain a fund to which shall be credited-",
                details:[
                  "(a) all fees (including tuition fees) and other charges received by the Academy;",
                  "(b) all monies received by the Academy by way of grants, gifts, donations, benefactions, bequests or transfers;      ",            
                  "(c) monies for projects undertaken by the Academy;                  ",
                  "(d) income from investment made by the Academy or from any other source;                  ",
                  "(e) the funds received from the Council of Scientific and Industrial Research, by way of loan or otherwise;          ",        
                  "(f) all monies received by the Academy in any other manner or from any other source.",
                ]
              },
              "(a) all fees (including tuition fees) and other charges received by the Academy;",
              "(b) all monies received by the Academy by way of grants, gifts, donations, benefactions, bequests or transfers;          ",    
              "(c) monies for projects undertaken by the Academy;              ",
              "(d) income from investment made by the Academy or from any other source;              ",
              "(e) the funds received from the Council of Scientific and Industrial Research, by way of loan or otherwise;              ",
              "(f) all monies received by the Academy in any other manner or from any other source.",
            ]},
            { name: "26. Accounts",details: [
              "(1) The Academy shall maintain proper and separate accounts giving therein the details of all receipts in, and, expenditure from, such fund and other relevant particulars.",
              "(2) The accounts referred to in sub-section (1) shall be prepared and got audited before the expiry of six months from the end of each financial year.              ",
              "(3) The Academy shall submit to the Board and the Council of Scientific and Industrial Research, the accounts referred to in sub-section (1) duly audited under section 27 and signed by the Director, Associate Director in charge of Finance and Associate Director in charge of Administration.              ",
              "(4) The Council of Scientific and Industrial Research referred to in sub-section (3), the Board and any other person appointed by them in connection with the audit of the accounts of the Academy shall have the right to demand the production of books, accounts, connected vouchers and other documents and papers and to inspect any of the offices of the Academy.",
            ]},
            { name: "27. Audit of accounts and its publication",details: [
              "(1) The accounts of the Academy shall, without prejudice to the provisions contained in the Comptroller and Auditor-Generals (Duties, Powers and Conditions of Service) Act, 1971 (56 of 1971), be audited by auditors who may be appointed by the Board for the term of one year and such auditors shall be eligible for re-appointment.",
              "(2) No person shall be eligible to be appointed as an auditor under sub-section (1) unless he is a chartered accountant as defined in clause (b) of sub-section (1) of section 2 of the Chartered Accountants Act, 1949 (38 of 1949), and who has obtained a certificate of practice under sub-section (1) of section 6 of that Act.           ",   
              "(3) The accounts of the Academy shall, after the completion of the audit under sub-section (1) and submission thereof to the Board and the Council of Scientific and Industrial Research be published on the website of the Academy.",
            ]},
            { name: "28. Statutes",details: [
              "(1) The Statutes of the Academy shall be enacted by the Board. ","(2) Without prejudice to the provisions contained in sub-section (1), the Senate may make recommendations for enactment of Statutes to the Board."," (3) The Board may, from time to time, make new Statutes or may amend or repeal or rescind the Statutes with effect from such date as it may direct.",
            ]},
            { name: "29. Matters to be provided by Statutes",details: [
              {
                name:"Subject to the provisions of this Act, the Statutes may provide for all or any of the matters considered necessary by the Board for functioning of the Academy within the framework of this Act, including the following matters, namely:-",
                details:[
                  "(a) the conferment of degrees and diplomas;",
                  "(b) the constitution, powers and functions of the Board of Studies;                  ",
                  "(c) the tuition fee and other fees to be charged;                  ",
                  "(d) the institution of fellowships, scholarships, medals and prizes;                  ",
                  "(e) the term of office and the method of appointment of officers of the Academy;                  ",
                  "(f) the qualification of Faculty of the Academy (other than the scientists of the Council of Scientific and Industrial Research engaged in the service of the Academy), officers and other staff of Academy:",                  
                  "Provided that the scientists of the Council of Scientific and Industrial Research engaged in the service of the Academy shall be governed by the qualifications specified by the Council and nothing contained in this Act shall be construed to disqualify them from undertaking the service of the Academy or engaging them as Faculty of the Academy;                  ",
                  "(g) the classification, the method of appointment and the determination of the terms and conditions of service of Faculty, officers and other staff of the Academy;          ",        
                  "(h) the provision of insurance fund, provident fund and other retirement benefits, for the benefit of the Faculty, officers and other staff of the Academy;                  ",
                  "(i) the constitution, powers and duties of authorities of the Academy;                  ",
                  "(j) the establishment and maintenance of hostels;                  ",
                  "(k) the conditions of residence of students of the Academy and the levying of fees for residence in the hostels and of other charges;                  ",
                  "(l) the allowances to be paid to the Chairperson and other members of the Board and any committee constituted by the Academy;                  ",
                  "(m) the meetings of the Board, the Senate, or any committee, the quorum at such meetings and the procedure to be followed in the conduct of their business;                  ",
                  "(n) any other matter which may be required or necessary for the purposes of this Act.",
                ]
              }
            ]},
            { name: "30. Ordinances",details: [
              {
                name:"(1) Subject to the provisions of this Act and the Statutes, the Ordinances of the Academy may provide for all or any of the following matters, namely:-",
                details:[
                  "(a) the admission of the students;",
                  "(b) the courses of study;                  ",
                  "(c) the conditions under which students shall be admitted and shall be eligible for degrees, diplomas and certificates and to the examinations of the Academy, and shall be eligible for the degrees, diplomas and certificates;            ",      
                  "(d) the conditions of award of the fellowships, scholarships, medals and prizes;                  ",
                  "(e) the condition and mode of appointment and duties of examining bodies, examiners and moderators;           ",       
                  "(f) the conduct of examinations;                  ",
                  "(g) the maintenance of discipline among students of the Academy;                  ",
                  "(h) any other matter which by this Act or the Statute, is to be, or, may be, provided for by the Ordinances.",
                ]
              },
              "(2) Save as otherwise provided in this section, Ordinances shall be made by the Senate.",
              "(3) All Ordinances made by the Senate shall have the effect from such date as it may direct, but every Ordinance so made shall be submitted, as soon as may be, to the Board and shall be considered by the Board in its subsequent meeting.    ",          
              "(4) The Board shall have the power by resolution to modify or cancel or rescind any of the Ordinances and such Ordinances shall, from the date of such resolution stand modified accordingly or cancelled or rescinded, as the case may be.",
            ]},   
            { name: "31. Review of functioning of Academy",details: [
              "(1) There shall be a review of the functioning of the Academy once in every four years by persons of eminence to be appointed by the Council of Scientific and Industrial Research.",
              "(2) The Academy shall meet the expenses for conducting the review under sub-section (1) and upon receipt of the report of such review, the Board may take appropriate action.       ",       
              "(3) In addition to the review under sub-section (1), the Board may conduct review of functioning of administrative and academic wings of the Academy, in such manner and at such intervals, as may be provided in the Statutes.",
            ]},
            { name: "32. Appointments",details: [
              {
                name:"All appointments of the staff of the Academy (except appointment of the Director), shall be made in accordance with the procedure laid down in the Statute, by-",
                details:[
                  "(a) the Board for the academic staff;",
                  "(b) the Director, in any other case.",                 
                ]
              },
            ]},
            { name: "33. Conditions of service",details: [
              "(1) Every employee of the Academy shall be appointed on contractual basis under a written contract, which shall be lodged with the Academy and a copy of which shall be furnished to the employee concerned:",
              "Provided that all scientists and other employees of the Council of Scientific and Industrial Research engaged in the service of the Academy shall be governed by the service conditions, rules and regulations of the Council of Scientific and Industrial Research.      ",        
              "(2) The Academy shall have a flexible compensation system which recognises performance, as laid down in the Statutes, to bring the best talent in the Academy:",
              {
                name:"Provided that the scientists of the Council of Scientific and Industrial Research-",
                details:[
                  "(a) engaged in the service of the Academy; and",
                  "(b) who draw their salary from the Council, shall be eligible for such allowances or honorarium, as may be determined by the Statute.",

                ]
              }
            ]},
            { name: "34. Arbitration",details: [
              "(1) Any dispute arising out of a contract between the Academy and any of its employees shall, at the request of the employee concerned or at the instance of the Academy, be referred to a Tribunal of Arbitration consisting of one member appointed by the Director, one member nominated by the employee, and such two arbitrators shall appoint the third arbitrator who shall act as the presiding arbitrator.",

              "(2) The arbitration under sub-section (1) shall be governed by the Arbitration and Conciliation Act, 1996 (26 of 1996).",
            ]},
            { name: "35. Resignation, removal and suspension of Chairperson and other Member or Director",details: [
              "(1) The Chairperson or any Member of the Board other than ex officio Members of the Board or Director may, by notice in writing under his hand addressed to the President of the Council of Scientific and Industrial Research, resign his office:",

              "Provided that the Chairperson or such Member or Director shall, unless he is permitted by the President of the Council of Scientific and Industrial Research to relinquish his office sooner, continue to hold office until the expiry of three months from the date of receipt of such notice or until a person duly appointed as his successor enters upon his office or until the expiry of his term of office, whichever is the earliest.",
              {
                name:"(2) The President of the Council of Scientific and Industrial Research may remove from office the Chairperson or any Member of the Board or the Director, who-",
                details:[
                  "(a) has been adjudged an insolvent; or",
                  "(b) being the Director has engaged at any time, during his term of office, in any paid employment; or    ",              
                  "(c) has been convicted of an offence which, in the opinion of the Central Government, involves moral turpitude; or",                  
                  "(d) has become physically or mentally incapable of acting as such Chairperson or Member or Director; or    ",              
                  "(e) is of unsound mind and stands so declared by a competent court; or ",                 
                  "(f) has acquired such financial or other interest as is likely to affect prejudicially the exercise of his functions as such Chairperson or Member or Director; or",    
                  "(g) has so abused his position as to render his continuance in office prejudicial to the public interest; or",
                  "(h) has been guilty of proved misbehavior; or",
                  "(i) has such other disqualifications as may be prescribed.",
                  ]
              },
              "(3) Notwithstanding anything contained in sub-section (1), the Chairperson or a Member of the Board or the Director shall not be removed from his office on the grounds specified in clause (f) or clause (g) or clause (h) of sub-section (1), except by an order made by the President of the Council of Scientific and Industrial Research after an inquiry made in this behalf in which such Chairperson or Member or Director has been informed of the charges against him and given a reasonable opportunity of being heard in respect of those charges.",
              "(4) In the event of inquiry instituted under sub-section (2), the President of the Council of Scientific and Industrial Research may suspend such Chairperson or Member or Director against whom inquiry has been instituted for a period not exceeding six months if it is considered necessary in public interest.",
              "(5) The President of the Council of Scientific and Industrial Research may, by rules, regulate the procedure for the inquiry referred to in sub-section (2).",
              "(6) In case any nominated member under clause (k) of sub-section (1) of section 11 in the Board incurs any of the disqualifications under clauses (a) to (i) of sub-section (1), such nominated member shall not be eligible to be nominated as such and his nomination as nominated member shall be revoked by those who nominated such member.",
            ]},
            { name: "36. Meetings",details: [
              "The meetings of the Board, Senate, or other committees constituted by the Academy may be held using contemporary tools of information and communication technologies (including videoconferencing) without the members necessarily having to be physically present.",
            ]},
            { name: "37. Vacancies, etc., not to invalidate acts or proceedings of Board, Academy or any other body",details: [
              {
                name:"No act of the Board or the Academy or any other body set up under this Act or the Statutes, shall be invalid merely by reason of-",
                details:[
                  "(a) any vacancy in, or defect in the constitution thereof; or",
                  "(b) any defect in the selection, nomination or appointment of a person acting as a member thereof; or",                  
                  "(c) any irregularity in its procedure not affecting the merits of the case.",
                ]
              },
            ]},
            { name: "38. Power to remove difficulties",details: ["(1) If any difficulty arises in giving effect to the provisions of this Act, the Central Government may, by order published in the Official Gazette, make such provisions, not inconsistent with the provisions of this Act, as appear to it to be necessary or expedient for removing the difficulty:",
            "Provided that no such order shall be made under this section after the expiry of three years from the commencement of this Act.     ",       
            "(2) Every order made under sub-section (1) shall be laid, as soon as may be after it is made, before each House of Parliament, while it is in session, for a total period of thirty days which may be comprised in one session or in two or more successive sessions, and if, before the expiry of the session immediately following the session or the successive sessions aforesaid, both Houses agree in making any modification in the order or both Houses agree that the order should not be made, the order shall thereafter have effect only in such modified form or be of no effect, as the case may be; so, however, that any such modification or annulment shall be without prejudice to the validity of anything previously done under that order.",]},
          ]
        },
      ],
    },
    {
      name:"Acquired Territories (Merger) Act, 1960",
      summary:      
      "An Act to provide for the merger into the States of Assam, Punjab and West Bengal of certain territories acquired in pursuance of the agreements entered into between the Governments of India and Pakistan and for matters connected therewith.BE it enacted by Parliament in the Eleventh Year of the Republic of India as follows:              [28th December, 1960.]  ",
      
      Chapters:[
        {
          name:"",
          sections:[
            { name:"1. Short title, extent and commencement.", details:["This Act may be called the Acquired Territories (Merger) Act, 1960.",]},
            { name:"2. Definitions.", details:[
              {
                name:"In this Act, unless the context otherwise requires,-",
                details:[
                  "(a) 'acquired territories' mean so much of the territories comprised in the Indo-Pakistan agreements and referred to in the First Schedule as are demarcated for the purpose of being acquired by India in pursuance of the said agreements;",
                  "(b) 'appointed day' means such date1 as the Central Government may, by notification in the Official Gazette, appoint for the merger of the acquired territories under section 3, after causing the territories to be so acquired demarcated for the purpose, and different dates may be appointed for the merger of such territories into different States;",                  
                  "(c) 'assembly constituency', 'council constituency' and 'parliamentary constituency' have the same meanings as in the Representation of the People Act, 1950 (43 of 1950);                  ",
                  "(d) 'Indo-Pakistan agreements' mean the Agreements dated the 10th day of September, 1958, the 23rd day of October, 1959 and the 11th day of January, 1960 entered into between the Governments of India and Pakistan, the relevant extracts of which are set out in the Second Schedule;      ",            
                  "(e) 'law' includes any enactment, ordinance, regulation, order, bye-law, rule, scheme, notification or other instrument having the force of law in the whole or in any part of the acquired territory;                  ",
                  "(f) 'sitting member', in relation to either House of Parliament or of the Legislature of a State, means a person who, immediately before the appointed day, is a member of that House;                  ",
                  "(g) 'State concerned', in relation to the acquired territories referred to in Part I, Part II and Part III of the First Schedule, means, respectively, the State of Assam, the State of Punjab and the State of West Bengal; and 'State Government concerned' shall be construed accordingly; ",                 
                  "(h) 'Union purposes' mean the purposes of Government relatable to any of the matters mentioned in List I of the Seventh Schedule to the Constitution.",
                ]
              }
            ]},
            { name:"3. Merger of acquired territories.", details:[
              "(1) As from the appointed day, the acquired territories referred to in Part I, Part II and Part III of the First Schedule shall, respectively be included in, and form part of the States of Assam, Punjab and West Bengal.",

              "(2) As from the appointed day, the State Government concerned shall, by order in the Official Gazette, provide for the administration of the acquired territories included in that State by including them or any part of them in such district, sub-division, police station or other administrative unit as may be specified in the order.",
              
              "1. 17th January, 1961, vide notification No. G.S.R. 74, dated 14th January, 1961, see Gazette of India, Extraordinary, Part II, sec. 3(i).",
            ]},
            { name:"4. Amendment of the First Schedule to the Constitution.", details:[
              {
                name:"As from the appointed day, in the First Schedule to the Constitution,-",
                details:[
                  "(a) in the paragraph relating to the territories of the State of Assam, after the words 'the Assam Tribal Areas', the words, figures and brackets 'and the territories referred to in Part I of the First Schedule to the Acquired Territories (Merger) Act, 1960' shall be inserted;",
                  "(b) in the paragraph relating to the territories of the State of Punjab, after the words and figures 'the States Reorganisation Act, 1956 (37 of 1956)', the words, figures and brackets 'and the territories referred to in Part II of the First Schedule to the Acquired Territories (Merger) Act, 1960' shall be inserted;  ",                
                  "(c) in the paragraph relating to the territories of the State of West Bengal, after the words, brackets and figures 'the Bihar and West Bengal (Transfer of Territories) Act, 1956 (40 of 1956)', the words, figures and brackets 'and the territories referred to in Part III of the First Schedule to the Acquired Territories (Merger) Act, 1960' shall be inserted.",
                ]
              }
            ]},
            { name:"5. Construction of references to existing constituencies", details:[
              {
                name:"As from the appointed day,-",
                details:[
                  {
                    name:"(a) any reference in the Delimitation of Parliamentary and Assembly Constituencies Order, 1956,-",
                    details:[
                      "(i) to the State of Assam or Punjab or West Bengal, shall be construed as including that part of the acquired territory which is included in that State;",
                      "(ii) to any district, sub-division, police station or other administrative unit, shall be construed as including that part of the acquired territory, if any, which is included in that district, sub-division, police station or other administrative unit, by order made under sub-section (2) of section 3;",
                    ]
                  },
                  {
                    name:"(b) any reference in the Delimitation of Council Constituencies (Punjab) Order, 1951-",
                    details:[
                      "(i) to the State of Punjab, shall be construed as including that part of the acquired territory which is included in that State;",
                      "(ii) to any district, shall be construed as including that part of the acquired territory, if any, which is included in that district, by order made under sub-section (2) of section 3;",
                    ]
                  },
                  {
                    name:"(c) any reference in the Delimitation of Council Constituencies (West Bengal) Order, 1951-",
                    details:[
                      "(i) to the State of West Bengal, shall be construed as including that part of the acquired territory which is included in that State;",
                      "(ii) to any division or district, shall be construed as including the acquired territory, if any, which is included in that division or district, by order made under sub-section (2) of section 3.",
                    ]
                  },
                ]
              },
            ]},
            { name:"6. Provisions as to sitting members.", details:[
              "(1) Every sitting member of the House of the People representing any parliamentary constituency the extent of which has been altered by virtue of the provisions of this Act shall, notwithstanding such alteration, be deemed to have been elected as from the appointed day to that House by that constituency as so altered.",
              "(2) Every sitting member of the Legislative Assembly of the State of Assam or Punjab or West Bengal representing any assembly constituency the extent of which has been altered by virtue of the provisions of this Act shall, notwithstanding such alteration, be deemed to have been elected as from the appointed day to the said Legislative Assembly by that constituency as so altered.   ",           
              "(3) Every sitting member of the Legislative Council of Punjab or West Bengal representing any Council constituency the extent of which has been altered by virtue of the provisions of this Act, shall, notwithstanding such alteration, be deemed to have been elected as from the appointed day to the said Legislative Council by that constituency as so altered.",
            ]},
            { name:"7. Property and assets.", details:[
              {
                name:"(1) All property and assets within the acquired territories which immediately before the appointed day, are vested in Pakistan or in the Province of East Pakistan or the Province of West Pakistan shall, as from that day,-",
                details:[
                  "(a) where such property and assets are relatable to Union purposes, vest in the Union;",
                  "(b) in any other case, vest in the State concerned in which the acquired territories are included.",
                ]
              },
              "(2) A certificate of the Central Government signed by a Secretary to that Government shall be conclusive as to whether the purposes for which any property or assets are held, immediately before the appointed day, are Union purposes.",
            ]},
            { name:"8. Appropriation of moneys for expenditure in acquired territories.", details:[
              "(1) As from the appointed day, any Act passed by the Legislature of the State of Assam or Punjab or West Bengal before that day for the appropriation of any moneys out of the Consolidated Fund of that State to meet any expenditure in respect of any part of the financial year 1960-61, shall have effect also in relation to the acquired territories included in that State and it shall be lawful for the State Government concerned to spend any amount in respect of those territories out of the amount authorised by such Act to be expenditure for any service in that State.",
              "(2) The Governor of the State concerned may, after the appointed day, authorise such expenditure from the Consolidated Fund of that State as he deems necessary for any purpose or service in the acquired territories included in that State for a period of not more than three months beginning with the appointed day pending the sanction of such expenditure by the Legislature of that State.",
            ]},
            { name:"9. Extension of laws.", details:["All laws in force in the acquired territories immediately before the appointed day shall, as from that day, cease to be in force in those territories and all laws in force generally in the State concerned in which the acquired territories are included shall, as from that day, extend to, or as the case may be, come into force in, those territories:",
            "Provided that anything done or any action taken before the appointed day under any law in force in the acquired territories shall be deemed to have been done or taken, as from the appointed day, under the corresponding law extended to, and in force, in those territories.",]},
            { name:"10. Power to name authorities for exercising statutory functions.", details:["The State Government concerned, as respects the acquired territories included in that State, may, by notification in the Official Gazette, specify the authority, officer or person who, on or after the appointed day, shall be competent to exercise such functions, exercisable under any law in force on that day in those territories, as may be mentioned in that notification and such law shall have effect accordingly.",]},
            { name:"11. Power to remove difficulties.", details:[
              "(1) If any difficulty arises in relation to the transition from any corresponding law to any law which by virtue of section 9 shall, as from the appointed day, extend to, or come into force in, the acquired territories, the Central Government may, by order notified in the Official Gazette, make such provisions as appear to it to be necessary or expedient for removing the difficulty.",
              "(2) If any difficulty arises in giving effect to the provisions of this Act (otherwise than in relation to the transition from any corresponding law) or in connection with the administration of the acquired territories as a part of the State in which they are included, the State Government concerned may, by order in the Official Gazette, make such provisions not inconsistent with the purposes of this Act, as appear to it to be necessary or expedient for removing the difficulty.    ",          
              "(3) No power under sub-section (1) or sub-section (2) shall be exercised by the Central Government or, as the case may be, the State Government after the expiry of three years from the appointed day.           ",   
              "(4) Any order made under sub-section (1) or sub-section (2) may be so made as to be retrospective to any date not earlier than the appointed day. 6",
            ]},
            { name:"THE FIRST SCHEDULE. ", details:[
              "[See Sections 2(a), 2(g), 3 and 4]",
              {
                name:"Part I",
                details:[
                  "The acquired territory in relation to item (7) of paragraph 2 of the Agreement dated the 10th day of September, 1958.",
                ]
              },
              {
                name:"Part II",
                details:[
                  "The acquired territory in relation to item (ii) and item (iii) of paragraph 1 of the Agreement dated the 11th day of January, 1960.",
                ]
              },
              {
                name:"Part III",
                details:[
                  "The acquired territory in relation to item (5) and item (10) of paragraph 2 of the Agreement dated the 10th day of September, 1958 and paragraph 4 of the Agreement dated the 23rd day of October, 1959.",
                ]
              },
            ]},
            { name:"THE SECOND SCHEDULE.", details:[
              "[See Section 2(D)]",
              "1. EXTRACTS FROM THE NOTE CONTAINING THE AGREEMENT DATED THE 10TH DAY OF SEPTEMBER, 1958.",
              "              *                            *                            *                            *                            *",
              "2. As a result of the discussions, the following agreements were arrived at:-",
              "              *                            *                            *                            *                            *",
              "24 Parganas - Khulna, 24 Parganas - Jessore              :-Boundary disputes.",
              "It is agreed that the mean of the two respective claims of India and Pakistan should be adopted, taking the river as a guide, as far as possible, in the case of the latter dispute. (Ichhamati river).",
              "              *                            *                            *                            *                            *",
              "(7) Piyain and Surma river regions to be demarcated in accordance with the relevant notifications, cadastral survey maps and, if necessary, record of rights. Whatever the result of this demarcation might be, the nationals of both the Governments to have the facility of navigation on both these rivers.",
              "              *                            *                            *                            *                            *",
              "(10) Exchange of old Cooch Behar enclaves in Pakistan and Pakistan enclaves in India without claim to compensation for extra area going to Pakistan, is agreed to.",
              "              *                            *                            *                            *                            *",
              "(Sd.) (J. G. KHARAS)	:              (Sd.) (M. J. DESAI)",
              "Acting Foreign Secretary,:	              Commonwealth Secretary,",              
              "Ministry of Foreign Affairs and Commonwealth Relations	              Ministry of External Affairs,",              
              "Karachi,	              New Delhi.",              
              "NEW DELHI,	",             
              "October 23, 1959.",
              "3. EXTRACTS FROM THE AGREEMENT ENTITLED 'AGREED DECISIONS AND PROCEDURES TO END DISPUTES AND INCIDENTS ALONG THE INDO-WEST PAKISTAN BORDER AREAS', DATED THE 11TH DAY OF JANUARY, 1960.",
              "              *                            *                            *                            *                            *",





            ]},            
            ]
        },
      ]
    },
    {
      name:"Acquisition of Certain Area at Ayodhya Act, 1993",
      summary:
      ["An Act to provide for the acquisition of certain area at Ayodhya and for matters connected therewith or incidental thereto.",      "WHEREAS there has been a long-standing dispute relating to the structure (including the premises of the inner and outer courtyards of such structure), commonly known as the Ram Janma Bhumi-Babri Masjid, situated in village Kot Ramchandra in Ayodhya, in Pargana Haveli Avadh, in tehsil Faizabad Sadar, in the district of Faizabad of the State of Uttar Pradesh;",      "AND WHEREAS the said dispute has affected the maintenance of public order and harmony between different communities in the country;      AND WHEREAS it is necessary to maintain public order and to promote communal harmony and the spirit of common brotherhood amongst the people of India;",      "AND WHEREAS with a view to achieving the aforesaid objectives, it is necessary to acquire certain areas in Ayodhya;      BE it enacted by Parliament in the Forty-fourth Year of the Republic of India as follows:-",],
      Chapters:[
        {
          name:"1. Preliminary",
          sections:[
            { name:"1. Short title, extent and commencement.", details:[
              "(1) This Act may be called the Acquisition of Certain Area at Ayodhya Act, 1993.",
              "(2) It shall be deemed to have come into force on the 7th day of January, 1993.",
            ]},
            { name:"2. Definitions.", details:[
              {
                name:"In this Act, unless the context otherwise requires,-",
                details:[
                  "(a) 'area; means the area (including all the buildings, structures or other properties comprised therein) specified in the Schedule;",
                  "(b) 'authorised person' means a person or body of persons or trustees of any trust authorised by the Central Government under section 7;  ",                
                  "(c) 'Claims Commissioner' means the Claims Commissioner appointed under sub-section (2) of section 8;    ",              
                  "(d) 'prescribed' means prescribed by rules made under this Act.",
                ]
              }
            ]},
            ]
        },
        {
          name:"2. Acquisition of The Area in Ayodhya",
          sections:[
            { name:"3. Acquisition of rights in respect of certain area.", details:["On and from the commencement of this Act, the right, title and interest in relation to the area shall, by virtue of this Act, stand transferred to, and vest in, the Central Government",]},
            { name:"4. General effect of vesting.", details:[
              "(1) The area shall be deemed to include all assets, rights, leaseholds, powers, authority and privileges and all property, movable and immovable, including lands, buildings, structures, shops of whatever nature or other properties and all other rights and interests in, or arising out of, such properties as were immediately before the commencement of this Act in the ownership, possession, power or control of any person or the State Government of Uttar Pradesh, as the case may be, and all registers, maps, plans, drawings and other documents of whatever nature relating thereto.",
              "(2) All properties aforesaid which have vested in the Central Government under section 3 shall, by force of such vesting, be freed and discharged from any trust, obligation, mortgage, charge, lien and all other encumbrances affecting them and any attachment, injunction, decree or order of any court or tribunal or other authority restricting the use of such properties in any manner or appointing any receiver in respect of the whole or any part of such properties shall cease to have any effect.     ",         
              "(3) If, on the commencement of this Act, any suit, appeal or other proceeding in respect of the right, title and interest relating to any property which has vested in the Central Government under section 3, is pending before any court, tribunal or other authority, the same shall abate.",
            ]},
            { name:"5. Duty of person or State Government in charge of the management of the area to deliver all assets, etc.", details:[
              "(1) The Central Government may take all necessary steps to secure possession of the area which is vested in that Government under section 3.",
              "(2) On the vesting of the area in the Central Government under section 3, the person or State Government of Uttar Pradesh, as the case may be, in charge of the management of the area immediately before such vesting shall be bound to deliver to the Central Government or the authorised person, all assets, registers and other documents in their custody relating to such vesting or where it is not practicable to deliver such registers or documents, the copies of such registers or documents authenticated in the prescribed manner.",
            ]},
            { name:"6. Power of Central Government to direct vesting of the area in another authority or body or trust.", details:[
              "(1) Notwithstanding anything contained in sections 3, 4, 5 and 7, the Central Government may, if it is satisfied that any authority or other body, or trustees of any trust, set up on or after the commencement of this Act is or are willing to comply with such terms and conditions as that Government may think fit to impose, direct by notification in the Official Gazette, that the right, title and interest or any of them in relation to the area or any part thereof, instead of continuing to vest in the Central Government, vest in that authority or body or trustees of that trust either on the date of the notification or on such later date as may be specified in the notification.",
              "(2) When any right, title and interest in relation to the area or part thereof vest in the authority or body or trustees referred to in sub-section (1), such rights of the Central Government in relation to such area or part thereof, shall, on and from the date of such vesting, be deemed to have become the rights of that authority or body or trustees of that trust.",
              "(3) The provisions of sections 4, 5, 7 and 11 shall, so far as may be, apply in relation to such authority or body or trustees as they apply in relation to the Central Government and for this purpose references therein to the Central Government shall be construed as references to such authority or body or trustees.",
            ]},
            ]
        },
        {
          name:"3. Management and Administration of Property",
          sections:[
            { name:"7. Management of property by Government.", details:[
              "(1) Notwithstanding anything contained in any contract or instrument or order of any court, tribunal or other authority to the contrary, on and from the commencement of this Act, the property vested in the Central Government under section 3 shall be managed by the Central Government or by a person or body of persons or trustees of any trust authorised by that Government in this behalf.",
              "(2) In managing the property vested in the Central Government under section 3, the Central Government or the authorised person shall ensure that the position existing before the commencement of this Act in the area on which the structure (including the premises of the inner and outer courtyards of such structure), commonly known as the Ram Janma Bhumi-Babri Masjid, stood in village Kot Ramchandra in Ayodhya, in Pargana Haveli Avadh, in tehsil Faizabad Sadar, in the district of Faizabad of the State of Uttar Pradesh is maintained",
            ]},
            ]
        },
        {
          name:"4. Miscellaneous",
          sections:[
            { name:"8.	Payment of amount.", details:[
              "(1) The owner of any land, building, structure or other property comprised in the area shall be given by the Central Government, for the transfer to and vesting in that Government under section 3 of that land, building, structure or other property, in cash an amount equivalent to the market value of the land, building, structure or other property.",
              "(2) The Central Government shall, for the purpose of deciding the claim of the owner or any person having a claim against the owner under sub-section (1), by notification in the Official Gazette, appoint a Claims Commissioner.",
              "(3) The Claims Commissioner shall regulate his own procedure for receiving and deciding the claims.",
              "(4) The owner or any person having a claim against the owner may make a claim to the Claims Commissioner within a period of ninety days from the date of commencement of this Act:              ",
              "Provided that if the Claims Commissioner is satisfied that the claimant was prevented by sufficient cause from preferring the claim within the said period of ninety days, the Claims Commissioner may entertain the claim within a further period of ninety days and not thereafter.",
            ]},
            { name:"9.	Act to override all other enactments.", details:["The provisions of this Act shall have effect notwithstanding anything inconsistent therewith contained in any other law for the time being in force or any instrument having effect by virtue of any law other than this Act or any decree or order of any court, tribunal or other authority."]},
            { name:"10.	Penalties.", details:["Any person who is in charge of the management of the area and fails to deliver to the Central Government or the authorised person any asset, register or other document in his custody relating to such area or, as the case may be, authenticated copies of such register or document, shall be punishable with imprisonment for a term which may extend to three years or with fine which may extend to ten thousand rupees or with both."]},
            { name:"11.	Protection of action taken in good faith.", details:["No suit, prosecution or other legal proceeding shall lie against the Central Government or the authorised person or any of the officers or other employees of that Government or the authorised person for anything which is in good faith done or intended to be done under this Act."]},
            { name:"12.	Power to make rules.", details:["(1) The Central Government may, by notification in the Official Gazette, make rules to carry out the provisions of this Act.",
            "(2) Every rule made by the Central Government under this Act shall be laid, as soon as may be after it is made, before each House of Parliament, while it is in session, for a total period of thirty days which may be comprised in one session or in two or more successive sessions, and if, before the expiry of the session immediately following the session or the successive sessions aforesaid, both Houses agree in making any modification in the rule or both Houses agree that the rule should not be made, the rule shall thereafter have effect only in such modified form or be of no effect, as the case may be; so, however, that any such modification or annulment shall be without prejudice to the validity of anything previously done under that rule."]},
            { name:"13.	Repeal and saving.", details:[
              "(1) Subject to the provisions of sub-section (2), the Acquisition of Certain Area at Ayodhya Ordinance, 1993 ( Ord. 8 of 1993), is hereby repealed.",
              {
                name:"(2) Notwithstanding anything contained in the said Ordinance,-",
                details:[
                  "(a) the right, title and interest in relation to plot No. 242 situated in village Kot Ramchandra specified against Sl. No. 1 of the Schedule to the said Ordinance shall be deemed never to have been transferred to, and vested in, the Central Government;",
                  "(b) any suit, appeal or other proceeding in respect of the right, title and interest relating to the said plot No. 242, pending before any court, tribunal or other authority, shall be deemed never to have abated and such suit, appeal or other proceeding (including the orders or interim orders of any court thereon) shall be deemed to have been restored to the position existing immediately before the commencement of the said Ordinance;",
                  "(c) any other action taken or thing done under that Ordinance in relation to the said plot No. 242 shall be deemed never to have been taken or done.",
                ]
              },
              "(3) Notwithstanding such repeal, anything done or any action taken under the said Ordinance shall be deemed to have been done or taken under the corresponding provisions of this Act",
            ]},
            {name:"THE SCHEDULE.",details:[
              "[See Section 2(A) ]",
              "Description of The Area",
            ]},
            ]
        },
      ]
    },
    {
      name:"Actuaries Act, 2006",
      summary:
      "An Act to provide for the merger into the States of Assam, Punjab and West Bengal of certain territories acquired in pursuance of the agreements entered into between the Governments of India and Pakistan and for matters connected therewith.BE it enacted by Parliament in the Eleventh Year of the Republic of India as follows: ",
      Chapters:[
        {
          name:"1. Preliminary ",
          sections:[
            { name:"1. Short title, extent and commencement.", details:[
              "(1) This Act may be called the Actuaries Act, 2006.",
              "(2) It extends to the whole of India.",
              "(3) It shall come into force on such date1 as the Central Government may, by notification in the Official Gazette, appoint:",
              "Provided that different dates may be appointed for different provisions of this Act and any reference in any such provision to the commencement of this Act shall be construed as a reference to the commencement of that provision.",
            ]},
            { name:"2. Definitions.", details:[
              {
                name:"(1) In this Act, unless the context otherwise requires,—",
                details:[
                  "(a) 'Actuary' means a person skilled in determining the present effects of future contingent events or in finance modelling and risk analysis in different areas of insurance, or calculating the value of life interests and insurance risks, or designing and pricing of policies, working out the benefits, recommending rates relating to insurance business, annuities, insurance and pension rates on the basis of empirically based tables and includes a statistician engaged in such technology, taxation, employees' benefits and such other risk management and investments and who is a fellow member of the Institute; and the expression 'actuarial science' shall be construed accordingly;",
                  "(b) 'Actuarial Society' means the Actuarial Society of India registered under the Societies Registration Act, 1860 (21 of 1860) and the Bombay Public Trusts Act, 1950 (Bombay Act No XXXIX of 1950);",
                  "(c) 'appointed day' means the date on which the Institute is constituted under sub-section (1) of section 3;",
                  "(d) 'Authority' means the Appellate Authority referred to in section 32;",
                  "(e) 'Board' means the Quality Review Board constituted under sub-section (1) of section 43;",
                  "(f) 'Council' means the Council of the Institute as referred to in section 12;",
                  "(g) 'fellow' means a fellow member of the Institute;",
                  "(h) 'Institute' means the Institute of Actuaries of India constituted under section 3;",
                  "(i) 'member' means an individual whose name appears in the register of members maintained by the Institute;",
                  "(j) 'prescribed' means prescribed by rules made under this Act;",
                  "(k) 'President' means the President of the Council;",
                  "(l) 'register' means the register of members maintained by the Institute under this Act;",
                  "(m) 'specified' means specified by regulations made under this Act;",
                  "(n) 'Tribunal' means a Tribunal established under sub-section (1) of section 16;",
                  "(o) 'Vice-President' means the Vice-President of the Council;",
                  "(p) 'year' means the period commencing on the 1st day of April of any year and ending on the 31st day of March  the succeeding year.",
                ]
              },
              {
                name:"(2) Save as otherwise provided in this Act, a member of the Institute shall be deemed 'to be in practice' when individually or in partnership with Actuaries in practice as a member or an employee of a company, he, whether or not in consideration of remuneration received or to be received,—",
                details:[
                  "(i) engages himself in actuarial profession; or",
                  "(ii) offers to perform or performs services involving the application of actuarial techniques in the fields of insurance, pension, investment, finance and management; or",
                  "(iii) renders such other services as, in the opinion of the Council, are or may be rendered by an actuary in practice; or",
                  "(iv) is in employment of a person engaged in one or more of the activities mentioned in clauses (i), (ii) and (iii) above, and the words 'to be in practice' with their grammatical variations and cognate expressions shall be construed accordingly.",
                ]
              },
              "Explanation.—For the purposes of this sub-section, the expression 'company' includes a public financial institution as defined in section 4A of the Companies Act, 1956 (1 of 1956).",
            ]},            
            ]
        },
        {
          name:"2. Institute of Actuaries of India ",
          sections:[
            { name:"3. Incorporation of Institute.", details:[
              "(1) With effect from such date as the Central Government may, by notification in the Official Gazette, appoint, all persons whose names are entered in the register of the Actuarial Society at the commencement of this Act and all persons who may thereafter have their names entered in the register to be maintained under this Act, so long as they continue to have their names borne on the register, are hereby constituted a body corporate by the name of the Institute of Actuaries of India and all such persons shall be known as members of the Institute.",
              "(2) The Institute shall have perpetual succession and a common seal and shall have power to acquire, hold and dispose of property, both movable and immovable, and shall by its name sue or be sued.",
              "(3) The head office of the Institute shall be situated at such place as may be decided by the Central Government.",
            ]},
            { name:"4. Transfer of assets, liabilities, etc., of Actuarial Society.", details:[
              {
                name:"On the appointed day,—",
                details:[
                  "(a) all the assets and liabilities of the Actuarial Society shall stand transferred to, and vested in, the Institute.",
                  "Explanation.—The assets of the Actuarial Society shall be deemed to include all rights and powers and all properties, whether movable or immovable, including, in particular, cash balances, deposits and all other interests and rights in, or arising out of, such properties as may be in the possession of the said Society and all books of account and other documents relating to the same; and liabilities shall be deemed to include all debts, liabilities and obligations of whatever kind;",
                  "(b) without prejudice to the provisions of clause (a), all debts, obligations and liabilities incurred, all contracts entered into and all matters and things engaged to be done by, with or for the Actuarial Society immediately before that day, for or in connection with the purpose of the said Society, shall be deemed to have been incurred, entered into or engaged to be done by, with or for, the Institute;",
                  "(c) all sums of money due to the Actuarial Society immediately before that day shall be deemed to be due to the Institute; and",
                  "(d) all suits and other legal proceedings instituted or which could have been instituted by or against the Actuarial Society immediately before that day may be continued or may be instituted by or against the Institute.",
                ]
              }
            ]}, 
            { name:"5. Objects of Institute.", details:[
              {
                name:"The objects of the Institute shall be—",
                details:[
                  "(a) to promote, uphold and develop the standards of professional education, training, knowledge, practice and conduct amongst Actuaries;",
                  "(b) to promote the status of the Actuarial profession;",
                  "(c) to regulate the practice by the members of the profession of Actuary;",
                  "(d) to promote, in the public interest, knowledge and research in all matters relevant to Actuarial science and its application; and",
                  "(e) to do all such other things as may be incidental or conducive to the above objects or any of them.",
                ]
              }
            ]},
            { name:"6. Entry of names in register.", details:[
              {
                name:"(1) Any of the following persons shall be entitled to have his name entered in the register, namely:—",
                details:[
                  "(a) any person who immediately before the appointed day was an associate or a fellow (including an honorary fellow) of the Actuarial Society; ",
                  "(b) any person who has passed the examination conducted by the Actuarial Society and has completed training either as specified by the said Society or as specified by the Council, except any such person who is not a permanent resident of India;",
                  "(c) any person who has passed such examination and completed such training, as may be specified for membership of the Institute;",
                  "(d) any person who has passed such other examination and completed such other training outside India as is specified as being equivalent to the examination and training specified under this Act for membership of the Institute:",
                ]
              },
              "Provided that in the case of any person belonging to any of the classes mentioned in this sub-section who is not permanently residing in India, the Central Government or the Council may impose such further conditions as it may deem necessary or expedient in the public interest.",
              "(2) Every person mentioned in clause (a) of sub-section (1) may have his name entered in the register without the payment of any entrance fee.",
              "(3) Every person belonging to any of the classes mentioned in clauses (b), (c) and (d) of sub-section (1) shall have his name entered in the register on an application being made and granted in the specified manner and on payment of such fees, as may be specified.",
              "(4) The Council shall take such steps as may be necessary for the purpose of having the names of all persons belonging to the class mentioned in clause (a) of sub-section (1) entered in the register before the appointed day.",
              "(5) Notwithstanding anything contained in this section, the Council may confer on any person honorary fellow membership, if the Council is of the opinion that such person has made a significant contribution to the profession of Actuary and thereupon the Council shall enter the name of such person in the register but such person shall not have any voting rights in any election or meetings of the Institute and shall not also be required to pay any fee to the Institute.",
            ]}, 
            { name:"7. Associates and fellows.", details:[
              "(1) The members of the Institute shall be divided into two classes designated respectively as associates and fellows.",
              "(2) Any person other than a person to whom the provisions of sub-section (3) apply, shall, on his name being entered in the register, be deemed to have become an associate and as long as his name remains so entered, shall be entitled to use the letters 'AIAI' after his name to indicate that he is an associate.",
              "(3) Any person who was a fellow of the Actuarial Society and who is entitled to have his name entered in the register under clause (a) of sub-section (1) of section 6 shall be entered in the register as a fellow.",
              "(4) Any person whose name is entered in the register as fellow shall, so long as his name remains so entered, be entitled to use the letters 'FIAI' after his name to indicate that he is a fellow.",

            ]},
            { name:"8. Honorary, affiliate and student members.", details:[
              "(1) The Council may choose, in such manner as may be specified, any person of eminence in matters relating to and of interest to the profession of Actuary as an honorary member of the Institute provided that he is not practicing as an Actuary.",
              "(2) Any person, who is a fellow member, or is a holder of membership considered equivalent to the fellow membership of the Institute, of any other institution similar to the Institute, whether within or outside India, may be admitted as an affiliate member for such period, and on such terms and conditions as may be specified.",
              "(3) Any person who enrolls himself for examination of the Institute, and possesses such academic qualifications as may be specified, may be admitted as a student member of the Institute on such terms and conditions as may be specified.",
              "(4) An honorary member or an affiliate member or a student member shall have no right to vote on any matter or resolution in any meeting of the Institute.",
            ]},           
            { name:"9. Certificate of practice.", details:[
              "(1) No member of the Institute shall be entitled to practice unless he fulfils the qualifications as may be specified and obtains from the Council a certificate of practice.",
              "(2) A member who desires to be entitled to practice shall make an application in such form and pay such annual fee for certificate of practice as may be specified and such fee shall be payable on or before the first day of April in each year.",
              "(3) The certificate of practice obtained under sub-section (1) may be cancelled by the Council under such circumstances as may be specified.",
            ]},
            { name:"10. Members to be known as Actuaries.", details:["Every member of the Institute in practice shall, and any other member may, use the designation of an Actuary and no member using such designation shall use any other description whether in addition thereto or in substitution therefor:",
            "Provided that nothing contained in this section shall be deemed to prohibit any such member from adding any other description or letters to his name, if entitled thereto, to indicate membership of such other Institute, whether in India or elsewhere, as may be recognised in this behalf by the Council, or any other qualification that he may possess, or to prohibit a firm, all the partners of which are members of the Institute and in practice, from being known by its firm name as Actuaries.",]}, 
            { name:"11. Disqualifications.", details:[
              {
                name:"Notwithstanding anything contained in section 6, a person shall not be entitled to have his name entered in, or borne on, the register if he—",
                details:[
                  "(a) has not attained the age of twenty-one years at the time of his application for the entry of his name in the register; or",
                  "(b) is of unsound mind and stands so adjudged by a competent court; or",
                  "(c) is an undischarged insolvent; or",
                  "(d) being a discharged insolvent, has not obtained from the court a certificate stating that his insolvency was caused by misfortune and without any misconduct on his part; or",
                  "(e) has been convicted by a competent court whether within or outside India, of an offence involving moral turpitude and punishable with imprisonment or of an offence, not of a technical nature, committed by him in his professional capacity unless in respect of the offence committed he has either been granted a pardon or, on an application made by him in this behalf, the Central Government has, by an order in writing, removed the disqualification; or",
                  "(f) has been removed from the membership of the Institute on being found on inquiry to have been guilty of a professional or other misconduct:",
                ]
              },
              "Provided that a person who has been removed from the membership for a specified period shall not be entitled to have his name entered in the Register until the expiry of such period.",
            ]},
            { name:"12. Composition of Council of Institute.", details:[
              "(1)There shall be a Council of the Institute for the management of the affairs of the Institute and for discharging the functions assigned to it by or under this Act.",
              {
                name:"(2) The Council shall be composed of the following persons, namely:—",
                details:[
                  "(a) a minimum of nine and not more than twelve persons from amongst fellow members to be elected by the fellow and the associate members of the Institute in such manner as may be prescribed:",
                  {
                    name:"Provided that a fellow of the Institute, who has been found guilty of any professional or other misconduct and whose name is removed from the Register or has been awarded penalty of fine, shall not be eligible to contest election,—",
                    details:[
                      "(i) in case of misconduct falling under the Schedule of this Act [except Part IV(B)], for a period of three years; or",
                      "(ii) in case of misconduct falling under Part IV(B) of the Schedule of this Act, for a period of six years,after the completion of the period of removal of name of the fellow from the Register or the payment of fine is made, as the case may be; and",
                    ]
                  },
                  "(b)",
                  {
                    name:"",
                    details:[
                      "(i) an officer not below the rank of Joint Secretary to the Government of India, to be nominated by the Central Government to represent the Ministry of Finance;",
                      "(ii) one person from the Insurance Regulatory and Development Authority constituted under the Insurance Regulatory and Development Authority Act, 1999 (41 of 1999) nominated by the Central Government; and",
                      "(iii) not more than two persons having knowledge in the field of life insurance, general insurance, finance, economics, law, accountancy or any other discipline which in the opinion of the Central Government, would be useful to the Council, to be nominated in such manner as may be prescribed:",
                    ]
                  },
                ]
              },
              "Provided that till such time as the Council is constituted under this Act, the Executive Committee of the Actuarial Society shall discharge all the functions and shall have all the powers of the Council.",
              "(3) No person holding a post under the Central Government or a State Government, as the case may be, shall be eligible for election to the Council under clause (a) of sub-section (2).",
              "(4) One-third of the members of the Council referred to in clause (a) of sub-section (2) shall retire as soon as may be on the expiration of every second year by rotation but shall be eligible for re-election.",
              "(5) Any person nominated under clause (b) of sub-section (2) shall hold office for a period of six years from the date of his nomination unless he is removed earlier by the Central Government and shall be eligible for re-nomination:",
              "Provided that he shall be given an opportunity of being heard before such removal.",
            ]}, 
            { name:"13. Annual general meetings.", details:[
              "The Council shall every year hold an annual general meeting of the Institute to elect its members under clause (a) of sub-section (2) of section 12, or to discuss any matter which it deems fit, and not more than fifteen months shall elapse between the date of one annual general meeting of the Institute and that of the next:",
              "Provided that from the appointed day the Institute may hold its first annual general meeting within a period of not more than eighteen months and if such general meeting is held within that period, it shall not be necessary for the Institute to hold any general meeting in that year:",
              "Provided further that the Central Government may, for sufficient reasons, extend the time within which any general meeting shall be held.",
            ]},
            { name:"14. Re-election to Council.", details:[
              "(1) Subject to the provisions of sub-section (2), a member of the Council elected under clause (a) of sub- section (2) of section 12 shall be eligible for re-election but not for more than two consecutive terms.",
              "(2) A member of the Council, who is or has been elected, as the President under sub-section (1) of section 17, shall not be eligible for election or nomination as a member of the Council.",
            ]}, 
            { name:"15. Settlement of dispute regarding election.", details:["In case of any dispute regarding any election under clause (a) of sub-section (2) of section 12, the aggrieved person may make an application within thirty days from the date of the declaration of the result of the election to the Council which shall forward the same forthwith to the Central Government."]},
            { name:"16. Establishment of Tribunal.", details:[
              "(1) On receipt of any application under section 15, the Central Government shall, by notification, establish a Tribunal consisting of a Presiding Officer and two other Members to decide such dispute and the decision of such Tribunal shall be final.",
              {
                name:"(2) A person shall not be qualified for appointment,—",
                details:[
                  "(a) as a Presiding Officer of the Tribunal unless he has been a member of the Indian Legal Service and has held a post in Grade I of the service for at least three years;",
                  "(b) as a Member unless he has been a member of the Council for at least one full term and who is not a sitting Member of the Council or who has not been a candidate in the election under dispute; and",
                  "(c) as a Member unless he holds the post of a Joint Secretary to the Government of India or any other post under the Central Government carrying a scale of pay which is not less than that of a Joint Secretary to the Government of India.",
                ]
              },
              "(3) The terms and conditions of service of the Presiding Officer and Members of the Tribunal, their place of meetings, remuneration and allowances shall be such as may be prescribed.",
              "(4) The expenses of the Tribunal shall be borne by the Council.",
            ]}, 
            { name:"17. President, Vice-President and Honorary Secretary.", details:[
              "(1) The Council shall, at its first meeting, elect three of its members from amongst persons referred to in clause (a) of sub-section (2) of section 12, to be respectively the President, Vice-President and Honorary Secretary thereof, and as often as the office of the President, Vice-President and Honorary Secretary falls vacant, the Council shall choose one of the member in the same manner:",
              "Provided that the Chairperson of the Council of the Actuarial Society shall continue to hold such office as President after the commencement of this Act, until such time as a President is elected under the provisions of this sub-section.",
              "(2) The President shall be the Chief Executive Officer of the Council.",
              "(3) The President, the Vice-President or the Honorary Secretary shall hold office for a period of two years from the date on which he is chosen provided that he continues to be a member of the Council.",
              "(4) The President and the Vice-President shall, notwithstanding the expiration of his term, continue to hold office until his successor enters upon his office.",
              "(5) In the event of occurrence of any vacancy in the office of the President, the Vice-President shall act as the President until a new President is elected in accordance with the provisions of this section to fill such vacancy and enters upon his office.",
              "(6) When the President is unable to discharge his functions owing to absence, illness or any other cause, the Vice-President shall discharge his functions until the President resumes his duties.",
            ]},
            { name:"18. Resignation from membership and filling up to casual vacancies.", details:[
              "(1) Any member of the Council may at any time resign his membership by writing under his hand addressed to the President, and the seat of such member shall become vacant when such resignation is accepted and notified by the Council.",
              "(2) A member of the Council, other than a member nominated under clause (b) of sub-section (2) of section 12 shall be deemed to have vacated his seat if he is declared by the Council to have been absent without sufficient reason from three consecutive meetings of the Council, or of any of the Committees constituted by the Council, and of which he is a member or he has been found guilty of any professional or other misconduct and awarded penalty of fine or if his name is, for any cause, removed from the register under the provisions of sections 24 and 30.",
              "(3) A casual vacancy in the office of a member of the Council shall be filled by fresh election or by nomination by the Central Government, as the case may be, and the person elected or nominated to fill the vacancy shall hold office only for the remainder of the term for which the member in whose place he was elected or nominated would have held that office:",
              "Provided that no election shall be held to fill a casual vacancy occurring within one year prior to the date of the expiration of the term of such member.",
              "(4) No act done by the Council shall be called in question on the ground merely of the existence of any vacancy in, or defect in the constitution of the Council.",
            ]}, 
            { name:"19. Functions of Council.", details:[
              "(1) The duty of carrying out the functions under the provisions of this Act shall be vested in the Council.",
              {
                name:"(2) In particular and without prejudice to the generality of the foregoing power, the functions of the Council shall include—",
                details:[
                  "(a) the holding of examination of the candidates for enrolment and specifying fees therefor;",
                  "(b) the specifying of qualifications for entry in the register;",
                  "(c) the recognition of foreign qualifications and training for the purposes of enrolment;",
                  "(d) the granting of or refusal to grant the certificate of practice under this Act;",
                  "(e) the maintenance and publication of a register of persons qualified to practice as Actuaries;",
                  "(f) the levy and collection of fees from members, students, examinees and other persons;",
                  "(g) the removal of names from the register and the restoration to the register of names which have been removed;",
                  "(h) the regulation and maintenance of the status and standard of professional qualifications of members of the Institute;",
                  "(i) to issue guidelines for the observance of the members, including the student members;",
                  "(j) to receive gifts, grants, donations or benefactions from the Central or State Governments and to receive bequests, donations and transfer of movable or immovable properties from testators, donors or transferors, as the case may be;",
                  "(k) co-operating with educational or other institutions in any part of the world having objects wholly or partly similar to those of the Institute by exchange of members and generally in such manner as may be conducive to achievement of their common objects;",
                  "(l) instituting and awarding fellowships, scholarships, prizes and medals;",
                  "(m) giving gifts, grants, donations or benefactions to other institutions or bodies having objects similar to those of the Institute;",
                  "(n) the carrying out, by granting financial assistance to persons other than members of the Council, or in any other manner, of research in the actuarial science;",
                  "(o) the maintenance of a library and publication of books, journals and periodicals relating to actuarial science;",
                  "(p) the exercise of disciplinary powers conferred by this Act;",
                  "(q) establishing such regional council or councils as may be decided from time to time and fixing their headquarters; and",
                  "(r) doing all such things as may be necessary, incidental or conducive to the attainment of all or any of the objects of the Institute.",
                ]
              },
            ]},
            { name:"20. Staff, remuneration and allowances.", details:[
              {
                name:"(1) For the efficient performance of its functions, the Council may—",
                details:[
                  "(a) appoint an Executive Director, a Treasurer and such other officers and employees as it deems necessary and fix their salaries, fees, allowances and other conditions of service; and",
                  "(b) fix the allowances of the President, the Vice-President, the Honorary Secretary and other members of the Council and its Committees, in such manner as may be specified.",
                ]
              },
              "(2) The Executive Director of the Council shall be entitled to participate in the meetings of the Council but shall not be entitled to vote thereat.",
            ]}, 
            { name:"21. Committees of Council.", details:[
              "(1) The Council may constitute such committees from amongst its members, and co-opt therein persons who are not members of the Institute, as it deems necessary for the purpose of carrying out the provisions of this Act:",
              "Provided that the number of co-opted members shall not exceed one-third of the total membership of the committee.",
              {
                name:"(2) Every committee constituted under this section shall elect its own Chairman: Provided that—",
                details:[
                  "(i) where the President is a member of such committee, he shall be the Chairman of such committee, and in his absence, the Vice-President, if he is a member of such committee, shall be its Chairman; and",
                  "(ii) where the President is not a member of such committee but the Vice-President is a member, he shall be its Chairman.",
                ]
              },
              "(3) The committees shall exercise such functions and be subject to such conditions as may be specified.",
            ]},
            { name:"22. Finances of Council.", details:[
              "(1) There shall be established a fund under the management and control of the Council into which shall be paid all moneys (including donations and grants) received by the Council and out of which shall be met all expenses and liabilities incurred by the Council.",
              "(2) The Council may invest any money for the time being standing to the credit of the fund in any security as it may deem prudent consistent with the considerations of security of such investments and maximum returns thereon.",
              "Explanation.—For the purposes of this sub-section, the expression 'securities' shall have the meaning assigned to it in section 2 of the Securities Contracts (Regulation) Act, 1956 (42 of 1956) as amended from time to time.",
              "(3) The Council shall keep proper accounts of the fund distinguishing capital account from revenue account.",
              "(4) The annual accounts of the Institute shall be subject to audit by a Chartered Accountant in practice within the meaning of the Chartered Accountants Act, 1949 (38 of 1949) to be appointed annually by the Council:",
              "Provided that no member of the Council who is a Chartered Accountant or a person who is in partnership with such member shall be eligible for appointment as an auditor under this sub-section.",
              "(5) As soon as may be practicable at the end of each year, but not later than the 30th day of September of the year next following, the Council shall cause to be published in the Gazette of India, a copy of the audited accounts and the report of the Council for that year and copies of the said accounts and report shall be forwarded to the Central Government and to all the members of the Institute.",
              {
                name:"(6) The Council may borrow from a scheduled bank, as defined in the Reserve Bank of India Act, 1934 (2 of 1934) or from any public financial institution—",
                details:[
                "(a) any money required for meeting its liabilities on capital account on the security of the fund or on the security of any other asset, for the time being belonging to it; or",
                "(b) for the purpose of meeting current liabilities, pending the receipt of income, by way of temporary loan loan or overdraft.",
                "Explanation.—The expression 'public financial institution' means a financial institution specified in section 4A of the Companies Act, 1956 (1 of 1956).",
              ]
              },
            ]}, 
            ]
        },
        {
          name:"3. Register of Members",
          sections:[
            { name:"23. Register.", details:[
              "(1) The Council shall maintain in the specified manner a register of the members of the Institute.",
              {
                name:"(2) The register shall include the following particulars about every member of the Institute, namely:—",
                details:[
                  "(a) his full name, date of birth, domicile, residential and professional addresses;",
                  "(b) the date on which his name is entered in the register;",
                  "(c) his qualifications;",
                  "(d) whether he holds a certificate of practice; and",
                  "(e) any other particulars which may be specified.",
                ]
              },
              "(3) The Council shall cause to be published in such manner as may be specified a list of members as on the 1st day of April each year, and shall, if requested to do so by any such member, send him a copy of such list, on payment of such amount as may be specified.",
              "(4) Every member of the Institute shall, on his name being entered in the register, pay such annual membership fee as may be specified by the Council.",
            ]},
            { name:"24. Removal of name from register.", details:[
              {
                name:"The Council may, by order, remove from the register the name of any member of the Institute—",
                details:[
                  "(a) who is dead; or",
                  "(b) from whom a request has been received to that effect; or",
                  "(c) who has not paid any specified fee required to be paid by him; or",
                  "(d) who is found to have been subject to, at the time when his name was entered in the register, or who at any time thereafter has become subject to, any of the disqualifications mentioned in section 11; or",
                  "(e) who for any other reason has ceased to be entitled to have his name borne on the register.",
                ]
              }
            ]},
            { name:"25. Re-entry in register.", details:["The Council may re-enter the name of a member whose name has been removed from the register for reasons mentioned in clauses (b), (c), (d) and (e) of section 24, by an order, and on paying such fees, and after satisfying such conditions and requirements as may be specified."]},            
            ]
        },
        {
          name:"4. Misconduct",
          sections:[
            { name:"26. Disciplinary Committee.", details:[
              "(1) The Council shall constitute a Disciplinary Committee consisting of the President or the Vice-President of the Council as the Presiding Officer and two members of the Council elected by the Council and two members to be nominated by the Central Government from amongst the persons of eminence having experience in the field of law, education, economics, business, finance, accountancy or public administration:",
              "Provided that the Council may constitute more regional Disciplinary Committees as and when it deems fit.",
              "(2) The Disciplinary Committee in making the inquiry under the provisions of this Act shall follow such procedure and submit the report to the Council within such time as may be prescribed.",

            ]},
            { name:"27. Appointment of Prosecution Director.", details:["(1) The Council may, by notification, appoint a Prosecution Director and such other employees to assist the Disciplinary Committee in making inquiries in respect of any information or complaint received by the Council under the provisions of this Act.",
            "(2) In order to make inquiries under the provisions of this Act, the Prosecution Director shall follow such procedure as may be prescribed."]},
            { name:"28. Authority, Council, Disciplinary Committee and Prosecution Director to have powers of civil court.", details:[
              {
                name:"For the purposes of an inquiry under the provisions of this Act, the Authority, the Disciplinary Committee and the Prosecution Director shall have the same powers as are vested in a civil court under the Code of Civil Procedure, 1908 (5 of 1908), in respect of the following matters, namely:—",
                details:[
                  "(a) summoning and enforcing the attendance of any person and examining him on oath;",
                  "(b) the discovery and production of any document; and",
                  "(c) receiving evidence on affidavit.",
                ]
              }
            ]},
            { name:"29. Action by Council on disciplinary Committee’s report.", details:[
              "(1) On receipt of a report from the Disciplinary Committee, if the Council is satisfied that the member of the Institute is guilty of any professional or other misconduct, it shall record its findings accordingly and shall proceed in accordance with the provisions of section 30.",
              "(2) In case the Council is not satisfied with the report of the Disciplinary Committee and is of the opinion that it requires further inquiry, it may refer the report again to the Disciplinary Committee for such further inquiry as may be directed through an order of the Council.",
              "(3) If the Council disagrees with the findings of the Disciplinary Committee, it may direct the Prosecution Director or itself make an appeal to the Authority."
            ]},
            { name:"30. Member to be afforded opportunity of being heard.", details:[
              {
                name:"Where the Council is of the opinion that a member is guilty of a professional or other misconduct mentioned in the Schedule, it shall afford to the member a reasonable opportunity of being heard before making any order against him and may thereafter take any one or more of the following actions, namely:—",
                details:[
                  "(a) reprimand the member; or",
                  "(b) remove the name of the member from the register permanently or for such period, as it thinks fit.",
                  "(c) impose such fine as it may think fit, which may extend to five lakh rupees.",
                  "Explanation.—For the purposes of this section, “member of the Institute” includes a person who was a member of the Institute on the date of the alleged misconduct although he has ceased to be a member of the Institute at the time of the inquiry.",
                ]
              }
            ]},
            { name:"31. Professional or other misconduct defined.", details:["For the purposes of this Act, the expression “professional or other misconduct” shall be deemed to include any act or omission provided in the Schedule, but nothing in this section shall be construed to limit or abridge in any way the power conferred or duty cast on the Disciplinary Committee or the Prosecution Director to inquire into the conduct of any member of the Institute under any other circumstances. "]},                        
            ]
        },
        {
          name:"5. Appeals",
          sections:[
            { name:"32. Constitution of Appellate Authority.", details:[
              "(a) The Appellate Authority constituted under sub-section (1) of section 22A of the Chartered Accountants Act, 1949 (38 of 1949), shall be deemed to be the Appellate Authority for the purposes of this Act subject to the modification that for clause (b) of said sub-section (1), the following clause had been substituted, namely:—",
              "“(b) the Central Government shall, by notification, appoint two part-time Members from amongst the persons who have been members of the Council of the Institute of Actuaries for at least one full term and who are not sitting members of the Council;”.",
            ]},
            { name:"33. Term of Office of Members of Authority.", details:["A person appointed as a Member shall hold office for a term of three years from the date on which he enters upon his office or until he attains the age of sixty-seven years, whichever is earlier."]},
            { name:"34. Allowances, conditions of service of Members and procedure, etc., of Authority.", details:["The provisions of section 22C, section 22D and section 22F of the Chartered Accountants Act, 1949 (38 of 1949) shall apply to the Authority in relation to allowances and terms and conditions of service of its Chairperson and members, and in discharge of its functions under this Act as they apply to it in the discharge of its functions under the Chartered Accountants Act, 1949."]},
            { name:"35. Officers and other staff of Authority.", details:[
              "(1) The Council shall make available to the Authority such officers and other staff members as may be necessary for the efficient performance of the functions of the Authority.",
              "(2) The salaries and allowances and conditions of service of the officers and other staff members of the Authority shall be such as may be specified.",
            ]},
            { name:"36. Appeal to Authority.", details:[
              "(1) Any member of the Institute aggrieved by any order of the Council imposing on him any of the penalties referred to in section 30, may, within ninety days of the date on which the order is communicated to him, prefer an appeal to the Authority:",
              "Provided that the Authority may entertain any such appeal after the expiry of the said period of ninety days, if it is satisfied that there was sufficient cause for not filing the appeal in time.",
              {
                name:"(2) The Authority may, after calling for the records of any case, revise any order made by the Council under section 30 and may—",
                details:[
                  "(a) confirm, modify or set aside the order;",
                  "(b) impose any penalty or set aside, reduce or enhance the penalty imposed by the order;",
                  "(c) remit the case to the Disciplinary Committee for such further inquiry as the Authority considers proper in the circumstances of the case; or",
                  "(d) pass such other order as the Authority thinks fit:",
                ]
              },
              "Provided that the Authority shall give an opportunity of being heard to the parties concerned before passing any order.",
            ]}            
            ]
        },
        {
          name:"6. Penalties",
          sections:[
            { name:"37. Penalty for falsely claiming to be a member, etc.", details:[
              "Subject to the provisions of section 10, any person who,—",
              {
                name:"(a) not being a member of the Institute,—",
                details:[
                  "(i) represents that he is a member of the Institute in any of the manners mentioned in section 7; or",
                  "(ii) uses the designation 'Actuary'; or",
                  "(iii) uses the letters 'AIAI' or 'FIAI' after his name; or",
                  "(iv) practises the profession of an Actuary; or",                  
                ]
              },
              {
                name:"(b) being a member of the Institute, but not having a certificate of practice, represents that he is in practice, or practises as an Actuary,",
                details:[
                  " ",
                ]
              },
              "shall be punishable on first conviction with fine which may extend to one lakh rupees, and on any subsequent conviction with imprisonment which may extend to one year, or with fine which may extend to two lakh rupees, or with both.",
            ]},
            {name:"38. Penalty for using name of Institution, awarding degrees of actuarial science, etc.", details:[
              {
                name:"(1) Save as otherwise provided in this Act, no person shall—",
                details:[
                  "(a) use a name or a common seal which is identical with the name or the common seal of the Institute or so nearly resembles it so as to deceive or as is likely to deceive the public; or",
                  "(b) award any degree, diploma or certificate or bestow any designation which indicates or purports to indicate the position or attainment of any qualification or competence in actuaryship similar to that of a member of the Institute; or",
                  "(c) seek to regulate in any manner whatsoever the profession of Actuaries.",
                ]
              },
              "(2) Any person contravening the provisions of sub-section (1) shall, without prejudice to any other proceedings, which may be taken against him, be punishable with fine, which may extend on first conviction to fifty thousand rupees and on any subsequent conviction with imprisonment which may extend to one year, or, with fine which may extend to one lakh rupees, or with both.",
              "(3) Nothing contained in this section shall apply to any University or other institution established by law or to any body affiliated to the Institute.",
            ]},
            {name:"39. Companies not to engage in actuarial practice.",details:[
              "(1) No company, whether incorporated in India or elsewhere, shall practice as Actuaries.",
              "(2) Any company contravening the provisions of sub-section (1) shall be punishable on first conviction with fine which may extend to ten thousand rupees, and on any subsequent conviction with fine which may extend to twenty-five thousand rupees.",
            ]},
            {name:"40. Unqualified person not to sign documents.",details:[
              "(1) No person other than a fellow member of the Institute shall sign any document on behalf of an Actuary in practice or a firm of such Actuaries in his or its professional capacity.",
              "(2) Any person contravening the provisions of sub-section (1) shall, without prejudice to any other proceedings which may be taken against him, be punishable on first conviction with fine which may extend to fifty thousand rupees, and on any subsequent conviction with imprisonment which may extend to one year, or with fine which may extend to one lakh rupees, or with both.",
            ]},
            {name:"41. Offences by companies.",details:[
              "(1) If the person committing an offence under this Act is a company, the company as well as every person in charge of, and responsible to, the company for the conduct of its business at the time of the commission of the offence shall be deemed to be guilty of the offence and shall be liable to be proceeded against and punished accordingly:",
              "Provided that nothing contained in this sub-section shall render any such person liable to any punishment if he proves that the offence was committed without his knowledge or that he had exercised all due diligence to prevent the commission of such offence.",
              {
                name:"(2) Notwithstanding anything contained in sub-section (1), where an offence under this Act has been committed by a company and it is proved that the offence has been committed with the consent or connivance of, or that the commission of the offence is attributable to any neglect on the part of, any director, manager, secretary or other officer of the company, such director, manager, secretary or other officer shall also be deemed to be guilty of that offence and shall be liable to be proceeded against and punished accordingly.",
                details:[
                  "Explanation.—For the purposes of this section—",
                  "(a) 'company' means any body corporate and includes a firm or other association of individuals; and",
                  "(b) 'director', in relation to a firm, means a partner in the firm.",
                ]
              }
            ]},
            {name:"42. Sanction to prosecute.",details:[
              "No person shall be prosecuted under this Act except on a complaint made by or under the order of the Council or of the Central Government."
            ]},                    
            ]
        },
        {
          name:"7. Quality Review Board",
          sections:[
            { name:"43. Establishment of Quality Review Board.",details:[
              "(1) The Central Government shall, by notification, constitute a Quality Review Board consisting of a Chairperson and not more than four Members:",
              "Provided that in case the Board is constituted with two Members, one each shall be nominated by the Council and the Central Government, respectively.",
              "(2) The Chairperson and Members of the Board shall be appointed from amongst the persons of eminence having experience in the field of law, education, economics, business, finance, accountancy or public administration.",
              "(3) Two Members of the Board shall be nominated by the Council and other two Members shall be nominated by the Central Government.",
            ]}, 
            { name:"44. Functions of Board.",details:[
              {
                name:"The Board shall perform the following functions, namely:—",
                details:[
                  "(a) to fix standards for the services provided by the members of the Institute;",
                  "(b) to review the quality of services provided by the members of the Institute including actuarial audit services; and",
                  "(c) to guide the members of the Institute to improve the quality of services and adherence to the various statutory and other regulatory requirements.",
                ]
              }
            ]}, 
            { name:"45. Procedure of Board.",details:["The Board shall follow in its meeting and in discharging its functions such procedure as may be prescribed."]}, 
            { name:"46. Terms and conditions of Chairperson and Members of Board.",details:["The terms and conditions of service of the Chairperson and the Members of the Board, their place of meetings, remuneration and allowances shall be such as may be prescribed."]}, 
            { name:"47. Expenditure of Board.",details:["The expenditure of the Board shall be borne by the Council."]},                         
            ]
        },
        {
          name:"8. Dissolution of the Actuarial Society of India registered under the Societies Registration Act",
          sections:[
            { name:"48. Dissolution of Actuarial Society of India.",details:[
              {
                name:"On the appointed day,—",
                details:[
                  "(a) the Society known as the Actuarial Society of India registered under the Societies Registration Act, 1860 (21 of 1860) and the Bombay Public Trusts Act, 1950 (Bombay Act XXXIX of 1950) shall stand dissolved and thereafter no person shall make, assert or take any claims or demands or proceedings against the dissolved society or against any officer thereof in his capacity as such officer except in so far as may be necessary, for enforcing the provisions of this Act;",
                  "(b) the right of every member to, or in respect of, the dissolved society shall be extinguished, and thereafter no member of the society shall make, assert or take any claims or demands or proceedings in respect of that society except as provided in this Act.",
                ]
              }
            ]},
            { name:"49. Provisions respecting employees of dissolved society.",details:[
              "(1) Every person employed in the dissolved society and continuing in its employment immediately before the commencement of this Act shall, as from such commencement, become an employee of the Institute, shall hold his office or service therein by the same tenure and upon the same terms and conditions and with the same rights and privileges as to retirement benefits as he would have held the same under the dissolved society if this Act had not been passed, and shall, continue to do so unless and until his employment in the Institute is terminated or until his remuneration, terms and conditions of employment are duly altered by the Institute.",
              "(2) Notwithstanding anything contained in the Industrial Disputes Act, 1947 (14 of 1947) or in any other law for the time being in force, the transfer of the services of any employee of the dissolved society to the Institute shall not entitle any such employee to any compensation under that Act or other law, and no such claims shall be entertained by any court, tribunal or other authority.",
            ]},                         
            ]
        },
        {
          name:"9. Miscellaneous",
          sections:[
            { name:"50. Maintenance of more than one offices by Actuary.",details:[
              "(1) Where an Actuary in practice or a firm of such Actuaries has more than one offices within or outside India, each one of such offices shall be in the separate charge of a fellow member of the Institute:",
              "Provided that the Council may in suitable cases exempt any Actuary in practice or firm of such Actuaries from the operation of this sub-section.",
              "(2) Every Actuary in practice or a firm of such Actuaries maintaining more than one office shall send to the Council a list of offices and the person in charge thereof and shall keep the Council informed of any changes in relation thereto.",
            ]},
            { name:"51. Reciprocity.",details:[
              "(1) Where any country, notified by the Central Government in this behalf in the Official Gazette, prevents persons of Indian domicile from becoming members of any institution similar to the Institute or from practicing the profession of Actuaries or subjects them to unfair discrimination in that country, no subject of any such country shall be entitled to become a member of the Institute or practice the profession of Actuaries in India.",
              "(2) Subject to the provisions of sub-section (1), the Council may specify the conditions, if any, subject to which foreign qualifications relating to actuarial science shall be recognised for the purposes of entry in the register.",
            ]},
            { name:"52. Power of Central Government to issue directions.",details:[
              "(1) For the purposes of this Act, the Central Government may, from time to time, give to the Council such general or special directions as it thinks fit, and the Council shall, in the discharge of its functions under this Act, comply with such directions.",
              "(2) If, in the opinion of the Central Government, the Council has persistently made default in giving effect to the directions issued under sub-section (1), it may, after giving an opportunity of being heard to the Council, by notification, dissolve the Council, whereafter a new Council shall be constituted in accordance with the provisions of this Act with effect from such date as may be decided by the Central Government.",
              "(3) Where the Central Government has issued a notification under sub-section (2) dissolving the Council, it may, pending the constitution of a new Council in accordance with the provisions of this Act, authorise any person or body of persons to take over the management of the affairs of the Council and to exercise such functions as may be mentioned in the notification.",
            ]},
            { name:"53. Protection of action taken in good faith.",details:["No suit, prosecution or other legal proceeding shall lie against the Central Government or the Council or the Disciplinary Committee or the Tribunal or the Authority or the Board or the Prosecution Director or any officer of that Government, Council, Committee, Tribunal, Authority or Board, for anything which is in good faith done or intended to be done under this Act or any rule, regulation, notification, direction or order made thereunder."]},
            { name:"54. Members, etc., to be public servants.",details:["The Chairperson, Presiding Officer, Members and other officers and employees of the Authority, Tribunal and Board, and the Prosecution Director shall be deemed to be public servants within the meaning of section 21 of the Indian Penal Code (45 of 1860)."]},
            { name:"55. Power of Central Government to make rules.",details:[
              "(1) The Central Government may, by notification, make rules to carry out the provisions of this Act.",
              {
                name:"(2) In particular and without prejudice to the generality of the foregoing power, such rules may provide for all or any of the following matters, namely:—",
                details:[
                  "(a) the manner of election and nomination in respect of members to the Council under sub-section (2) of section 12;",
                  "(b) the terms and conditions of service of the Presiding Officers and Members of the Tribunal, place of meeting, remuneration and allowances to be paid to them under sub-section (3) of section 16;",
                  "(c) the procedure of inquiry and submission of report by the Disciplinary Committee under sub-section (2) of section 26;",
                  "(d) the procedure of inquiry by the Prosecution Director under sub-section (2) of section 27;",
                  "(e) any act or omission which may be determined as professional misconduct under section 31;",
                  "(f) the procedure to be followed by the Board in its meetings and discharging its functions under section 45; and",
                  "(g) terms and conditions of service of the Chairman and Members of the Board under section 46.",
                ]
              }
            ]},
            { name:"56. Power to make regulations.",details:[
              "(1) The Council may, with the previous approval of the Central Government and subject to the previous publication, by notification in the Official Gazette, make regulations to carry out the provisions of this Act.",
              {
                name:"(2) In particular, and without prejudice to the generality of the foregoing power, such regulations may provide for all or any of the following matters, namely:—",
                details:[
                  "(a) the examination and training for the purposes of clauses (b), (c) and (d) of sub-section (1) of section 6;",
                  "(b) the manner of making an application under sub-section (3) of section 6;",
                  "(c) the fees payable under sub-section (3) of section 6, sub-section (2) of section 9, clause (a) of sub-section (2) of section 19, sub-section (4) of section 23;",
                  "(d) the manner in which the honorary member may be chosen under sub-section (1) of section 8;",
                  "(e) the terms and conditions on which an affiliate member may be admitted under sub-section (2) of section 8;",
                  "(f) the academic qualifications for admission of a student member under sub-section (3) of section 8;",
                  "(g) qualifications required for a certificate of practice under sub-section (1) and the form in which an application may be made under sub-section (2) of section 9;",
                  "(h) the transaction of business by the Council for the discharge of its functions mentioned in sub-section (2) of section 19;",
                  "(i) terms and conditions of the services under sub-section (1) of section 20;",
                  "(j) the functions and conditions of the committees under sub-section (3) of section 21;",
                  "(k) the manner in which the register of the members of the Institute and other particulars to be maintained under sub-sections (1) and (2) of section 23;",
                  "(l) the manner in which the annual list of members of the Institute may be published under sub-section (3) of section 23;",
                  "(m) the conditions and requirements and payment of fee for re-entry in the register under section 25;",
                  "(n) salaries and allowances and conditions of service of the officers and other staff members of the Authority under sub-section (2) of section 35;",
                  "(o) the conditions subject to which foreign qualifications may be recognised under sub-section (2) of section 51; and",
                  "(p) any other matter which is required to be, or may be, prescribed under this Act.",
                ]
              }
            ]},
            { name:"57. Power of Central Government to issue directions for making or amending regulations.",details:[
              "(1) Where the Central Government considers it expedient so to do, it may, by order in writing, direct the Council to make any regulations or to amend or revoke any regulations already made within such period as it may specify in this behalf.",
              "(2) If the Council fails or neglects to comply with such order within the specified period, the Central Government may itself make the regulations or amend or revoke the regulations made by the Council.",
            ]},
            { name:"58. Laying of rules and regulations.",details:["Every rule and every regulation made under this Act shall be laid, as soon as may be after it is made, before each House of Parliament, while it is in session, for a total period of thirty days which may be comprised in one session or in two or more successive sessions, and if, before the expiry of the session immediately following the session or the successive sessions aforesaid, both Houses agree in making any modification in the rule or regulation or both Houses agree that the rule or regulation should not be made, the rule or regulation shall, thereafter have effect only in such modified form or be of no effect, as the case may be; so, however, that any such modification or annulment shall be without prejudice to the validity of anything previously done under that rule or regulation."]},
            { name:"59. Power to remove difficulties.",details:[
              "(1) If any difficulty arises in giving effect to the provisions of this Act, the Central Government may, by order, published in the Official Gazette, make such provisions not inconsistent with the provisions of this Act, as may appear to be necessary for removing the difficulty:",
              "Provided that no such order shall be made under this section after the expiry of a period of two years from the commencement of this Act.",
              "(2) Every order made under this section shall be laid, as soon as may be after it is made, before each House of Parliament.",
            ]},            
            ]
        },
        {
          name:"THE SCHEDULE.",
          sections:[
            { name:"Schedule Part I", details:[
              "(See section 31)",
              "PART I",
              "Professional misconduct in relation to members of the Institute in practice",
              {
                name:"An Actuary in practice shall be deemed to be guilty of professional misconduct, if he—",
                details:[
                  "(1) allows any person to practice in his name as an actuary unless such person is also an actuary in practice and is in partnership with or employed by himself; or",
                  "(2) pays by way of remuneration to an employee, pays or allows or agrees to pay or allow, directly or indirectly, any share, commission or brokerage in the fees or profits of his professional business, to any person other than a member of the Institute or a partner or a retired partner or the legal representative of a deceased partner; or",
                  "(3) enters into partnership with any person other than an Actuary in practice or a person resident outside India who but for his residence abroad would be entitled to be admitted as a member under clause (c) of sub-section (1) of section 6 or whose qualifications are recognised by the Central Government or the Council for the purpose of permitting such partnership, provided the Actuary shares in the fees or profits of the business of the partnership both within and outside of India; or",
                  "(4) secures either through the services of a person who is not an employee of such Actuary or who is not qualified to be his partner or by means which are not open to an Actuary, any professional business; or",
                  "(5) accepts an assignment as Actuary previously held by another Actuary without first communicating with him in writing; or",
                  "(6) charges or offers to charge, accepts or offers to accept in respect of any professional employment fees which are based on a percentage of profit or which are contingent upon the findings or results of such employment, except as permitted under any regulation made under this Act; or",
                  "(7) engages in any business or occupation other than the profession of Actuaries unless permitted by the Council so to engage:",
                  "Provided that nothing contained herein shall disentitle an Actuary from being a director of a company; or",
                  "(8) accepts a position as an actuary previously held by some other Actuary in practice in such conditions as to constitute undercutting; or",
                  "(9) allows a person not being a member of the Institute in practice, or a member not being his partner to sign on his behalf or on behalf of his firm, any valuation report or financial statement; or",
                  "(10) discloses information acquired in the course of his professional engagement to any person other than his client so engaging him, without the consent of such client, or otherwise than as required by any law for the time being in force; or",
                  "(11) certifies or submits in his name, or in the name of his firm, a valuation report or a financial statement unless the examination of such statement and the related records has been made by him or by a partner or an employee in his firm or by another Actuary in practice; or",
                  "(12) expresses his opinion or valuation reports or financial statements of any business or any enterprise in which he, his firm, or a partner in his firm has a substantial interest, unless he has disclosed the interest also in his report; or",
                  "(13) fails to disclose a material fact known to him in a valuation report or a financial statement, but disclosures of which is necessary to make the valuation report or the financial statement not misleading where he is concerned with such valuation report or the financial statement in a professional capacity; or",
                  "(14) fails to report a material misstatement known to him to appear in a valuation report or financial statement with which he is concerned in a professional capacity; or",
                  "(15) is grossly negligent in the conduct of his professional duties; or",
                  "(16) fails to obtain sufficient information to warrant the formation of an opinion in regard to any matter contained in any valuation report or financial statement prepared by him or on his behalf; or",
                  "(17) fails to invite attention to any material departure from the generally accepted procedure or professional work applicable to the circumstances, in any valuation report or financial statement prepared by him or on his behalf.",                      
                ]
              },                        
              
            ]},
            { name:"Schedule Part II", details:[
              "(See section 31)",
              "PART II",
              "Professional misconduct in relation to the members of the Institute in service",
              {
                name:"A member of the Institute (other than a member in practice) shall be deemed to be guilty of professional misconduct, if he being an employee of any company, firm or person,—",
                details:[
                  "(1) pays or allows or agrees to pay directly or indirectly to any person any share in the emoluments of the employment undertaken by him; or",
                  "(2) accepts or agrees to accept any part of fees, profits or gains by way of commission or gratification; or",
                  "(3) discloses confidential information acquired in the course of his employment except as and when required by law or except as permitted by his employer.",
                ]
              }          
              

            ]},
            { name:"Schedule Part III", details:[
              "(See section 31)",
              "PART III",
              "Professional misconduct in relation to the members of the Institute in service",
              {
                name:"A member of the Institute, whether in practice or not, shall be deemed to be guilty of professional misconduct, if he—",
                details:[
                  "(1) includes in any statement, return or form to be submitted to the Council any particulars knowing them to be false; or",
                  "(2) not being a fellow member of the Institute acts himself as a fellow member of the Institute; or",
                  "(3) does not supply the information called for or does not comply with the requirements asked for by the Council or any of its Committees; or",
                  "(4) contravenes any of the provisions of this Act or the regulations made thereunder or any guidelines issued by the Council under clause (i) of sub-section (2) of section 19; or",
                  "(5) is guilty of such other act or omission as may be specified by the Council.",
                ]
              }
            ]},
            { name:"Schedule Part IV", details:[
              "(See section 31)",
              "PART IV",
              "Other misconduct in relation to member of the Institute generally",
              {
                name:"A member of the Institute, whether in practice or not, shall be deemed to be guilty of other misconduct, if—",
                details:[
                  "(A) (1) he is held guilty by any civil or criminal court for an offence which is punishable with imprisonment for a term not exceeding six months;",
                  "(2) in the opinion of the Council, he brings disrepute to the profession or the Institute as result of his action whether or not related to his professional work;",
                  "(B) he is held guilty by any civil or criminal court for an offence which is punishable with imprisonment for a term exceeding six months.",
                ]
              },
            ]},
            ]
        },
      ]
    },

    {
      name:"Administrative Tribunals Act ,1985",
      summary:"An Act to provide for the adjudication or trial by Administrative Tribunals of disputes and complaints with respect to recruitment and conditions of service of persons appointed to public services and posts in connection with the affairs of the Union or of any State or of any local or other authority within the territory of India or under the control of the Government of India or of 1[any corporation or society owned or controlled by the Government in pursuance of article 323A of the Constitution] and for matters connected therewith or incidental thereto.      BE it enacted by Parliament in the Thirty-sixth Year of the Republic of India as follow:— ",
      
      Chapters:[
        {
          name:"1. Preliminary",
          sections:[
            { name:"1. Short title, extent and commencement.", details:[
              "(1) This Act may be called the Administrative Tribunals Act, 1985.",
              "(2) It extends,—",
              "(a) in so far as it relates to the Central Administrative Tribunal, to the whole of India;",
              "2* * * * *.",
              "(3) The provisions of this Act, in so far as they relate to the Central Administrative Tribunal, shall come into force on such date3 as the Central Government may, by notification, appoint.",
              "(4) The provisions of this Act, in so far as they relate to an Administrative Tribunal for a State, shall come into force in a State on such date as the Central Government may, by notification, appoint.",
            ]},
            { name:"2. Act not to apply to certain persons..", details:[
              {
                name:"The provisions of this Act shall not apply to—",
                details:[
                    "(a) any member of the naval, military or air forces or of any other armed forces of the Union;",
                    "4* * * * *",
                    "(c) any officer or servant of the Supreme Court or of any High Court 5[or courts subordinate thereto];",
                    "(d) any person appointed to the secretarial staff of either House of Parliament or to the secretarial staff of any State Legislature or a House thereof or, in the case of a Union territory having a Legislature, of that Legislature.",
                ]
            },
            ]},
            { name:"3. Definitions.", details:[
              {
                name:"In this Act, unless the context otherwise requires,—",
                details:[
                  "6[(a) “Administrative Member” means a Member of a Tribunal who is not a Judicial Member within the meaning of clause (i);]",
                  "7[(aa)] “Administrative Tribunal”, in relation to a State, means the Administrative Tribunal for the State or, as the case may be, the Joint Administrative Tribunal for that State and any other State or States;",
                  "(b) “application” means an application made under section 19;",
                  "(c) “appointed day”, in relation to a Tribunal, means the date with effect from which it is established, by notification, under section 4;",
                  {
                    name:"(d) “appropriate Government” means,—",
                    details:[
                      "(i) in relation to the Central Administrative Tribunal or a Joint Administrative Tribunal, the Central Government;",
                      "(ii) in relation to a State Administrative Tribunal, the State Government;",
                    ]
                  },
                  "(e) “Bench” means a Bench of a Tribunal;",
                  "(f) “Central Administrative Tribunal” means the Administrative Tribunal established under sub-section (1) of section 4;",
                  "(g) “Chairman” means the Chairman of a Tribunal;",
                  {
                    name:"(h) “Joint Administrative Tribunal” means an Administrative Tribunal for two or more States established under sub-section (3) of section 4;",
                    details:[
                      "1[(i) “Judicial Member” means a Member of a Tribunal appointed as such under this Act, and includes 2[the Chairman] who possesses any of the qualifications specified in sub-section (3) of section 6;",
                      "(ia) “Member” means a Member (whether Judicial or Administrative) of a Tribunal, and includes the Chairman 3***;]",
                    ]
                  },
                  "(j) “notification” means a notification published in the Official Gazette;",
                  "(k) “post” means a post within or outside India;",
                  "(l) “prescribed” means prescribed by rules made under this Act;",
                  "(m) “President” means the President of India;",
                  "4* * * * *",
                  "(o) “rules” means rules made under this Act;",
                  "(p) “service” means service within or outside India;",
                  {
                    name:"(h) “(q) “service matters”, in relation to a person, means all matters relating to the conditions of his service in connection with the affairs of the Union or of any State or of any local or other authority within the territory of India or under the control of the Government of India, or, as the case may be, of any corporation 5[or society] owned or controlled by the Government, as respects—",
                    details:[
                      "(i) remuneration (including allowances), pension and other retirement benefits;",
                      "(ii) tenure including confirmation, seniority, promotion, reversion, premature retirement and superannuation;",
                      "(iii) leave of any kind;",
                      "(iv) disciplinary matters; or",
                      "(v) any other matter whatsoever;",
                    ]
                  },
                  "(r) “service rules as to redressal of grievances”, in relation to any matter, means the rules, regulations, orders or other instruments or arrangements as in force for the time being with respect to redressal, otherwise than under this Act, of any grievances in relation to such matters;",
                  "1[(rr) “society” means a society registered under the Societies Registration Act, 1860 (21 of 1860), or under any corresponding law for the time being in force in a State;]",
                  "(s) “Supreme Court” means the Supreme Court of India;",
                  "(t) “Tribunal” means the Central Administrative Tribunal or a State Administrative Tribunal or a Joint Administrative Tribunal; 2[(u) “Vice-Chairman” means a Member who has been authorised by the appropriate Government to perform administrative functions at each of the places where Benches of the Tribunal have been set up.]",
                  "Explanation.—In the case of a Tribunal having two or more Vice-Chairmen, references to the Vice-Chairman in this Act shall be construed as a reference to each of those Vice-Chairmen.",

                  "1. Subs. by Act 19 of 1986, s. 4, for clause (i) (w.e.f. 22-1-1986).",
                  "2. Subs. by Act 1 of 2007, s. 2, for “the Chairman or a Vice-Chairman” (w.e.f. 19-2-2007).",
                  "3. The words “and a Vice-Chairman” omitted by s. 2, ibid. (w.e.f. 19-2-2007).",
                  "4. Clause (n) omitted by Act 19 of 1986, s. 4 (w.e.f. 22-1-1986).",
                  "5. Ins. by s. 4, ibid. (w.e.f. 22-1-1986).",

                ]
              },
            ]},
            ]
        },
        {
          name:"2. ESTABLISHMENT OF TRIBUNALS AND BENCHES THEREOF",
          sections:[
            { name:"4. Establishment of Administrative Tribunals.", details:[
              "(1) The Central Government shall, by notification, establish an Administrative Tribunal, to be known as the Central Administrative Tribunal, to exercise the jurisdiction, powers and authority conferred on the Central Administrative Tribunal by or under this Act.",
              "(2) The Central Government may, on receipt of a request in this behalf from any State Government, establish, by notification, an Administrative Tribunal for the State to be known as the.......(name of the State) Administrative Tribunal to exercise the jurisdiction, powers and authority conferred on the Administrative Tribunal for the State by or under this Act.",
              "(3) Two or more States may, notwithstanding anything contained in sub-section (2) and notwithstanding that any or all of those States has or have Tribunals established under that sub-section, enter into an agreement that the same Administrative Tribunal shall be the Administrative Tribunal for each of the States participating in the agreement, and if the agreement is approved by the Central Government and published in the Gazette of India and the Official Gazette of each of those States, the Central Government may, by notification, establish a Joint Administrative Tribunal to exercise the jurisdiction, powers and authority conferred on the Administrative Tribunals for those States by or under this Act.",
              "(4) An agreement under sub-section (3) shall contain provisions as to the name of the Joint Administrative Tribunal, the manner in which the participating States may be associated in the selection of the 3[Chairman and other Members] of the Joint Administrative Tribunal, the places at which the Bench or Benches of the Tribunal shall sit, the apportionment among the participating States of the expenditure in connection with the Joint Administrative Tribunal and may also contain such other supplemental, incidental and consequential provisions not inconsistent with this Act as may be deemed necessary or expedient for giving effect to the agreement.",
            ]},
            { name:"5. Composition of Tribunals and Benches thereof.", details:[]},
            { name:"6. Qualifications for appointment as Chairman, Vice-Chairman and other Members.", details:[]},
            { name:"7. Vice-Chairman to act as Chairman or to discharge his functions in certain circumstances.", details:[]},
            { name:"8. Term of office.", details:[]},
            { name:"9. Resignation and removal.", details:[]},
            { name:"10. Salaries and allowances and other terms and conditions of service of Chairman, and other Members.", details:[]},
            { name:"10A. Saving terms and conditions of service of Vice-Chairman.", details:[]},
            { name:"10B. Qualifications, terms and conditions of service of Chairman and Member.", details:[]},
            { name:"11. Provision as to the holding of offices by Chairman, etc., on ceasing to be such Chairman, etc.", details:[]},
            { name:"12. Financial and administrative powers of the Chairman.", details:[]},
            { name:"13. Staff of the Tribunal.", details:[]},
            ]
        },
        {
          name:"3. JURISDICTION, POWERS AND AUTHORITY OF TRIBUNALS",
          sections:[
            { name:"14. Jurisdiction, powers and authority of the Central Administrative Tribunal.", details:[]},
            { name:"15. Jurisdiction, powers and authority of State Administrative Tribunals.", details:[]},
            { name:"16. Jurisdiction, powers and authority of a Joint Administrative Tribunal.", details:[]},
            { name:"17. Power to punish for contempt.", details:[]},
            { name:"18. Distribution of business amongst the Benches.", details:[]},
          ]
        },
        {
          name:"4. PROCEDURE",
          sections:[
            { name:"19. Applications to tribunals.", details:[]},
            { name:"20. Applications not to be admitted unless other remedies exhausted.", details:[]},
            { name:"21. Limitation.", details:[]},
            { name:"22. Procedure and powers of Tribunals.", details:[]},
            { name:"23. Right of applicant to take assistance of legal practitioner and of Government, etc., to appoint presenting officers.", details:[]},
            { name:"24. Conditions as to making of interim orders.", details:[]},
            { name:"25. Power of Chairman to transfer cases from one Bench to another.", details:[]},
            { name:"26. Decision to be by majority.", details:[]},
            { name:"27. Execution of orders of a Tribunal.", details:[]},
          ]
        },
        {
          name:"5. MISCELLANEOUS",
          sections:[
            { name:"28. Exclusion of jurisdiction of courts except the Supreme Court under article 136 of the Constitution.", details:[]},
            { name:"29. Transfer of pending cases.", details:[]},
            { name:"29A. Provision for filing of certain appeals.", details:[]},
            { name:"30. Proceedings before a Tribunal to be judicial proceedings.", details:[]},
            { name:"31. Members and staff of Tribunal to be public servants.", details:[]},
            { name:"32. Protection of action taken in good faith.", details:[]},
            { name:"33. Act to have overriding effect.", details:[]},
            { name:"34. Power to remove difficulties.", details:[]},
            { name:"35. Power of the Central Government to make rules.", details:[]},
            { name:"36. Power of the appropriate Government to make rules.", details:[]},
            { name:"36A. Power to make rules retrospectively.", details:[]},
            { name:"37. Laying of rules.", details:[]},     
          ]
        },
      ]
    },
    {
      name:"Administrators-General Act",
      summary:
      "An Act to provide for the merger into the States of Assam, Punjab and West Bengal of certain territories acquired in pursuance of the agreements entered into between the Governments of India and Pakistan and for matters connected therewith.BE it enacted by Parliament in the Eleventh Year of the Republic of India as follows: ",
      Chapters:[
        {
          name:"",
          sections:[
            {
              name:"1. Short title, extent and commencement.", details:[]}
            ]
        },
      ]
    },
    {
      name:"Admiralty (Jurisdiction and Settlement of Maritime Claims) Act, 2017",
      summary:
      "An Act to provide for the merger into the States of Assam, Punjab and West Bengal of certain territories acquired in pursuance of the agreements entered into between the Governments of India and Pakistan and for matters connected therewith.BE it enacted by Parliament in the Eleventh Year of the Republic of India as follows: ",
      Chapters:[
        {
          name:"",
          sections:[
            {
              name:"1. Short title, extent and commencement.", details:[]}
            ]
        },
      ]
    },
    {
      name:"Advocates Act, 1961", 
      summary:
      "An Act to provide for the merger into the States of Assam, Punjab and West Bengal of certain territories acquired in pursuance of the agreements entered into between the Governments of India and Pakistan and for matters connected therewith.BE it enacted by Parliament in the Eleventh Year of the Republic of India as follows: ",
      Chapters:[
        {
          name:"",
          sections:[
            {
              name:"1. Short title, extent and commencement.", details:[]}
            ]
        },
      ]
    },
    {
      name:"Advocates Welfare Fund Act, 2001",
      summary:
      "An Act to provide for the merger into the States of Assam, Punjab and West Bengal of certain territories acquired in pursuance of the agreements entered into between the Governments of India and Pakistan and for matters connected therewith.BE it enacted by Parliament in the Eleventh Year of the Republic of India as follows: ",
      Chapters:[
        {
          name:"",
          sections:[
            {
              name:"1. Short title, extent and commencement.", details:[]}
            ]
        },
      ]
    },
    {
      name:"African Development Bank Act, 1983",
      summary:
      "An Act to provide for the merger into the States of Assam, Punjab and West Bengal of certain territories acquired in pursuance of the agreements entered into between the Governments of India and Pakistan and for matters connected therewith.BE it enacted by Parliament in the Eleventh Year of the Republic of India as follows: ",
      Chapters:[
        {
          name:"",
          sections:[
            {
              name:"1. Short title, extent and commencement.", details:[]}
            ]
        },
      ]
    },
    {
      name:"Agricultural and Processed Food Products Export Development Authority Act, 1985",
      summary:
      "An Act to provide for the merger into the States of Assam, Punjab and West Bengal of certain territories acquired in pursuance of the agreements entered into between the Governments of India and Pakistan and for matters connected therewith.BE it enacted by Parliament in the Eleventh Year of the Republic of India as follows: ",
      Chapters:[
        {
          name:"",
          sections:[
            {
              name:"1. Short title, extent and commencement.", details:[]}
            ]
        },
      ]
    },
    {
      name:"Agricultural Produce (Grading and Marking) Act, 1937",
      summary:
      "An Act to provide for the merger into the States of Assam, Punjab and West Bengal of certain territories acquired in pursuance of the agreements entered into between the Governments of India and Pakistan and for matters connected therewith.BE it enacted by Parliament in the Eleventh Year of the Republic of India as follows: ",
      Chapters:[
        {
          name:"",
          sections:[
            {
              name:"1. Short title, extent and commencement.", details:[]}
            ]
        },
      ]
    },
    {
      name:"Agriculturists' Loans Act, 1884",
      summary:
      "An Act to provide for the merger into the States of Assam, Punjab and West Bengal of certain territories acquired in pursuance of the agreements entered into between the Governments of India and Pakistan and for matters connected therewith.BE it enacted by Parliament in the Eleventh Year of the Republic of India as follows: ",
      Chapters:[
        {
          name:"",
          sections:[
            {
              name:"1. Short title, extent and commencement.", details:[]}
            ]
        },
      ]
    },
    {
      name:"Air (Prevention and Control of Pollution) Act, 1981",
      summary:
      "An Act to provide for the merger into the States of Assam, Punjab and West Bengal of certain territories acquired in pursuance of the agreements entered into between the Governments of India and Pakistan and for matters connected therewith.BE it enacted by Parliament in the Eleventh Year of the Republic of India as follows: ",
      Chapters:[
        {
          name:"",
          sections:[
            {
              name:"1. Short title, extent and commencement.", details:[]}
            ]
        },
      ]
    },
    {
      name:"Air Corporations (Transfer of Undertakings and Repeal) Act, 1994",
      summary:
      "An Act to provide for the merger into the States of Assam, Punjab and West Bengal of certain territories acquired in pursuance of the agreements entered into between the Governments of India and Pakistan and for matters connected therewith.BE it enacted by Parliament in the Eleventh Year of the Republic of India as follows: ",
      Chapters:[
        {
          name:"",
          sections:[
            {
              name:"1. Short title, extent and commencement.", details:[]}
            ]
        },
      ]
    },
    {
      name:"Air Force Act, 1950",
      summary:
      "An Act to provide for the merger into the States of Assam, Punjab and West Bengal of certain territories acquired in pursuance of the agreements entered into between the Governments of India and Pakistan and for matters connected therewith.BE it enacted by Parliament in the Eleventh Year of the Republic of India as follows: ",
      Chapters:[
        {
          name:"",
          sections:[
            {
              name:"1. Short title, extent and commencement.", details:[]}
            ]
        },
      ]
    },
    {
      name:"Air Craft Act, 1934",
      summary:
      "An Act to provide for the merger into the States of Assam, Punjab and West Bengal of certain territories acquired in pursuance of the agreements entered into between the Governments of India and Pakistan and for matters connected therewith.BE it enacted by Parliament in the Eleventh Year of the Republic of India as follows: ",
      Chapters:[
        {
          name:"",
          sections:[
            {
              name:"1. Short title, extent and commencement.", details:[]}
            ]
        },
      ]
    },
    {
      name:"Airports Authority of India Act, 1994",
      summary:
      "An Act to provide for the merger into the States of Assam, Punjab and West Bengal of certain territories acquired in pursuance of the agreements entered into between the Governments of India and Pakistan and for matters connected therewith.BE it enacted by Parliament in the Eleventh Year of the Republic of India as follows: ",
      Chapters:[
        {
          name:"",
          sections:[
            {
              name:"1. Short title, extent and commencement.", details:[]}
            ]
        },
      ]
    },
    {
      name:"Airports Economic Regulatory Authority of India Act, 2008",
      summary:
      "An Act to provide for the merger into the States of Assam, Punjab and West Bengal of certain territories acquired in pursuance of the agreements entered into between the Governments of India and Pakistan and for matters connected therewith.BE it enacted by Parliament in the Eleventh Year of the Republic of India as follows: ",
      Chapters:[
        {
          name:"",
          sections:[
            {
              name:"1. Short title, extent and commencement.", details:[]}
            ]
        },
      ]
    },
    {
      name:"Ajmer Tenancy and Land Records Act, 1950",
      summary:
      "An Act to provide for the merger into the States of Assam, Punjab and West Bengal of certain territories acquired in pursuance of the agreements entered into between the Governments of India and Pakistan and for matters connected therewith.BE it enacted by Parliament in the Eleventh Year of the Republic of India as follows: ",
      Chapters:[
        {
          name:"",
          sections:[
            {
              name:"1. Short title, extent and commencement.", details:[]}
            ]
        },
      ]
    },
    {
      name:"Aligarh Muslim University Act, 1920",
      summary:
      "An Act to provide for the merger into the States of Assam, Punjab and West Bengal of certain territories acquired in pursuance of the agreements entered into between the Governments of India and Pakistan and for matters connected therewith.BE it enacted by Parliament in the Eleventh Year of the Republic of India as follows: ",
      Chapters:[
        {
          name:"",
          sections:[
            {
              name:"1. Short title, extent and commencement.", details:[]}
            ]
        },
      ]
    },
    {
      name:"All India Council for Technical Education Act, 1987",
      summary:
      "An Act to provide for the merger into the States of Assam, Punjab and West Bengal of certain territories acquired in pursuance of the agreements entered into between the Governments of India and Pakistan and for matters connected therewith.BE it enacted by Parliament in the Eleventh Year of the Republic of India as follows: ",
      Chapters:[
        {
          name:"",
          sections:[
            {
              name:"1. Short title, extent and commencement.", details:[]}
            ]
        },
      ]
    },
    {
      name:"All India Institute of Medical Sciences Act, 1956",
      summary:
      "An Act to provide for the merger into the States of Assam, Punjab and West Bengal of certain territories acquired in pursuance of the agreements entered into between the Governments of India and Pakistan and for matters connected therewith.BE it enacted by Parliament in the Eleventh Year of the Republic of India as follows: ",
      Chapters:[
        {
          name:"",
          sections:[
            {
              name:"1. Short title, extent and commencement.", details:[]}
            ]
        },
      ]
    },
    {
      name:"All India Services Act, 1951",
      summary:
      "An Act to provide for the merger into the States of Assam, Punjab and West Bengal of certain territories acquired in pursuance of the agreements entered into between the Governments of India and Pakistan and for matters connected therewith.BE it enacted by Parliament in the Eleventh Year of the Republic of India as follows: ",
      Chapters:[
        {
          name:"",
          sections:[
            {
              name:"1. Short title, extent and commencement.", details:[]}
            ]
        },
      ]
    },
    {
      name:"Anand Marriage Act, 1909",
      summary:
      "An Act to provide for the merger into the States of Assam, Punjab and West Bengal of certain territories acquired in pursuance of the agreements entered into between the Governments of India and Pakistan and for matters connected therewith.BE it enacted by Parliament in the Eleventh Year of the Republic of India as follows: ",
      Chapters:[
        {
          name:"",
          sections:[
            {
              name:"1. Short title, extent and commencement.", details:[]}
            ]
        },
      ]
    },
    {
      name:"Ancient Monuments and Archaeological Sites and Remains Act, 1958",
      summary:
      "An Act to provide for the merger into the States of Assam, Punjab and West Bengal of certain territories acquired in pursuance of the agreements entered into between the Governments of India and Pakistan and for matters connected therewith.BE it enacted by Parliament in the Eleventh Year of the Republic of India as follows: ",
      Chapters:[
        {
          name:"",
          sections:[
            {
              name:"1. Short title, extent and commencement.", details:[]}
            ]
        },
      ]
    },
    {
      name:"Ancient Monuments Preservation Act, 1904",
      summary:
      "An Act to provide for the merger into the States of Assam, Punjab and West Bengal of certain territories acquired in pursuance of the agreements entered into between the Governments of India and Pakistan and for matters connected therewith.BE it enacted by Parliament in the Eleventh Year of the Republic of India as follows: ",
      Chapters:[
        {
          name:"",
          sections:[
            {
              name:"1. Short title, extent and commencement.", details:[]}
            ]
        },
      ]
    },
    {
      name:"Andhra Pradesh and Madras (Alteration of Boundaries) Act, 1959",
      summary:
      "An Act to provide for the merger into the States of Assam, Punjab and West Bengal of certain territories acquired in pursuance of the agreements entered into between the Governments of India and Pakistan and for matters connected therewith.BE it enacted by Parliament in the Eleventh Year of the Republic of India as follows: ",
      Chapters:[
        {
          name:"",
          sections:[
            {
              name:"1. Short title, extent and commencement.", details:[]}
            ]
        },
      ]
    },
    {
      name:"Andhra Pradesh and Mysore (Transfer of Territory) Act, 1968",
      summary:
      "An Act to provide for the merger into the States of Assam, Punjab and West Bengal of certain territories acquired in pursuance of the agreements entered into between the Governments of India and Pakistan and for matters connected therewith.BE it enacted by Parliament in the Eleventh Year of the Republic of India as follows: ",
      Chapters:[
        {
          name:"",
          sections:[
            {
              name:"1. Short title, extent and commencement.", details:[]}
            ]
        },
      ]
    },
    {
      name:"Andhra Pradesh Legislative Council Act, 2005",
      summary:
      "An Act to provide for the merger into the States of Assam, Punjab and West Bengal of certain territories acquired in pursuance of the agreements entered into between the Governments of India and Pakistan and for matters connected therewith.BE it enacted by Parliament in the Eleventh Year of the Republic of India as follows: ",
      Chapters:[
        {
          name:"",
          sections:[
            {
              name:"1. Short title, extent and commencement.", details:[]}
            ]
        },
      ]
    },
    {
      name:"Andhra Pradesh Reorganization Act, 2014",
      summary:
      "An Act to provide for the merger into the States of Assam, Punjab and West Bengal of certain territories acquired in pursuance of the agreements entered into between the Governments of India and Pakistan and for matters connected therewith.BE it enacted by Parliament in the Eleventh Year of the Republic of India as follows: ",
      Chapters:[
        {
          name:"",
          sections:[
            {
              name:"1. Short title, extent and commencement.", details:[]}
            ]
        },
      ]
    },
    {
      name:"Andhra Scientific Company Limited (Acquisition and Transfer of Undertakings) Act, 1982",
      summary:
      "An Act to provide for the merger into the States of Assam, Punjab and West Bengal of certain territories acquired in pursuance of the agreements entered into between the Governments of India and Pakistan and for matters connected therewith.BE it enacted by Parliament in the Eleventh Year of the Republic of India as follows: ",
      Chapters:[
        {
          name:"",
          sections:[
            {
              name:"1. Short title, extent and commencement.", details:[]}
            ]
        },
      ]
    },
    {
      name:"Andhra State Act, 1953",
      summary:
      "An Act to provide for the merger into the States of Assam, Punjab and West Bengal of certain territories acquired in pursuance of the agreements entered into between the Governments of India and Pakistan and for matters connected therewith.BE it enacted by Parliament in the Eleventh Year of the Republic of India as follows: ",
      Chapters:[
        {
          name:"",
          sections:[
            {
              name:"1. Short title, extent and commencement.", details:[]}
            ]
        },
      ]
    },
    {
      name:"Anti-Apartheid (United Nations Convention) Act, 1981",
      summary:
      "An Act to provide for the merger into the States of Assam, Punjab and West Bengal of certain territories acquired in pursuance of the agreements entered into between the Governments of India and Pakistan and for matters connected therewith.BE it enacted by Parliament in the Eleventh Year of the Republic of India as follows: ",
      Chapters:[
        {
          name:"",
          sections:[
            {
              name:"1. Short title, extent and commencement.", details:[]}
            ]
        },
      ]
    },
    {
      name:"Anti-Hijacking Act, 2016",
      summary:
      "An Act to provide for the merger into the States of Assam, Punjab and West Bengal of certain territories acquired in pursuance of the agreements entered into between the Governments of India and Pakistan and for matters connected therewith.BE it enacted by Parliament in the Eleventh Year of the Republic of India as follows: ",
      Chapters:[
        {
          name:"",
          sections:[
            {
              name:"1. Short title, extent and commencement.", details:[]}
            ]
        },
      ]
    },
    {
      name:"Antiquities and Art Treasures Act, 1972",
      summary:
      "An Act to provide for the merger into the States of Assam, Punjab and West Bengal of certain territories acquired in pursuance of the agreements entered into between the Governments of India and Pakistan and for matters connected therewith.BE it enacted by Parliament in the Eleventh Year of the Republic of India as follows: ",
      Chapters:[
        {
          name:"",
          sections:[
            {
              name:"1. Short title, extent and commencement.", details:[]}
            ]
        },
      ]
    },
    {
      name:"Apprentices (Amendment) Act, 2014",
      summary:
      "An Act to provide for the merger into the States of Assam, Punjab and West Bengal of certain territories acquired in pursuance of the agreements entered into between the Governments of India and Pakistan and for matters connected therewith.BE it enacted by Parliament in the Eleventh Year of the Republic of India as follows: ",
      Chapters:[
        {
          name:"",
          sections:[
            {
              name:"1. Short title, extent and commencement.", details:[]}
            ]
        },
      ]
    },
    {
      name:"Apprentices Act, 1961",
      summary:
      "An Act to provide for the merger into the States of Assam, Punjab and West Bengal of certain territories acquired in pursuance of the agreements entered into between the Governments of India and Pakistan and for matters connected therewith.BE it enacted by Parliament in the Eleventh Year of the Republic of India as follows: ",
      Chapters:[
        {
          name:"",
          sections:[
            {
              name:"1. Short title, extent and commencement.", details:[]}
            ]
        },
      ]
    },
    {
      name:"Arbitration Act, 1940",
      summary:
      "An Act to provide for the merger into the States of Assam, Punjab and West Bengal of certain territories acquired in pursuance of the agreements entered into between the Governments of India and Pakistan and for matters connected therewith.BE it enacted by Parliament in the Eleventh Year of the Republic of India as follows: ",
      Chapters:[
        {
          name:"",
          sections:[
            {
              name:"1. Short title, extent and commencement.", details:[]}
            ]
        },
      ]
    },
    {
      name:"Arbitration and Conciliation Act, 1996",
      summary:
      "An Act to provide for the merger into the States of Assam, Punjab and West Bengal of certain territories acquired in pursuance of the agreements entered into between the Governments of India and Pakistan and for matters connected therewith.BE it enacted by Parliament in the Eleventh Year of the Republic of India as follows: ",
      Chapters:[
        {
          name:"",
          sections:[
            {
              name:"1. Short title, extent and commencement.", details:[]}
            ]
        },
      ]
    },
    {
      name:"Architects Act, 1972",
      summary:
      "An Act to provide for the merger into the States of Assam, Punjab and West Bengal of certain territories acquired in pursuance of the agreements entered into between the Governments of India and Pakistan and for matters connected therewith.BE it enacted by Parliament in the Eleventh Year of the Republic of India as follows: ",
      Chapters:[
        {
          name:"",
          sections:[
            {
              name:"1. Short title, extent and commencement.", details:[]}
            ]
        },
      ]
    },
    {
      name:"Armed Forces (Emergency Duties) Act, 1947",
      summary:
      "An Act to provide for the merger into the States of Assam, Punjab and West Bengal of certain territories acquired in pursuance of the agreements entered into between the Governments of India and Pakistan and for matters connected therewith.BE it enacted by Parliament in the Eleventh Year of the Republic of India as follows: ",
      Chapters:[
        {
          name:"",
          sections:[
            {
              name:"1. Short title, extent and commencement.", details:[]}
            ]
        },
      ]
    },
    {
      name:"Armed Forces (Jammu and Kashmir) Special Powers Act, 1990",
      summary:
      "An Act to provide for the merger into the States of Assam, Punjab and West Bengal of certain territories acquired in pursuance of the agreements entered into between the Governments of India and Pakistan and for matters connected therewith.BE it enacted by Parliament in the Eleventh Year of the Republic of India as follows: ",
      Chapters:[
        {
          name:"",
          sections:[
            {
              name:"1. Short title, extent and commencement.", details:[]}
            ]
        },
      ]
    },
    {
      name:"Armed Forces (Punjab and Chandigarh) Special Powers Act, 1983",
      summary:
      "An Act to provide for the merger into the States of Assam, Punjab and West Bengal of certain territories acquired in pursuance of the agreements entered into between the Governments of India and Pakistan and for matters connected therewith.BE it enacted by Parliament in the Eleventh Year of the Republic of India as follows: ",
      Chapters:[
        {
          name:"",
          sections:[
            {
              name:"1. Short title, extent and commencement.", details:[]}
            ]
        },
      ]
    },
    {
      name:"Armed Forces (Special Powers) Act, 1958",
      summary:
      "An Act to provide for the merger into the States of Assam, Punjab and West Bengal of certain territories acquired in pursuance of the agreements entered into between the Governments of India and Pakistan and for matters connected therewith.BE it enacted by Parliament in the Eleventh Year of the Republic of India as follows: ",
      Chapters:[
        {
          name:"",
          sections:[
            {
              name:"1. Short title, extent and commencement.", details:[]}
            ]
        },
      ]
    },
    {
      name:"Armed Forces Tribunal Act, 2007",
      summary:
      "An Act to provide for the merger into the States of Assam, Punjab and West Bengal of certain territories acquired in pursuance of the agreements entered into between the Governments of India and Pakistan and for matters connected therewith.BE it enacted by Parliament in the Eleventh Year of the Republic of India as follows: ",
      Chapters:[
        {
          name:"",
          sections:[
            {
              name:"1. Short title, extent and commencement.", details:[]}
            ]
        },
      ]
    },
    {
      name:"Arms Act, 1959",
      summary:
      "An Act to provide for the merger into the States of Assam, Punjab and West Bengal of certain territories acquired in pursuance of the agreements entered into between the Governments of India and Pakistan and for matters connected therewith.BE it enacted by Parliament in the Eleventh Year of the Republic of India as follows: ",
      Chapters:[
        {
          name:"",
          sections:[
            {
              name:"1. Short title, extent and commencement.", details:[]}
            ]
        },
      ]
    },
    {
      name:"Army Act, 1950",
      summary:
      "An Act to provide for the merger into the States of Assam, Punjab and West Bengal of certain territories acquired in pursuance of the agreements entered into between the Governments of India and Pakistan and for matters connected therewith.BE it enacted by Parliament in the Eleventh Year of the Republic of India as follows: ",
      Chapters:[
        {
          name:"",
          sections:[
            {
              name:"1. Short title, extent and commencement.", details:[]}
            ]
        },
      ]
    },
    {
      name:"Army and Air Force (Disposal of Private Property) Act, 1950",
      summary:
      "An Act to provide for the merger into the States of Assam, Punjab and West Bengal of certain territories acquired in pursuance of the agreements entered into between the Governments of India and Pakistan and for matters connected therewith.BE it enacted by Parliament in the Eleventh Year of the Republic of India as follows: ",
      Chapters:[
        {
          name:"",
          sections:[
            {
              name:"1. Short title, extent and commencement.", details:[]}
            ]
        },
      ]
    },
    {
      name:"Arya Marriage Validation Act, 1937",
      summary:
      "An Act to provide for the merger into the States of Assam, Punjab and West Bengal of certain territories acquired in pursuance of the agreements entered into between the Governments of India and Pakistan and for matters connected therewith.BE it enacted by Parliament in the Eleventh Year of the Republic of India as follows: ",
      Chapters:[
        {
          name:"",
          sections:[
            {
              name:"1. Short title, extent and commencement.", details:[]}
            ]
        },
      ]
    },
    {
      name:"Asian Development Bank Act, 1966",
      summary:
      "An Act to provide for the merger into the States of Assam, Punjab and West Bengal of certain territories acquired in pursuance of the agreements entered into between the Governments of India and Pakistan and for matters connected therewith.BE it enacted by Parliament in the Eleventh Year of the Republic of India as follows: ",
      Chapters:[
        {
          name:"",
          sections:[
            {
              name:"1. Short title, extent and commencement.", details:[]}
            ]
        },
      ]
    },
    {
      name:"Asiatic Society Act, 1984",
      summary:
      "An Act to provide for the merger into the States of Assam, Punjab and West Bengal of certain territories acquired in pursuance of the agreements entered into between the Governments of India and Pakistan and for matters connected therewith.BE it enacted by Parliament in the Eleventh Year of the Republic of India as follows: ",
      Chapters:[
        {
          name:"",
          sections:[
            {
              name:"1. Short title, extent and commencement.", details:[]}
            ]
        },
      ]
    },
    {
      name:"Assam (Alteration of Boundaries) Act, 1951",
      summary:
      "An Act to provide for the merger into the States of Assam, Punjab and West Bengal of certain territories acquired in pursuance of the agreements entered into between the Governments of India and Pakistan and for matters connected therewith.BE it enacted by Parliament in the Eleventh Year of the Republic of India as follows: ",
      Chapters:[
        {
          name:"",
          sections:[
            {
              name:"1. Short title, extent and commencement.", details:[]}
            ]
        },
      ]
    },
    {
      name:"Assam Reorganisation (Meghalaya) Act, 1969",
      summary:
      "An Act to provide for the merger into the States of Assam, Punjab and West Bengal of certain territories acquired in pursuance of the agreements entered into between the Governments of India and Pakistan and for matters connected therewith.BE it enacted by Parliament in the Eleventh Year of the Republic of India as follows: ",
      Chapters:[
        {
          name:"",
          sections:[
            {
              name:"1. Short title, extent and commencement.", details:[]}
            ]
        },
      ]
    },
    {
      name:"Assam Rifles Act, 2006",
      summary:
      "An Act to provide for the merger into the States of Assam, Punjab and West Bengal of certain territories acquired in pursuance of the agreements entered into between the Governments of India and Pakistan and for matters connected therewith.BE it enacted by Parliament in the Eleventh Year of the Republic of India as follows: ",
      Chapters:[
        {
          name:"",
          sections:[
            {
              name:"1. Short title, extent and commencement.", details:[]}
            ]
        },
      ]
    },{
      name:"Assam University Act, 1989",
      summary:
      "An Act to provide for the merger into the States of Assam, Punjab and West Bengal of certain territories acquired in pursuance of the agreements entered into between the Governments of India and Pakistan and for matters connected therewith.BE it enacted by Parliament in the Eleventh Year of the Republic of India as follows: ",
      Chapters:[
        {
          name:"",
          sections:[
            {
              name:"1. Short title, extent and commencement.", details:[]}
            ]
        },
      ]
    },
    {
      name:"Assisted Reproductive Technology (Regulation) Act, 2021",
      summary:
      "An Act to provide for the merger into the States of Assam, Punjab and West Bengal of certain territories acquired in pursuance of the agreements entered into between the Governments of India and Pakistan and for matters connected therewith.BE it enacted by Parliament in the Eleventh Year of the Republic of India as follows: ",
      Chapters:[
        {
          name:"",
          sections:[
            {
              name:"1. Short title, extent and commencement.", details:[]}
            ]
        },
      ]
    },
    {
      name:"Atomic Energy Act, 1962",
      summary:
      "An Act to provide for the merger into the States of Assam, Punjab and West Bengal of certain territories acquired in pursuance of the agreements entered into between the Governments of India and Pakistan and for matters connected therewith.BE it enacted by Parliament in the Eleventh Year of the Republic of India as follows: ",
      Chapters:[
        {
          name:"",
          sections:[
            {
              name:"1. Short title, extent and commencement.", details:[]}
            ]
        },
      ]
    },
    {
      name:"Auroville Foundation Act, 1988",
      summary:
      "An Act to provide for the merger into the States of Assam, Punjab and West Bengal of certain territories acquired in pursuance of the agreements entered into between the Governments of India and Pakistan and for matters connected therewith.BE it enacted by Parliament in the Eleventh Year of the Republic of India as follows: ",
      Chapters:[
        {
          name:"",
          sections:[
            {
              name:"1. Short title, extent and commencement.", details:[]}
            ]
        },
      ]
    },
    {
      name:"Authoritative Texts (Central Laws) Act, 1973",
      summary:
      "An Act to provide for the merger into the States of Assam, Punjab and West Bengal of certain territories acquired in pursuance of the agreements entered into between the Governments of India and Pakistan and for matters connected therewith.BE it enacted by Parliament in the Eleventh Year of the Republic of India as follows: ",
      Chapters:[
        {
          name:"",
          sections:[
            {
              name:"1. Short title, extent and commencement.", details:[]}
            ]
        },
      ]
    },
  ];

  //-------------------Dark and Light Mode ----------

  let [mode, setmode] = useState(true);
  let [bgcol, setbgcol] = useState("white");
  let [txtcol, settxtcol] = useState("#262626");
  let [typ, settype] = useState("none");

  const changeBG = () => {
    if (mode == true) {
      setbgcol("#262626");
      settxtcol("white");
      setmode(false);
    } else {
      setbgcol("white");
      settxtcol("#262626");
      setmode(true);
    }
  };

  //-----------Method for redirecting to sections---------

  const ToSubLaw = (val) => {
    localStorage.setItem("mode", `${mode}`);
    navigate("/Lawyer/LawSection", {
      state: [val.summary, val.Chapters, val.name],
    });
  };

  //---------------------Dom Elements--------------------

  let mainCon = (
    <div style={{ background: bgcol }}>
      <NavbarLaw mode={mode} />{" "}
      <div className="sub-title">
        <p className="path-container">
          <span className="path" onClick={() => MoreInfoComponent("")}>
            Home
          </span>{" "}
          /{/* / <span className="path">Laws</span> */}
        </p>
        <h1>Laws</h1>
      </div>
      <section className="search-container" style={{ background: bgcol }}>
        <div className="search-outer" style={{ borderColor: col }}>
          <input
            onKeyUp={FilterLaws}
            placeholder="search Law"
            className="search"
            id="search"
            onFocus={change}
            onBlur={notchange}
            style={{ background: bgcol, color: txtcol }}
          />
          <BsSearch id="iconSearch" style={{ color: col }} />
        </div>
        <div>
          <label className="switch">
            <input type="checkbox" onClick={changeBG} />
            <span className="slider"></span>
          </label>
        </div>
      </section>
      <section
        className="Law-columns"
        style={{ background: bgcol, minHeight: "500px" }}
      >
        <ul>
          {lawsList.map((ele) => {
            return (
              <>
                <div
                  key={ele}
                  className="Law-col-item"
                  style={{ color: txtcol }}
                >
                  {/* <BsArrowRight className="arrowR" /> */}
                  <h3 key={ele} onClick={() => ToSubLaw(ele)}>
                    <li key={ele}>{ele.name}</li>
                  </h3>
                </div>
              </>
            );
          })}
        </ul>
        <div style={{ display: typ }} className="not-found">
          <h4>Oops!</h4>
          <h6 style={{ color: txtcol }}>
            We can't seem to find the <b>Law</b> <br />
            you're looking for
          </h6>
        </div>
      </section>
      <Footer />
    </div>
  );

  //--------------------Filtering the Laws from search -------------------

  function FilterLaws() {
    let input = document.getElementById("search");
    let filter = input.value.toUpperCase();
    let container = document.getElementsByClassName("Law-columns")[0];
    let eachLaw = container.getElementsByClassName("Law-col-item");
    //---------------iterating through each search element
    let count = 0;
    for (var i = 0; i < eachLaw.length; i++) {
      let a = eachLaw[i].getElementsByTagName("h3")[0];
      let txtValue = a.textContent || a.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        eachLaw[i].style.display = "block";
      } else {
        eachLaw[i].style.display = "none";
      }
      if (eachLaw[i].style.display === "block") {
        count++;
      }
    }
    if (count == 0) {
      setcol("red");
      settype("block");
    } else {
      setcol("#4296f4");
      settype("none");
    }
  }

  return mainCon;
}
