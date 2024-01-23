const Certificate = () => {
    return ( 
        <div className="bg-white m-10 mt-10 ml-20 border w-5/6 p-5">
           <h1 className="font-semibold text-2xl flex place-content-center">Hiwot Insurance</h1> 
           <p className="font-semibold text-xl flex place-content-center">Certificate of Insurance</p>

           <div className="grid grid-cols-2 mt-5">
             <div>
                <h1>CERTIFICATE HOLDER:</h1>
                <ul>
                    <li>Member Name: <span>John Doe</span></li>
                    <li>Member Address: <span>Addis Ababa,Ethiopia</span></li>
                    <li>Member Number: <span>876</span></li>
                   <li>Member Type: <span>Standard Level</span></li>

                </ul>
                </div>
                <div>
                <ul>
                    <li>Policy Number: PPK1723456</li>
                    <li>Certificate Number: 1239</li>
                    <li>Insurance Co: Hiwot Insurance</li>
                    <li>Insurance Issue Date: Jul 11,2023</li>
                    <li>Insurance Expiration Date: Aug 9,2023</li>

                </ul>
             </div>

           </div>

           <p>This policy is in effect until Aug 9,2023 and your premium is based on the month you enroll. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nemo fugiat eos nesciunt vitae libero necessitatibus assumenda, adipisci recusandae ad nihil eveniet, perspiciatis animi. Architecto, corporis fuga molestiae hic consequuntur ab  </p>

           <div className="grid grid-cols-2">
            <div>
                <ul>
                    <li>General aggregate all coverages <span>$300</span></li>
                    <li>Personal and Advertising injury <span>$1000</span></li>
                    <li>Lorem ipsum <span>$3000</span></li>
                    <li>General aggregate all coverages <span>$200</span></li>
                 
                </ul>
            </div>

            <div>
                <h1>MASTER POLICY EFFECTIVE DATE: 4/1/2023</h1>
                <p>Insured Mailing Address</p>
                <p>Addis Ababa, Ethiopia. </p>
            </div>
             
             <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem soluta, architecto qui nisi beatae cupiditate dignissimos exercitationem aliquid labore non ad laborum. Eligendi officia esse voluptatum ducimus tempora iure cumque!</p>

             <p>Coverages: Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit qui itaque eligendi, voluptate quo sit tempora magnam unde tempore voluptatibus, magni doloribus non minus. Omnis architecto inventore quae dolore consectetur.</p>
            <p>Cancellation: Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex at aut adipisci quia aliquid repellendus doloremque quo ad odio sint voluptatibus, similique nostrum ratione reiciendis natus quam maxime obcaecati quod.</p>
           
           </div>

           <p>Signature: <span>Authorized Representative</span></p>
          <p>To verify information on this certeficate contact at +251-999-0909</p>
        </div>
     );
}
 
export default Certificate;