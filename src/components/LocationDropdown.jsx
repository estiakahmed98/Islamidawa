import React, { useState } from "react";

// Sample data for Divisions, Districts, and Thanas
const data = {
  divisions: [
    {
      name: "Barishal",
      districts: [
        {
          name: "Barguna",
          thanas: [
            "Amtali",
            "Bamna",
            "Barguna Sadar",
            "Betagi",
            "Patharghata",
            "Taltali",
          ],
        },
        {
          name: "Barishal",
          thanas: [
            "Agailjhara",
            "Babuganj",
            "Bakerganj",
            "Banaripara",
            "Barishal Sadar",
            "Gaurnadi",
            "Hizla",
            "Mehendiganj",
            "Muladi",
            "Wazirpur",
          ],
        },
        {
          name: "Bhola",
          thanas: [
            "Bhola Sadar",
            "Burhanuddin",
            "Char Fasson",
            "Daulatkhan",
            "Lalmohan",
            "Manpura",
            "Tazumuddin",
          ],
        },
        {
          name: "Jhalokati",
          thanas: ["Jhalokati Sadar", "Kathalia", "Nalchity", "Rajapur"],
        },
        {
          name: "Patuakhali",
          thanas: [
            "Baufal",
            "Dashmina",
            "Galachipa",
            "Kalapara",
            "Mirzaganj",
            "Patuakhali Sadar",
            "Dumki",
            "Rangabali",
          ],
        },
        {
          name: "Pirojpur",
          thanas: [
            "Bhandaria",
            "Kaukhali",
            "Mathbaria",
            "Nazirpur",
            "Nesarabad (Swarupkathi)",
            "Pirojpur Sadar",
            "Indurkani (Zianagar)",
          ],
        },
      ],
    },
    {
      name: "Chattogram",
      districts: [
        {
          name: "Bandarban",
          thanas: [
            "Bandarban Sadar",
            "Thanchi",
            "Ruma",
            "Rowangchhari",
            "Lama",
            "Alikadam",
            "Naikhongchhari",
          ],
        },
        {
          name: "Brahmanbaria",
          thanas: [
            "Brahmanbaria Sadar",
            "Ashuganj",
            "Nasirnagar",
            "Nabinagar",
            "Sarail",
            "Kasba",
            "Akhaura",
            "Bancharampur",
            "Bijoynagar",
          ],
        },
        {
          name: "Chandpur",
          thanas: [
            "Chandpur Sadar",
            "Faridganj",
            "Matlab Dakshin",
            "Matlab Uttar",
            "Haimchar",
            "Kachua",
            "Shahrasti",
          ],
        },
        {
          name: "Chattogram",
          thanas: [
            "Anwara",
            "Banshkhali",
            "Boalkhali",
            "Chandanaish",
            "Fatikchhari",
            "Hathazari",
            "Lohagara",
            "Mirsharai",
            "Patiya",
            "Rangunia",
            "Raozan",
            "Sandwip",
            "Satkania",
            "Sitakunda",
          ],
        },
        {
          name: "Cox's Bazar",
          thanas: [
            "Chakaria",
            "Cox's Bazar Sadar",
            "Kutubdia",
            "Maheshkhali",
            "Ramu",
            "Teknaf",
            "Ukhia",
            "Pekua",
          ],
        },
        {
          name: "Cumilla",
          thanas: [
            "Barura",
            "Brahmanpara",
            "Burichang",
            "Chandina",
            "Chauddagram",
            "Daudkandi",
            "Debidwar",
            "Homna",
            "Laksam",
            "Lalmai",
            "Muradnagar",
            "Meghna",
            "Monohorgonj",
            "Nangalkot",
            "Titas",
            "Cumilla Adarsha Sadar",
            "Cumilla Sadar Dakshin",
          ],
        },
        {
          name: "Feni",
          thanas: [
            "Chhagalnaiya",
            "Daganbhuiyan",
            "Feni Sadar",
            "Parshuram",
            "Sonagazi",
            "Fulgazi",
          ],
        },
        {
          name: "Khagrachari",
          thanas: [
            "Dighinala",
            "Khagrachari Sadar",
            "Lakshmichhari",
            "Mahalchhari",
            "Manikchhari",
            "Matiranga",
            "Panchhari",
            "Ramgarh",
          ],
        },
        {
          name: "Lakshmipur",
          thanas: [
            "Lakshmipur Sadar",
            "Raipur",
            "Ramganj",
            "Ramgati",
            "Komolnagar",
          ],
        },
        {
          name: "Noakhali",
          thanas: [
            "Begumganj",
            "Chatkhil",
            "Companiganj",
            "Hatiya",
            "Senbagh",
            "Sonaimuri",
            "Subarnachar",
            "Noakhali Sadar",
          ],
        },
        {
          name: "Rangamati",
          thanas: [
            "Baghaichhari",
            "Barkal",
            "Kaptai",
            "Juraichhari",
            "Rajasthali",
            "Belaichhari",
            "Langadu",
            "Naniarchar",
            "Rangamati Sadar",
          ],
        },
      ],
    },
    {
      name: "Dhaka",
      districts: [
        {
          name: "Dhaka",
          thanas: [
            "Dhamrai",
            "Dohar",
            "Keraniganj",
            "Nawabganj",
            "Savar",
            "Dhanmondi",
            "Gulshan",
            "Uttara",
            "Mirpur",
            "Mohammadpur",
            "Tejgaon",
          ],
        },
        {
          name: "Faridpur",
          thanas: [
            "Alfadanga",
            "Bhanga",
            "Boalmari",
            "Charbhadrasan",
            "Faridpur Sadar",
            "Madhukhali",
            "Nagarkanda",
            "Sadarpur",
            "Saltha",
          ],
        },
        {
          name: "Gazipur",
          thanas: [
            "Gazipur Sadar",
            "Kaliakair",
            "Kaliganj",
            "Kapasia",
            "Sreepur",
          ],
        },
        {
          name: "Gopalganj",
          thanas: [
            "Gopalganj Sadar",
            "Kashiani",
            "Kotalipara",
            "Muksudpur",
            "Tungipara",
          ],
        },
        {
          name: "Kishoreganj",
          thanas: [
            "Austagram",
            "Bajitpur",
            "Bhairab",
            "Hossainpur",
            "Itna",
            "Karimganj",
            "Katiadi",
            "Kishoreganj Sadar",
            "Kuliarchar",
            "Mithamoin",
            "Nikli",
            "Pakundia",
            "Tarail",
          ],
        },
        {
          name: "Madaripur",
          thanas: ["Kalkini", "Madaripur Sadar", "Rajoir", "Shibchar"],
        },
        {
          name: "Manikganj",
          thanas: [
            "Daulatpur",
            "Ghior",
            "Harirampur",
            "Manikganj Sadar",
            "Saturia",
            "Shivalaya",
            "Singair",
          ],
        },
        {
          name: "Munshiganj",
          thanas: [
            "Gazaria",
            "Lohajang",
            "Munshiganj Sadar",
            "Sirajdikhan",
            "Tongibari",
            "Sreenagar",
          ],
        },
        {
          name: "Narayanganj",
          thanas: [
            "Araihazar",
            "Bandar",
            "Narayanganj Sadar",
            "Rupganj",
            "Sonargaon",
          ],
        },
        {
          name: "Narsingdi",
          thanas: [
            "Belabo",
            "Monohardi",
            "Narsingdi Sadar",
            "Palash",
            "Raipura",
            "Shibpur",
          ],
        },
        {
          name: "Rajbari",
          thanas: [
            "Baliakandi",
            "Goalanda",
            "Pangsha",
            "Kalukhali",
            "Rajbari Sadar",
          ],
        },
        {
          name: "Shariatpur",
          thanas: [
            "Bhedarganj",
            "Damudya",
            "Gosairhat",
            "Naria",
            "Shariatpur Sadar",
            "Zajira",
            "Vedarganj",
          ],
        },
        {
          name: "Tangail",
          thanas: [
            "Bhuapur",
            "Delduar",
            "Dhanbari",
            "Ghatail",
            "Gopalpur",
            "Kalihati",
            "Mirzapur",
            "Nagarpur",
            "Sakhipur",
            "Tangail Sadar",
            "Basail",
            "Madhupur",
          ],
        },
      ],
    },
    {
      name: "Khulna",
      districts: [
        {
          name: "Bagerhat",
          thanas: [
            "Bagerhat Sadar",
            "Chitalmari",
            "Fakirhat",
            "Kachua",
            "Mollahat",
            "Mongla",
            "Morrelganj",
            "Rampal",
            "Sarankhola",
          ],
        },
        {
          name: "Chuadanga",
          thanas: ["Alamdanga", "Chuadanga Sadar", "Damurhuda", "Jibannagar"],
        },
        {
          name: "Jashore",
          thanas: [
            "Abhaynagar",
            "Bagherpara",
            "Chaugachha",
            "Jhikargachha",
            "Keshabpur",
            "Jashore Sadar",
            "Manirampur",
            "Sharsha",
          ],
        },
        {
          name: "Jhenaidah",
          thanas: [
            "Harinakunda",
            "Jhenaidah Sadar",
            "Kaliganj",
            "Kotchandpur",
            "Maheshpur",
            "Shailkupa",
          ],
        },
        {
          name: "Khulna",
          thanas: [
            "Batiaghata",
            "Dacope",
            "Dighalia",
            "Dumuria",
            "Koyra",
            "Paikgachha",
            "Phultala",
            "Rupsha",
            "Terokhada",
            "Khulna Sadar",
          ],
        },
        {
          name: "Kushtia",
          thanas: [
            "Bheramara",
            "Daulatpur",
            "Khoksa",
            "Kumarkhali",
            "Kushtia Sadar",
            "Mirpur",
          ],
        },
        {
          name: "Magura",
          thanas: ["Magura Sadar", "Mohammadpur", "Shalikha", "Sreepur"],
        },
        {
          name: "Meherpur",
          thanas: ["Gangni", "Meherpur Sadar", "Mujibnagar"],
        },
        {
          name: "Narail",
          thanas: ["Kalia", "Lohagara", "Narail Sadar"],
        },
        {
          name: "Satkhira",
          thanas: [
            "Assasuni",
            "Debhata",
            "Kalaroa",
            "Kaliganj",
            "Satkhira Sadar",
            "Shyamnagar",
            "Tala",
          ],
        },
      ],
    },
    {
      name: "Rajshahi",
      districts: [
        {
          name: "Bogura",
          thanas: [
            "Adamdighi",
            "Bogura Sadar",
            "Dhunat",
            "Dupchanchia",
            "Gabtali",
            "Kahaloo",
            "Nandigram",
            "Sariakandi",
            "Shajahanpur",
            "Sherpur",
            "Shibganj",
            "Sonatala",
          ],
        },
        {
          name: "Chapainawabganj",
          thanas: [
            "Bholahat",
            "Gomastapur",
            "Nachole",
            "Nawabganj Sadar",
            "Shibganj",
          ],
        },
        {
          name: "Joypurhat",
          thanas: [
            "Akkelpur",
            "Joypurhat Sadar",
            "Kalai",
            "Khetlal",
            "Panchbibi",
          ],
        },
        {
          name: "Naogaon",
          thanas: [
            "Atrai",
            "Badalgachhi",
            "Dhamoirhat",
            "Manda",
            "Mohadevpur",
            "Naogaon Sadar",
            "Niamatpur",
            "Patnitala",
            "Porsha",
            "Raninagar",
            "Sapahar",
          ],
        },
        {
          name: "Natore",
          thanas: [
            "Bagatipara",
            "Baraigram",
            "Gurudaspur",
            "Lalpur",
            "Naldanga",
            "Natore Sadar",
            "Singra",
          ],
        },
        {
          name: "Pabna",
          thanas: [
            "Atgharia",
            "Bera",
            "Bhangura",
            "Chatmohar",
            "Faridpur",
            "Ishwardi",
            "Pabna Sadar",
            "Santhia",
            "Sujanagar",
          ],
        },
        {
          name: "Rajshahi",
          thanas: [
            "Bagha",
            "Bagmara",
            "Charghat",
            "Durgapur",
            "Godagari",
            "Mohonpur",
            "Paba",
            "Puthia",
            "Rajshahi Sadar",
            "Tanore",
          ],
        },
        {
          name: "Sirajganj",
          thanas: [
            "Belkuchi",
            "Chauhali",
            "Kamarkhand",
            "Kazipur",
            "Raiganj",
            "Shahjadpur",
            "Sirajganj Sadar",
            "Tarash",
            "Ullapara",
          ],
        },
      ],
    },
    {
      name: "Sylhet",
      districts: [
        {
          name: "Habiganj",
          thanas: [
            "Bahubal",
            "Ajmiriganj",
            "Baniachong",
            "Chunarughat",
            "Habiganj Sadar",
            "Lakhai",
            "Madhabpur",
            "Nabiganj",
            "Shaistaganj",
          ],
        },
        {
          name: "Moulvibazar",
          thanas: [
            "Barlekha",
            "Juri",
            "Kamalganj",
            "Kulaura",
            "Moulvibazar Sadar",
            "Rajnagar",
            "Sreemangal",
          ],
        },
        {
          name: "Sunamganj",
          thanas: [
            "Bishwamvarpur",
            "Chhatak",
            "Dakshin Sunamganj",
            "Derai",
            "Dharampasha",
            "Dowarabazar",
            "Jagannathpur",
            "Jamalganj",
            "Sullah",
            "Sunamganj Sadar",
            "Tahirpur",
          ],
        },
        {
          name: "Sylhet",
          thanas: [
            "Balaganj",
            "Beanibazar",
            "Bishwanath",
            "Companiganj",
            "Fenchuganj",
            "Golapganj",
            "Gowainghat",
            "Jaintiapur",
            "Kanaighat",
            "Sylhet Sadar",
            "Zakiganj",
          ],
        },
      ],
    },
    {
      name: "Rangpur",
      districts: [
        {
          name: "Dinajpur",
          thanas: [
            "Birampur",
            "Birganj",
            "Birol",
            "Bochaganj",
            "Chirirbandar",
            "Dinajpur Sadar",
            "Ghoraghat",
            "Hakimpur",
            "Kaharole",
            "Khansama",
            "Nawabganj",
            "Parbatipur",
          ],
        },
        {
          name: "Gaibandha",
          thanas: [
            "Fulchhari",
            "Gaibandha Sadar",
            "Gobindaganj",
            "Palashbari",
            "Sadullapur",
            "Saghata",
            "Sundarganj",
          ],
        },
        {
          name: "Kurigram",
          thanas: [
            "Bhurungamari",
            "Char Rajibpur",
            "Chilmari",
            "Kurigram Sadar",
            "Nageshwari",
            "Phulbari",
            "Rajarhat",
            "Raomari",
            "Ulipur",
          ],
        },
        {
          name: "Lalmonirhat",
          thanas: [
            "Aditmari",
            "Hatibandha",
            "Kaliganj",
            "Lalmonirhat Sadar",
            "Patgram",
          ],
        },
        {
          name: "Nilphamari",
          thanas: [
            "Dimla",
            "Domar",
            "Jaldhaka",
            "Kishoreganj",
            "Nilphamari Sadar",
            "Saidpur",
          ],
        },
        {
          name: "Panchagarh",
          thanas: ["Atwari", "Boda", "Debiganj", "Panchagarh Sadar", "Tetulia"],
        },
        {
          name: "Rangpur",
          thanas: [
            "Badarganj",
            "Gangachara",
            "Kaunia",
            "Mithapukur",
            "Pirgacha",
            "Pirganj",
            "Rangpur Sadar",
            "Taraganj",
          ],
        },
        {
          name: "Thakurgaon",
          thanas: [
            "Baliadangi",
            "Haripur",
            "Pirganj",
            "Ranisankail",
            "Thakurgaon Sadar",
          ],
        },
      ],
    },
    {
      name: "Mymensingh",
      districts: [
        {
          name: "Jamalpur",
          thanas: [
            "Baksiganj",
            "Dewanganj",
            "Islampur",
            "Jamalpur Sadar",
            "Madarganj",
            "Melandaha",
            "Sarishabari",
          ],
        },
        {
          name: "Mymensingh",
          thanas: [
            "Bhaluka",
            "Dhobaura",
            "Fulbaria",
            "Gafargaon",
            "Gauripur",
            "Haluaghat",
            "Ishwarganj",
            "Mymensingh Sadar",
            "Muktagachha",
            "Nandail",
            "Phulpur",
            "Trishal",
          ],
        },
        {
          name: "Netrokona",
          thanas: [
            "Atpara",
            "Barhatta",
            "Durgapur",
            "Kalmakanda",
            "Kendua",
            "Madan",
            "Mohanganj",
            "Netrokona Sadar",
            "Purbadhala",
          ],
        },
        {
          name: "Sherpur",
          thanas: [
            "Jhenaigati",
            "Nakla",
            "Nalitabari",
            "Sherpur Sadar",
            "Sreebardi",
          ],
        },
      ],
    },
  ],
};

export default function LocationDropdown() {
  const [selectedDivision, setSelectedDivision] = useState("");
  const [selectedDistrict, setSelectedDistrict] = useState("");
  const [districts, setDistricts] = useState([]);
  const [thanas, setThanas] = useState([]);

  const handleDivisionChange = (e) => {
    const divisionName = e.target.value;
    setSelectedDivision(divisionName);
    const division = data.divisions.find((d) => d.name === divisionName);
    setDistricts(division ? division.districts : []);
    setSelectedDistrict("");
    setThanas([]);
  };

  const handleDistrictChange = (e) => {
    const districtName = e.target.value;
    setSelectedDistrict(districtName);
    const district = districts.find((d) => d.name === districtName);
    setThanas(district ? district.thanas : []);
  };

  return (
    <div className="space-y-4">
      {/* Division Dropdown */}
      <div>
        <label
          htmlFor="division"
          className="block text-sm font-medium text-gray-700"
        >
          Division
        </label>
        <select
          id="division"
          name="division"
          value={selectedDivision}
          onChange={handleDivisionChange}
          required
          className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        >
          <option value="" disabled>
            Select Division
          </option>
          {data.divisions.map((division) => (
            <option key={division.name} value={division.name}>
              {division.name}
            </option>
          ))}
        </select>
      </div>

      {/* District Dropdown */}
      <div>
        <label
          htmlFor="district"
          className="block text-sm font-medium text-gray-700"
        >
          District
        </label>
        <select
          id="district"
          name="district"
          value={selectedDistrict}
          onChange={handleDistrictChange}
          required
          disabled={!districts.length}
          className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        >
          <option value="" disabled>
            Select District
          </option>
          {districts.map((district) => (
            <option key={district.name} value={district.name}>
              {district.name}
            </option>
          ))}
        </select>
      </div>

      {/* Thana Dropdown */}
      <div>
        <label
          htmlFor="thana"
          className="block text-sm font-medium text-gray-700"
        >
          Thana
        </label>
        <select
          id="thana"
          name="thana"
          required
          disabled={!thanas.length}
          className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        >
          <option value="" disabled>
            Select Thana
          </option>
          {thanas.map((thana) => (
            <option key={thana} value={thana}>
              {thana}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}
