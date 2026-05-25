const mongoose = require('mongoose');
const Property = require('./property.model');

// MongoDB Connection URI (Configured for local MongoDB instance)
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/unistay_aurangabad';

const properties = [
    // --- 5 BOYS HOSTELS ---
    {
        id: 1,
        propertyName: "Chhatrapati Boys Executive Hostel",
        propertyType: "Hostel",
        hostelType: "Boys",
        location: "Osmanpura",
        nearbyCollege: "Government College of Engineering, Aurangabad (GECA)",
        monthlyRent: 4500,
        securityDeposit: 5000,
        acType: "Non-AC",
        bedType: "Double",
        foodIncluded: true,
        attachedBathroom: false,
        distanceFromCampus: 0.5,
        rating: 4.2,
        amenities: ["WiFi", "Mess", "CCTV", "Parking", "Power Backup"],
        availableBeds: 12,
        images: [
            "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?w=800",
            "https://images.unsplash.com/photo-1598928506311-c55dd1b31412?w=800"
        ],
        description: "An excellent hostel for engineering students in Osmanpura. High speed internet connection and nutritional pure vegetarian food are included in the package. Located just 5 minutes walk from GECA campus.",
        contactNumber: "+91 98765 43210",
        ownerName: "Sudhir Deshmukh",
        verified: true
    },
    {
        id: 2,
        propertyName: "Samarth Luxury Boys Residency",
        propertyType: "Hostel",
        hostelType: "Boys",
        location: "CIDCO",
        nearbyCollege: "MGM Jawaharlal Nehru Engineering College (JNEC)",
        monthlyRent: 8000,
        securityDeposit: 15000,
        acType: "AC",
        bedType: "Single",
        foodIncluded: false,
        attachedBathroom: true,
        distanceFromCampus: 1.2,
        rating: 4.5,
        amenities: ["WiFi", "Laundry", "Power Backup", "CCTV", "Parking", "Study Room"],
        availableBeds: 6,
        images: [
            "https://images.unsplash.com/photo-1505691938895-1758d7feb511?w=800",
            "https://images.unsplash.com/photo-1502672260266-1c1de2d9d00c?w=800"
        ],
        description: "Premium single-occupancy AC rooms for students who value privacy and peaceful study environments. Strategically located in CIDCO with strong power backup, laundry services, and high-tech CCTV systems.",
        contactNumber: "+91 99887 76655",
        ownerName: "Ramesh Kulkarni",
        verified: true
    },
    {
        id: 3,
        propertyName: "Venkatesh Boys PG & Hostel",
        propertyType: "Hostel",
        hostelType: "Boys",
        location: "Aurangpura",
        nearbyCollege: "SB College of Science",
        monthlyRent: 3500,
        securityDeposit: 3000,
        acType: "Non-AC",
        bedType: "Triple",
        foodIncluded: true,
        attachedBathroom: false,
        distanceFromCampus: 0.8,
        rating: 3.8,
        amenities: ["WiFi", "Mess", "CCTV", "Parking"],
        availableBeds: 18,
        images: [
            "https://images.unsplash.com/photo-1522771731570-8682dc3a4332?w=800"
        ],
        description: "Affordable shared hostel accommodations located in the heart of Aurangpura. The rent is highly cost-effective and includes three meals a day. Ideal for competitive exam students.",
        contactNumber: "+91 94220 12345",
        ownerName: "Vijay Patil",
        verified: false
    },
    {
        id: 4,
        propertyName: "MGM Boys Hostel Block A",
        propertyType: "Hostel",
        hostelType: "Boys",
        location: "MGM Area",
        nearbyCollege: "MGM's JNEC & Medical College",
        monthlyRent: 12000,
        securityDeposit: 20000,
        acType: "AC",
        bedType: "Double",
        foodIncluded: true,
        attachedBathroom: true,
        distanceFromCampus: 0.2,
        rating: 4.8,
        amenities: ["WiFi", "Laundry", "Gym", "Library", "Power Backup", "CCTV", "Mess", "Parking", "Study Room"],
        availableBeds: 8,
        images: [
            "https://images.unsplash.com/photo-1598928506311-c55dd1b31412?w=800",
            "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?w=800"
        ],
        description: "Premium double-sharing AC rooms inside the MGM campus zone. Fully equipped with modern amenities like a professional gymnasium, digital library access, 24/7 high security CCTV guards, and premium organic meals.",
        contactNumber: "+91 91580 98765",
        ownerName: "Anil MGM Trust",
        verified: true
    },
    {
        id: 5,
        propertyName: "Deogiri Boys Scholar Hostel",
        propertyType: "Hostel",
        hostelType: "Boys",
        location: "Railway Station Area",
        nearbyCollege: "Deogiri College of Arts, Commerce & Science",
        monthlyRent: 5000,
        securityDeposit: 6000,
        acType: "Non-AC",
        bedType: "Double",
        foodIncluded: true,
        attachedBathroom: false,
        distanceFromCampus: 0.7,
        rating: 4.0,
        amenities: ["WiFi", "Mess", "CCTV", "Parking", "Study Room", "Power Backup"],
        availableBeds: 15,
        images: [
            "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800"
        ],
        description: "A comfortable, disciplined hostel stay tailored for Deogiri College students. Offers double shared rooms, high-speed internet network, spacious study room hall, and warm, home-cooked food.",
        contactNumber: "+91 98900 11223",
        ownerName: "Dnyaneshwar Shinde",
        verified: true
    },

    // --- 5 GIRLS HOSTELS ---
    {
        id: 6,
        propertyName: "Jijau Girls Safe Haven Hostel",
        propertyType: "Hostel",
        hostelType: "Girls",
        location: "Osmanpura",
        nearbyCollege: "Government College of Engineering, Aurangabad (GECA)",
        monthlyRent: 5500,
        securityDeposit: 6000,
        acType: "Non-AC",
        bedType: "Double",
        foodIncluded: true,
        attachedBathroom: true,
        distanceFromCampus: 0.4,
        rating: 4.4,
        amenities: ["WiFi", "Mess", "Laundry", "CCTV", "Power Backup", "Study Room"],
        availableBeds: 10,
        images: [
            "https://images.unsplash.com/photo-1522771731570-8682dc3a4332?w=800",
            "https://images.unsplash.com/photo-1598928506311-c55dd1b31412?w=800"
        ],
        description: "Highly secure and comfortable girls hostel in Osmanpura. Features biometric gates, female warden on-duty 24/7, attached bathroom in every room, and three daily high quality meals.",
        contactNumber: "+91 95030 44556",
        ownerName: "Suhasini Joshi",
        verified: true
    },
    {
        id: 7,
        propertyName: "MGM Girls Executive Hostel Block B",
        propertyType: "Hostel",
        hostelType: "Girls",
        location: "MGM Area",
        nearbyCollege: "MGM's JNEC & Medical Campus",
        monthlyRent: 14000,
        securityDeposit: 25000,
        acType: "AC",
        bedType: "Single",
        foodIncluded: true,
        attachedBathroom: true,
        distanceFromCampus: 0.3,
        rating: 4.9,
        amenities: ["WiFi", "Laundry", "Gym", "Library", "Power Backup", "CCTV", "Mess", "Parking", "Study Room"],
        availableBeds: 4,
        images: [
            "https://images.unsplash.com/photo-1505691938895-1758d7feb511?w=800",
            "https://images.unsplash.com/photo-1502672260266-1c1de2d9d00c?w=800"
        ],
        description: "Premium single-occupancy luxury living specifically designed for female medical and engineering students. Fully centralized AC system, state-of-the-art multi-tier security cameras, fitness gymnasium, and elite catering.",
        contactNumber: "+91 96570 12345",
        ownerName: "Radha MGM Trust Manager",
        verified: true
    },
    {
        id: 8,
        propertyName: "Shraddha Girls Residency",
        propertyType: "Hostel",
        hostelType: "Girls",
        location: "Aurangpura",
        nearbyCollege: "SB College of Arts & Commerce",
        monthlyRent: 4000,
        securityDeposit: 4000,
        acType: "Non-AC",
        bedType: "Triple",
        foodIncluded: false,
        attachedBathroom: false,
        distanceFromCampus: 0.9,
        rating: 3.9,
        amenities: ["WiFi", "CCTV", "Power Backup", "Study Room"],
        availableBeds: 22,
        images: [
            "https://images.unsplash.com/photo-1598928506311-c55dd1b31412?w=800"
        ],
        description: "Affordable shared residency options for girls studying in Aurangpura. Superb connectivity to coaching centers and main transit stops. Very strict curfew timings for student security.",
        contactNumber: "+91 98220 54321",
        ownerName: "Alka Deshpande",
        verified: true
    },
    {
        id: 9,
        propertyName: "Savitribai Girls Executive Residency",
        propertyType: "Hostel",
        hostelType: "Girls",
        location: "N-5",
        nearbyCollege: "MGM's JNEC / CIPET",
        monthlyRent: 9500,
        securityDeposit: 15000,
        acType: "AC",
        bedType: "Double",
        foodIncluded: true,
        attachedBathroom: true,
        distanceFromCampus: 1.5,
        rating: 4.7,
        amenities: ["WiFi", "Laundry", "Mess", "CCTV", "Power Backup", "Parking", "Study Room"],
        availableBeds: 8,
        images: [
            "https://images.unsplash.com/photo-1502672260266-1c1de2d9d00c?w=800"
        ],
        description: "Luxury twin sharing rooms with dedicated study desks and high speed commercial internet routers. Rent covers excellent multi-cuisine catering services, routine cleaning, laundry, and round the clock security.",
        contactNumber: "+91 90110 99887",
        ownerName: "Meenakshi Wagh",
        verified: true
    },
    {
        id: 10,
        propertyName: "Deogiri Girls Modern Hostel",
        propertyType: "Hostel",
        hostelType: "Girls",
        location: "Padampura",
        nearbyCollege: "Deogiri College & BAMU",
        monthlyRent: 6000,
        securityDeposit: 7500,
        acType: "Non-AC",
        bedType: "Double",
        foodIncluded: true,
        attachedBathroom: true,
        distanceFromCampus: 0.6,
        rating: 4.1,
        amenities: ["WiFi", "Mess", "Laundry", "CCTV", "Study Room", "Power Backup"],
        availableBeds: 14,
        images: [
            "https://images.unsplash.com/photo-1522771731570-8682dc3a4332?w=800"
        ],
        description: "Modern, secure and well-managed female student accommodation within safe distance of Deogiri College campus. Features personal wardrobes, attached spacious toilets, and healthy pure vegetarian diets.",
        contactNumber: "+91 88888 77777",
        ownerName: "Shakuntala Shinde",
        verified: true
    },

    // --- 5 CO-ED HOSTELS ---
    {
        id: 11,
        propertyName: "Elite Co-living Space & Executive Hostel",
        propertyType: "Hostel",
        hostelType: "Co-ed",
        location: "Kranti Chowk",
        nearbyCollege: "Government College of Engineering, Aurangabad (GECA)",
        monthlyRent: 18000,
        securityDeposit: 30000,
        acType: "AC",
        bedType: "Single",
        foodIncluded: true,
        attachedBathroom: true,
        distanceFromCampus: 2.2,
        rating: 4.9,
        amenities: ["WiFi", "Laundry", "Gym", "Pool", "Power Backup", "CCTV", "Mess", "Parking", "Study Room"],
        availableBeds: 5,
        images: [
            "https://images.unsplash.com/photo-1505691938895-1758d7feb511?w=800",
            "https://images.unsplash.com/photo-1598928506311-c55dd1b31412?w=800"
        ],
        description: "Aurangabad's finest co-living executive space for premium engineering students and working researchers. Boasts premium rooms with high quality split air conditioners, a swimming pool, smart gym room, and custom multi-cuisine menus.",
        contactNumber: "+91 97630 11223",
        ownerName: "Yashvardhan Rathod",
        verified: true
    },
    {
        id: 12,
        propertyName: "Aura Premium Co-living",
        propertyType: "Hostel",
        hostelType: "Co-ed",
        location: "N-6",
        nearbyCollege: "MGM's JNEC / BAMU",
        monthlyRent: 15000,
        securityDeposit: 25000,
        acType: "AC",
        bedType: "Double",
        foodIncluded: false,
        attachedBathroom: true,
        distanceFromCampus: 2.5,
        rating: 4.6,
        amenities: ["WiFi", "Laundry", "Gym", "Power Backup", "CCTV", "Parking", "Study Room"],
        availableBeds: 10,
        images: [
            "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800"
        ],
        description: "Stunning double-sharing co-ed community housing block in N-6. Highly modern aesthetics with game lounge rooms, community kitchens, fully functional gym machines, high capacity backup, and smart lock cards.",
        contactNumber: "+91 98600 33445",
        ownerName: "Vikram Solanki",
        verified: true
    },
    {
        id: 13,
        propertyName: "Chhatrapati Co-ed Shared Living",
        propertyType: "Hostel",
        hostelType: "Co-ed",
        location: "Padampura",
        nearbyCollege: "Deogiri College of Engineering",
        monthlyRent: 10000,
        securityDeposit: 15000,
        acType: "AC",
        bedType: "Triple",
        foodIncluded: true,
        attachedBathroom: true,
        distanceFromCampus: 1.8,
        rating: 4.3,
        amenities: ["WiFi", "Mess", "Laundry", "Power Backup", "CCTV", "Parking", "Study Room"],
        availableBeds: 12,
        images: [
            "https://images.unsplash.com/photo-1522771731570-8682dc3a4332?w=800"
        ],
        description: "Spacious AC triple sharing apartments managed by a premium co-living company. Perfectly blends social student communities with high speed internet connectivity, healthy meals, and housekeeping services.",
        contactNumber: "+91 75880 99001",
        ownerName: "Karan Johar-Patil",
        verified: true
    },
    {
        id: 14,
        propertyName: "Metro Co-ed Smart Stay",
        propertyType: "Hostel",
        hostelType: "Co-ed",
        location: "Beed Bypass",
        nearbyCollege: "Deogiri College / MIT Aurangabad",
        monthlyRent: 7500,
        securityDeposit: 10000,
        acType: "Non-AC",
        bedType: "Double",
        foodIncluded: false,
        attachedBathroom: true,
        distanceFromCampus: 5.5,
        rating: 3.8,
        amenities: ["WiFi", "CCTV", "Parking", "Power Backup", "Laundry"],
        availableBeds: 16,
        images: [
            "https://images.unsplash.com/photo-1598928506311-c55dd1b31412?w=800"
        ],
        description: "Affordable shared double non-AC rooms near Beed Bypass. Excellent budget stay for students attending MIT or Deogiri College with convenient public transport transit access points.",
        contactNumber: "+91 94030 77889",
        ownerName: "Prakash Kakade",
        verified: false
    },
    {
        id: 15,
        propertyName: "Sambhajinagar Premium Co-ed Stay",
        propertyType: "Hostel",
        hostelType: "Co-ed",
        location: "Railway Station Area",
        nearbyCollege: "Deogiri College / GECA",
        monthlyRent: 16500,
        securityDeposit: 20000,
        acType: "AC",
        bedType: "Single",
        foodIncluded: true,
        attachedBathroom: true,
        distanceFromCampus: 1.1,
        rating: 4.7,
        amenities: ["WiFi", "Laundry", "Gym", "Power Backup", "CCTV", "Mess", "Parking", "Study Room"],
        availableBeds: 7,
        images: [
            "https://images.unsplash.com/photo-1505691938895-1758d7feb511?w=800"
        ],
        description: "Exquisite single private rooms with central AC, multi-cuisine organic mess buffet catering, personal mini-fridge, shared gym layout, and daily housekeeping visits. Strongly secured by armed security guards.",
        contactNumber: "+91 99230 44557",
        ownerName: "Devendra Fadnavis-Chavan",
        verified: true
    },

    // --- 5 PG ACCOMMODATIONS ---
    {
        id: 16,
        propertyName: "Sai Executive Boys PG",
        propertyType: "PG",
        hostelType: "Boys",
        location: "Osmanpura",
        nearbyCollege: "Government College of Engineering (GECA)",
        monthlyRent: 6500,
        securityDeposit: 8000,
        acType: "Non-AC",
        bedType: "Double",
        foodIncluded: true,
        attachedBathroom: true,
        distanceFromCampus: 0.5,
        rating: 4.2,
        amenities: ["WiFi", "Mess", "Laundry", "CCTV", "Parking", "Power Backup"],
        availableBeds: 4,
        images: [
            "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?w=800"
        ],
        description: "Extremely tidy PG accommodation for boys in the leafy lanes of Osmanpura. Superb homemade meals served twice a day, high-speed fiber internet connection, laundry services, and attached bathroom suites.",
        contactNumber: "+91 98810 99004",
        ownerName: "Moreshwar Rao",
        verified: true
    },
    {
        id: 17,
        propertyName: "Gauri Executive Girls PG",
        propertyType: "PG",
        hostelType: "Girls",
        location: "CIDCO",
        nearbyCollege: "MGM JNEC Engineering College",
        monthlyRent: 7000,
        securityDeposit: 10000,
        acType: "Non-AC",
        bedType: "Single",
        foodIncluded: true,
        attachedBathroom: true,
        distanceFromCampus: 1.4,
        rating: 4.4,
        amenities: ["WiFi", "Mess", "CCTV", "Parking", "Power Backup", "Study Room"],
        availableBeds: 5,
        images: [
            "https://images.unsplash.com/photo-1522771731570-8682dc3a4332?w=800"
        ],
        description: "Comfortable and safe PG room for female students or working corporate employees. Home-cooked vegetarian catering packages, single-bed privacy, biometric entrance keys, and backup solar electricity systems.",
        contactNumber: "+91 97300 22334",
        ownerName: "Sunanda Deshmukh",
        verified: true
    },
    {
        id: 18,
        propertyName: "Radhe Luxury PG for Men",
        propertyType: "PG",
        hostelType: "Boys",
        location: "Beed Bypass",
        nearbyCollege: "MIT Aurangabad / GECA",
        monthlyRent: 5500,
        securityDeposit: 5000,
        acType: "Non-AC",
        bedType: "Double",
        foodIncluded: false,
        attachedBathroom: false,
        distanceFromCampus: 4.2,
        rating: 3.5,
        amenities: ["WiFi", "CCTV", "Parking", "Power Backup"],
        availableBeds: 9,
        images: [
            "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800"
        ],
        description: "Double occupancy PG rooms for male students and workers on Beed Bypass. Economical rent packages, close to high-speed road transit lines, and includes CCTV cameras and parking spaces.",
        contactNumber: "+91 96040 55667",
        ownerName: "Haribhau Bagade",
        verified: false
    },
    {
        id: 19,
        propertyName: "Annapurna Homestay PG (Co-ed)",
        propertyType: "PG",
        hostelType: "Co-ed",
        location: "Aurangpura",
        nearbyCollege: "SB Science College",
        monthlyRent: 3000,
        securityDeposit: 3000,
        acType: "Non-AC",
        bedType: "4 Sharing",
        foodIncluded: true,
        attachedBathroom: false,
        distanceFromCampus: 0.6,
        rating: 3.6,
        amenities: ["WiFi", "Mess", "Parking", "CCTV"],
        availableBeds: 12,
        images: [
            "https://images.unsplash.com/photo-1522771731570-8682dc3a4332?w=800"
        ],
        description: "An incredibly budget-friendly shared student flat PG in Aurangpura. Perfect homestay vibes under the supervision of a caring elderly family. Complete diet plans included.",
        contactNumber: "+91 91300 44556",
        ownerName: "Shreedhar Joshi",
        verified: true
    },
    {
        id: 20,
        propertyName: "Royal Premium Girls Luxury PG",
        propertyType: "PG",
        hostelType: "Girls",
        location: "Padampura",
        nearbyCollege: "Deogiri College / BAMU Campus",
        monthlyRent: 22000,
        securityDeposit: 40000,
        acType: "AC",
        bedType: "Single",
        foodIncluded: true,
        attachedBathroom: true,
        distanceFromCampus: 1.0,
        rating: 4.8,
        amenities: ["WiFi", "Laundry", "Gym", "Library", "Power Backup", "CCTV", "Mess", "Parking", "Study Room"],
        availableBeds: 3,
        images: [
            "https://images.unsplash.com/photo-1505691938895-1758d7feb511?w=800",
            "https://images.unsplash.com/photo-1502672260266-1c1de2d9d00c?w=800"
        ],
        description: "The absolute height of luxury female PG stays in Aurangabad. Single occupancy AC suite rooms, state of the art study room and private mini library setups, daily customized protein diet catering, personal fitness equipment, and 24/7 security wardens.",
        contactNumber: "+91 99600 55661",
        ownerName: "Rajendra Darda",
        verified: true
    }
];

async function seedDatabase() {
    try {
        console.log(`Connecting to MongoDB at: ${MONGODB_URI}`);
        await mongoose.connect(MONGODB_URI);
        console.log("Connected to MongoDB successfully.");

        // Clear existing properties in collection
        console.log("Clearing existing property collections...");
        await Property.deleteMany({});
        console.log("Properties cleared.");

        // Insert new seeded property data records
        console.log(`Inserting ${properties.length} PG and Hostel properties into database...`);
        const insertedProperties = await Property.insertMany(properties);
        console.log(`Successfully seeded ${insertedProperties.length} database entries!`);

        // Close mongoose connection neatly
        await mongoose.disconnect();
        console.log("MongoDB connection closed.");
        process.exit(0);
    } catch (error) {
        console.error("Database seeding encountered a critical error:", error);
        process.exit(1);
    }
}

// Trigger script execution if run directly from command line
if (require.main === module) {
    seedDatabase();
}

module.exports = { properties, seedDatabase };

