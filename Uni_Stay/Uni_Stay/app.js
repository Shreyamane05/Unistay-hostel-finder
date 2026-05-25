// // Mock Data
// const mockHostels = [
//     {
//         id: 1,
//         name: "Sunshine Residency",
//         location: "2.5 km from Campus",
//         address: "123 University Road, Sector 4",
//         price: "₹8,500",
//         type: "Boys",
//         ac: true,
//         beds: "Double",
//         rating: 4.8,
//         reviews: 124,
//         image: "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
//         gallery: [
//             "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
//             "https://images.unsplash.com/photo-1522771731570-8682dc3a4332?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
//             "https://images.unsplash.com/photo-1598928506311-c55dd1b31412?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
//             "https://images.unsplash.com/photo-1502672260266-1c1de2d9d00c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
//             "https://images.unsplash.com/photo-1505691938895-1758d7feb511?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
//         ],
//         owner: "Rahul Sharma",
//         staffGender: "Male",
//         messQuality: "Excellent (Veg/Non-Veg)",
//         timings: "6:00 AM to 10:00 PM",
//         security: "24/7 Guards & CCTV",
//         features: ["WiFi", "Laundry", "AC", "Gym"],
//         feeStructure: { monthly: 8500, advance: 15000, deposit: 5000 },
//         reviewsList: [
//             { name: "Rahul Verma", date: "Oct 12, 2025", rating: 5, text: "Amazing hostel! The food is great and the gym is well-maintained.", isAnonymous: false },
//             { name: "Anonymous", date: "Sep 28, 2025", rating: 4, text: "Good place to stay. Security is strict which is good for safety.", isAnonymous: true },
//             { name: "Karan Singh", date: "Aug 15, 2025", rating: 5, text: "Highly recommend. Owner is very responsive to any issues.", isAnonymous: false }
//         ]
//     },
//     {
//         id: 2,
//         name: "Starlight Girls Hostel",
//         location: "1.0 km from Campus",
//         address: "45 College Avenue, Near Gate 2",
//         price: "₹9,200",
//         type: "Girls",
//         ac: false,
//         beds: "Single",
//         rating: 4.6,
//         reviews: 89,
//         image: "https://images.unsplash.com/photo-1522771731570-8682dc3a4332?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
//         gallery: [
//             "https://images.unsplash.com/photo-1522771731570-8682dc3a4332?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
//             "https://images.unsplash.com/photo-1505691938895-1758d7feb511?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
//             "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
//             "https://images.unsplash.com/photo-1598928506311-c55dd1b31412?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
//             "https://images.unsplash.com/photo-1502672260266-1c1de2d9d00c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
//         ],
//         owner: "Priya Desai",
//         staffGender: "Female",
//         messQuality: "Good (Pure Veg)",
//         timings: "6:00 AM to 9:30 PM",
//         security: "Female Guards & Biometric Entry",
//         features: ["WiFi", "Library", "Power Backup"],
//         feeStructure: { monthly: 9200, advance: 18400, deposit: 5000 },
//         reviewsList: [
//             { name: "Sneha P.", date: "Nov 02, 2025", rating: 5, text: "Very safe and clean. The library room is a huge plus for studying during exams.", isAnonymous: false },
//             { name: "Anonymous", date: "Oct 10, 2025", rating: 4, text: "Food is decent, mostly pure veg. Timings are a bit strict though.", isAnonymous: true }
//         ]
//     },
//     {
//         id: 3,
//         name: "Elite Co-ed Living",
//         location: "0.5 km from Campus",
//         address: "78 Tech Park Road",
//         price: "₹12,000",
//         type: "Co-ed",
//         ac: true,
//         beds: "Single",
//         rating: 4.9,
//         reviews: 210,
//         image: "https://images.unsplash.com/photo-1598928506311-c55dd1b31412?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
//         gallery: [
//             "https://images.unsplash.com/photo-1598928506311-c55dd1b31412?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
//             "https://images.unsplash.com/photo-1502672260266-1c1de2d9d00c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
//             "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
//             "https://images.unsplash.com/photo-1522771731570-8682dc3a4332?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
//             "https://images.unsplash.com/photo-1505691938895-1758d7feb511?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
//         ],
//         owner: "Vikram Singh",
//         staffGender: "Mixed",
//         messQuality: "Premium Multi-cuisine",
//         timings: "No Restrictions",
//         security: "Smart Lock & Security Team",
//         features: ["AC", "Ensuite", "Pool", "Gym", "WiFi"],
//         feeStructure: { monthly: 12000, advance: 24000, deposit: 10000 },
//         availableBeds: 2,
//         reviewsList: [
//             { name: "Aman Gupta", date: "Nov 11, 2025", rating: 5, text: "Premium living indeed. The pool and gym are fantastic.", isAnonymous: false },
//             { name: "Anonymous", date: "Aug 05, 2025", rating: 5, text: "Zero restrictions is great. Totally worth the price.", isAnonymous: true }
//         ]
//     }
// ];

// const mockOwnerMessages = [
//     { id: 1, studentName: "Rahul Sharma", studentId: "s1", date: "2026-05-14", text: "Hi, I'd like to schedule a visit for tomorrow morning. Is that possible?", status: "unread", replies: [] },
//     { id: 2, studentName: "Neha Gupta", studentId: "s2", date: "2026-05-13", text: "Do you have any single rooms available starting next month?", status: "read", replies: [{ sender: "owner", text: "Yes, we have one single room opening up on the 5th." }] }
// ];

// // Initialize local storage with mock data if empty or missing new properties
// const existingData = localStorage.getItem('hostels');
// if (!existingData || !JSON.parse(existingData)[0].gallery || JSON.parse(existingData)[0].availableBeds === undefined) {
//     mockHostels[0].availableBeds = 5;
//     mockHostels[1].availableBeds = 12;
//     localStorage.setItem('hostels', JSON.stringify(mockHostels));
// }

// if (!localStorage.getItem('ownerMessages')) {
//     localStorage.setItem('ownerMessages', JSON.stringify(mockOwnerMessages));
// }

// // Authentication Logic
// async function handleLogin(e) {

//     e.preventDefault();

//     const username = document.getElementById('username').value;

//     const password = document.getElementById('password').value;

//     try {

//         const response = await fetch('http://localhost:5000/api/login', {

//             method: 'POST',

//             headers: {
//                 'Content-Type': 'application/json'
//             },

//             body: JSON.stringify({
//                 username,
//                 password
//             })
//         });

//         const data = await response.json();

//         if (data.success) {

//             // Save token
//             localStorage.setItem('token', data.token);

//             // Save current user
//             localStorage.setItem('currentUser', JSON.stringify(data.user));

//             // Redirect based on backend role
//             if (data.user.role === 'student') {

//                 window.location.href = 'student-dashboard.html';

//             } else {

//                 window.location.href = 'owner-dashboard.html';
//             }

//         } else {

//             alert(data.message);
//         }

//     } catch (error) {

//         console.log(error);

//         alert("Server Error");
//     }
// }

// // Toggle Role in Login Form
// function toggleRole(role) {
//     document.querySelectorAll('.role-btn').forEach(btn => {
//         btn.classList.remove('active');
//     });
//     document.querySelector(`.role-btn[data-role="${role}"]`).classList.add('active');
    
//     // Change theme based on role
//     if (role === 'owner') {
//         document.body.classList.add('theme-owner');
//     } else {
//         document.body.classList.remove('theme-owner');
//     }
// }

// // Render Hostel Cards (Student Dashboard)
// async function renderHostels(filters = {}) {
//     const hostelList = document.getElementById('hostelList');
//     if (!hostelList) return;

//     try {
//         const response = await fetch('http://localhost:5000/api/hostels');
//         const hostelsFromServer = await response.json();

//         hostelList.innerHTML = '';
//         hostelsFromServer.forEach(hostel => {
//             // Apply your existing filter logic here...
//             const card = `
//                 <div class="hostel-card animate-slide-up">
//                     <img src="${hostel.image}" alt="${hostel.name}">
//                     <div class="hostel-card-content">
//                         <h3>${hostel.name}</h3>
//                         <p>${hostel.location}</p>
//                         <div class="price">${hostel.price}<span>/month</span></div>
//                         <button class="btn btn-primary btn-block" onclick="viewHostel(${hostel.id})">View Details</button>
//                     </div>
//                 </div>
//             `;
//             hostelList.innerHTML += card;
//         });
//     } catch (error) {
//         console.error("Failed to load hostels:", error);
//     }
// }

// function applyAdvancedFilters() {
//     const filter = {
//         searchTerm: document.getElementById('searchCollege') ? document.getElementById('searchCollege').value : '',
//         hType: document.querySelector('input[name="hType"]:checked') ? document.querySelector('input[name="hType"]:checked').value : 'all',
//         maxPrice: document.getElementById('priceRange') ? parseInt(document.getElementById('priceRange').value) : null,
//         ac: document.getElementById('acFilter') ? document.getElementById('acFilter').value : 'all',
//         bed: document.getElementById('bedFilter') ? document.getElementById('bedFilter').value : 'all',
//         maxDistance: document.getElementById('distanceFilter') ? document.getElementById('distanceFilter').value : 'all',
//         minRating: document.getElementById('ratingFilter') ? parseInt(document.getElementById('ratingFilter').value) : 1,
//         amenities: Array.from(document.querySelectorAll('.amenity-cb:checked')).map(cb => cb.value)
//     };
//     renderHostels(filter);
// }

// function resetFilters() {
//     if (document.getElementById('searchCollege')) document.getElementById('searchCollege').value = '';
//     if (document.querySelector('input[name="hType"][value="all"]')) document.querySelector('input[name="hType"][value="all"]').checked = true;
//     if (document.getElementById('priceRange')) {
//         document.getElementById('priceRange').value = 25000;
//         document.getElementById('priceVal').innerText = 'Up to ₹25,000';
//     }
//     if (document.getElementById('acFilter')) document.getElementById('acFilter').value = 'all';
//     if (document.getElementById('bedFilter')) document.getElementById('bedFilter').value = 'all';
//     if (document.getElementById('distanceFilter')) document.getElementById('distanceFilter').value = 'all';
//     if (document.getElementById('ratingFilter')) {
//         document.getElementById('ratingFilter').value = 1;
//         document.getElementById('ratingVal').innerText = 'All';
//     }
//     document.querySelectorAll('.amenity-cb').forEach(cb => cb.checked = false);
    
//     renderHostels();
// }

// function viewHostel(id) {
//     localStorage.setItem('selectedHostelId', id);
//     window.location.href = 'hostel-detail.html';
// }

// // Render Hostel Details
// // Updated Render Hostel Cards with Live Advanced Filters & Dynamic Images
// async function renderHostels(filters = {}) {
//     const hostelList = document.getElementById('hostelList');
//     if (!hostelList) return;

//     try {
//         // 1. Fetch live array data from your backend
//         const response = await fetch('http://localhost:5000/api/hostels');
//         const hostelsFromServer = await response.json();

//         hostelList.innerHTML = '';
//         let visibleCount = 0;

//         hostelsFromServer.forEach(hostel => {
//             // --- PART 2: ADVANCED FILTERING MATRIX LOGIC ---
            
//             // A. Text Search (College / Location / Name)
//             if (filters.searchTerm) {
//                 const search = filters.searchTerm.toLowerCase();
//                 const nameMatch = hostel.name.toLowerCase().includes(search);
//                 const locMatch = hostel.location ? hostel.location.toLowerCase().includes(search) : false;
//                 const addrMatch = hostel.address ? hostel.address.toLowerCase().includes(search) : false;
//                 if (!nameMatch && !locMatch && !addrMatch) return;
//             }

//             // B. Hostel Gender Type (Boys / Girls / Co-ed)
//             if (filters.hType && filters.hType !== 'all') {
//                 if (hostel.type.toLowerCase() !== filters.hType.toLowerCase()) return;
//             }

//             // C. Max Budget Limit Pricing Filter
//             if (filters.maxPrice) {
//                 const numericPrice = parseInt(hostel.price.replace(/[^0-9]/g, '')) || 0;
//                 if (numericPrice > filters.maxPrice) return;
//             }

//             // D. AC / Non-AC Requirements
//             if (filters.ac && filters.ac !== 'all') {
//                 const wantsAC = (filters.ac === 'ac');
//                 const isHostelAC = (hostel.ac === true || hostel.ac === 'true' || hostel.ac === 'ac');
//                 if (wantsAC !== isHostelAC) return;
//             }

//             // E. Sharing Bed Arrangement Type (Single / Double / Triple)
//             if (filters.bed && filters.bed !== 'all') {
//                 const bedType = hostel.beds ? hostel.beds.toLowerCase() : '';
//                 if (bedType !== filters.bed.toLowerCase()) return;
//             }

//             // F. Amenities Checklist Filter matching
//             if (filters.amenities && filters.amenities.length > 0) {
//                 const hostelFeatures = hostel.features || [];
//                 const matchesAllAmenities = filters.amenities.every(amenity => 
//                     hostelFeatures.some(f => f.toLowerCase() === amenity.toLowerCase())
//                 );
//                 if (!matchesAllAmenities) return;
//             }

//             // --- PART 1: DYNAMIC PHOTOS VALUE MATCHING ---
//             const displayImage = hostel.image 
//                 ? hostel.image 
//                 : "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?w=800";

//             visibleCount++;

//             // Append Card Template Construction Literal
//             const card = `
//                 <div class="hostel-card animate-slide-up" onclick="viewHostel(${hostel.id})" style="cursor: pointer;">
//                     <div class="hostel-image-wrapper">
//                         <img src="${displayImage}" alt="${hostel.name}" class="hostel-image" style="width:100%; height:200px; object-fit:cover;">
//                         <span class="type-badge ${hostel.type.toLowerCase() === 'boys' ? 'badge-blue' : hostel.type.toLowerCase() === 'girls' ? 'badge-pink' : 'badge-purple'}">${hostel.type}</span>
//                     </div>
//                     <div class="hostel-card-content" style="padding: 1rem;">
//                         <div style="display: flex; justify-content: space-between; align-items: start; margin-bottom: 0.5rem;">
//                             <h3 style="margin: 0; font-size: 1.1rem;">${hostel.name}</h3>
//                             <div style="display: flex; align-items: center; gap: 4px; font-size: 0.875rem; font-weight: 600;">
//                                 <svg width="14" height="14" viewBox="0 0 24 24" fill="#ffb800" stroke="#ffb800"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
//                                 ${hostel.rating || '5.0'}
//                             </div>
//                         </div>
//                         <p style="color: var(--text-muted); font-size: 0.875rem; margin-bottom: 1rem;">
//                             <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="vertical-align: middle; margin-right: 4px;"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
//                             ${hostel.address || hostel.location}
//                         </p>
//                         <div style="display: flex; justify-content: space-between; align-items: center; border-top: 1px solid var(--border); padding-top: 0.75rem;">
//                             <div class="price" style="font-size: 1.2rem; font-weight:700; color:var(--primary);">${hostel.price}<span style="font-size:0.8rem; font-weight:normal; color:var(--text-muted);">/mo</span></div>
//                             <button class="btn btn-primary" style="padding: 0.4rem 1rem;">Details</button>
//                         </div>
//                     </div>
//                 </div>
//             `;
//             hostelList.innerHTML += card;
//         });

//         // Update results counter dashboard badge component elements
//         const resultsCount = document.querySelector('.feature-tag') || document.querySelector('.results-count');
//         if (resultsCount) {
//             resultsCount.textContent = `${visibleCount} Results Found`;
//         }

//         if (visibleCount === 0) {
//             hostelList.innerHTML = `<p style="grid-column: 1/-1; text-align: center; color: var(--text-muted); margin-top: 2rem;">No hostels match your active search filters.</p>`;
//         }

//     } catch (error) {
//         console.error("Failed to load hostels:", error);
//         hostelList.innerHTML = `<p style="grid-column: 1/-1; text-align: center; color: red;">Failed to load hostels. Is your server.js running?</p>`;
//     }
// }

// // Add Hostel (Owner Dashboard)
// async function handleAddHostel(e) {
//     e.preventDefault();
//     console.log("Publishing hostel with images and verification documents...");

//     const features = Array.from(document.querySelectorAll('input[name="hFeature"]:checked')).map(cb => cb.value);
    
//     const imgInput = document.getElementById('hImages');
//     // Change 'hDocs' to match the exact ID of your verification document file input if different
//     const docInput = document.getElementById('hDocs') || document.querySelector('input[type="file"]:not(#hImages)');

//     if (!imgInput || imgInput.files.length === 0) {
//         alert("Please select a hostel image!");
//         return;
//     }

//     const formData = new FormData();
    
//     // Safely structure form fields to prevent the "Loading..." crash
//     formData.append('name', document.getElementById('hName')?.value || 'New Hostel');
//     formData.append('location', "0.5 km from Campus");
//     formData.append('address', document.getElementById('hAddress')?.value || 'University Campus Road');
    
//     // Keep raw pricing numbers for clean calculation on detail pages
//     const rawPrice = document.getElementById('hPrice')?.value || '8000';
//     formData.append('price', "₹" + rawPrice); 
    
//     formData.append('type', document.getElementById('hType')?.value || 'Boys');
//     formData.append('ac', document.getElementById('hAc')?.value === 'ac'); 
//     formData.append('beds', document.getElementById('hBeds')?.value || 'Single');
//     formData.append('features', JSON.stringify(features)); 
//     formData.append('availableBeds', 5);
    
//     // Additional fields visible in your screenshot form
//     formData.append('security', document.getElementById('hSecurity')?.value || 'High security');
//     formData.append('staffGender', document.getElementById('hStaff')?.value || 'Male');
//     formData.append('messQuality', document.getElementById('hMess')?.value || 'veg');
//     formData.append('timings', document.getElementById('hTimings')?.value || '6:00am - 5:00pm');

//     // 1. Append the main hostel display image
//     formData.append('hImage', imgInput.files[0]);

//     // 2. Append the verification document if uploaded
//     if (docInput && docInput.files.length > 0) {
//         formData.append('hDoc', docInput.files[0]);
//     }

//     try {
//         const response = await fetch('http://localhost:5000/api/hostels', {
//             method: 'POST',
//             body: formData
//         });

//         const result = await response.json();

//         if (result.success) {
//             alert('Hostel and verification papers registered successfully!');
//             e.target.reset();
//             switchOwnerTab('listings');
//         } else {
//             alert('Server Error: ' + result.message);
//         }
//     } catch (error) {
//         console.error("Upload failure:", error);
//         alert('Could not sync data with server.');
//     }
// }

// // Update text when an image is selected
// document.getElementById('hImages').addEventListener('change', function() {
//     const status = document.getElementById('imageStatus');
//     if (this.files.length > 0) {
//         status.textContent = "✅ Image Selected: " + this.files[0].name;
//     }
// });

// // Update text when a document is selected
// document.getElementById('hDocs').addEventListener('change', function() {
//     const status = document.getElementById('docStatus');
//     if (this.files.length > 0) {
//         status.textContent = "✅ Document Selected: " + this.files[0].name;
//     }
// });

// // --- Owner Dashboard Logic ---

// function switchOwnerTab(tabId) {
//     document.querySelectorAll('.owner-tab').forEach(t => t.classList.remove('active'));
//     document.querySelectorAll('.tab-content').forEach(t => t.classList.remove('active'));
    
//     document.querySelector(`.owner-tab[onclick="switchOwnerTab('${tabId}')"]`).classList.add('active');
//     document.getElementById(`tab-${tabId}`).classList.add('active');
    
//     if (tabId === 'listings') renderOwnerListings();
//     if (tabId === 'messages') renderMessages();
// }

// async function renderOwnerListings() {
//     const container = document.getElementById('ownerListings');
//     if (!container) return;
    
//     container.innerHTML = "<p>Loading listings from server...</p>";

//     try {
//         // Fetch fresh data from your running server
//         const response = await fetch('http://localhost:5000/api/hostels');
//         const hostels = await response.json();

//         if (hostels.length === 0) {
//             container.innerHTML = "<p>No hostels found on the server.</p>";
//             return;
//         }

//         container.innerHTML = hostels.map(h => `
//             <div class="inventory-card">
//                 <h3 style="margin-bottom: 0.25rem;">${h.name}</h3>
//                 <p style="color: var(--text-muted); font-size: 0.9rem; margin-bottom: 1rem;">${h.address}</p>
//                 <div style="display: flex; justify-content: space-between; margin-bottom: 0.5rem;">
//                     <span>Total Type:</span> <strong>${h.type} / ${h.beds} Bed</strong>
//                 </div>
//                 <div style="display: flex; justify-content: space-between; margin-bottom: 1rem;">
//                     <span>Monthly Rent:</span> <strong>${h.price}</strong>
//                 </div>
                
//                 <div class="bed-updater">
//                     <span style="flex: 1; font-weight: 600;">Available Beds:</span>
//                     <input type="number" id="beds-${h.id}" class="form-control" style="width: 80px; padding: 0.5rem;" value="${h.availableBeds !== undefined ? h.availableBeds : 0}" min="0">
//                     <button class="btn btn-outline" style="padding: 0.5rem 1rem;" onclick="updateBeds(${h.id})">Save</button>
//                 </div>
//             </div>
//         `).join('');

//     } catch (error) {
//         console.error("Error loading listings:", error);
//         container.innerHTML = "<p style='color:red;'>Failed to load listings. Is server running?</p>";
//     }
// }

// function updateBeds(id) {
//     const hostels = JSON.parse(localStorage.getItem('hostels'));
//     const index = hostels.findIndex(h => h.id == id);
//     if (index > -1) {
//         const newVal = parseInt(document.getElementById(`beds-${id}`).value);
//         hostels[index].availableBeds = newVal;
//         localStorage.setItem('hostels', JSON.stringify(hostels));
        
//         const btn = document.querySelector(`input[id="beds-${id}"]`).nextElementSibling;
//         const oldText = btn.textContent;
//         btn.textContent = 'Saved!';
//         btn.style.background = 'var(--success)';
//         btn.style.color = 'white';
//         btn.style.borderColor = 'var(--success)';
        
//         setTimeout(() => {
//             btn.textContent = oldText;
//             btn.style.background = 'transparent';
//             btn.style.color = 'var(--primary)';
//             btn.style.borderColor = 'var(--primary)';
//         }, 2000);
//     }
// }

// let currentActiveMsg = null;

// function renderMessages() {
//     const listContainer = document.getElementById('msgList');
//     if (!listContainer) return;
    
//     const msgs = JSON.parse(localStorage.getItem('ownerMessages')) || [];
    
//     listContainer.innerHTML = msgs.map(m => `
//         <div class="msg-item ${m.status === 'unread' ? 'unread' : ''} ${currentActiveMsg === m.id ? 'active' : ''}" onclick="viewMessage(${m.id})">
//             <div style="display: flex; justify-content: space-between; margin-bottom: 0.25rem;">
//                 <h4>${m.studentName}</h4>
//                 <span style="font-size: 0.75rem; color: var(--text-muted);">${m.date}</span>
//             </div>
//             <p>${m.text}</p>
//         </div>
//     `).join('');
    
//     if (msgs.length > 0 && !currentActiveMsg) {
//         viewMessage(msgs[0].id);
//     }
// }

// function viewMessage(id) {
//     currentActiveMsg = id;
//     const msgs = JSON.parse(localStorage.getItem('ownerMessages')) || [];
//     const msg = msgs.find(m => m.id === id);
    
//     if (msg && msg.status === 'unread') {
//         msg.status = 'read';
//         localStorage.setItem('ownerMessages', JSON.stringify(msgs));
//         renderMessages(); // refresh list to remove unread bold
//     } else {
//         renderMessages(); // just to update active state
//     }
    
//     const detailContainer = document.getElementById('msgDetail');
    
//     let historyHtml = `
//         <div class="chat-bubble received">
//             <strong style="display:block; font-size: 0.8rem; margin-bottom: 0.25rem;">${msg.studentName}</strong>
//             ${msg.text}
//         </div>
//     `;
    
//     if (msg.replies) {
//         historyHtml += msg.replies.map(r => `
//             <div class="chat-bubble ${r.sender === 'owner' ? 'sent' : 'received'}">
//                 ${r.text}
//             </div>
//         `).join('');
//     }

//     detailContainer.innerHTML = `
//         <div style="border-bottom: 1px solid var(--border); padding-bottom: 1rem; margin-bottom: 1rem;">
//             <h3 style="margin:0;">Conversation with ${msg.studentName}</h3>
//             <p style="font-size: 0.875rem; color: var(--text-muted); margin:0;">Inquiry about your listing</p>
//         </div>
        
//         <div class="chat-history" id="chatHistory">
//             ${historyHtml}
//         </div>
        
//         <div class="reply-box">
//             <input type="text" id="replyInput" class="form-control" placeholder="Type your reply..." onkeypress="if(event.key === 'Enter') replyMessage(${msg.id})">
//             <button class="btn btn-primary" onclick="replyMessage(${msg.id})">Send</button>
//         </div>
//     `;
    
//     const chatHist = document.getElementById('chatHistory');
//     chatHist.scrollTop = chatHist.scrollHeight;
// }

// function replyMessage(id) {
//     const input = document.getElementById('replyInput');
//     const text = input.value.trim();
//     if (!text) return;
    
//     const msgs = JSON.parse(localStorage.getItem('ownerMessages')) || [];
//     const index = msgs.findIndex(m => m.id === id);
    
//     if (index > -1) {
//         if (!msgs[index].replies) msgs[index].replies = [];
//         msgs[index].replies.push({ sender: 'owner', text: text });
//         localStorage.setItem('ownerMessages', JSON.stringify(msgs));
//         viewMessage(id);
//     }
// }

// // Logout
// function logout() {
//     localStorage.removeItem('currentUser');
//     window.location.href = 'index.html';
// }

// // Call this function when rendering your detail view, or bind it directly
// function setupDocumentButton(hostelObject) {
//     const docBtn = document.querySelector('button, a, .view-doc-btn'); // Target your button class/element
    
//     if (!docBtn) return;

//     docBtn.onclick = () => {
//         if (hostelObject.document) {
//             // Opens up the original image snapshot/PDF neatly in a brand new browser tab
//             window.open(hostelObject.document, '_blank');
//         } else {
//             alert("No verification document uploaded for this legacy hostel listing.");
//         }
//     };
// }

// // Init pages
// document.addEventListener('DOMContentLoaded', () => {
//     const path = window.location.pathname;
    
//     // Auth Check
//     const user = JSON.parse(localStorage.getItem('currentUser'));
//     if (!user && !path.endsWith('index.html') && path !== '/' && !path.endsWith('Uni_Stay/')) {
//         // window.location.href = 'index.html'; // In a real app we'd redirect
//     }
//     // const user = JSON.parse(localStorage.getItem('currentUser'));
//     if (user && document.getElementById('userNameDisplay')) {
//         document.getElementById('userNameDisplay').textContent = user.name;
//     }

//     // Bind forms and events based on current page
//     if (document.getElementById('loginForm')) {
//         document.getElementById('loginForm').addEventListener('submit', handleLogin);
//     }

//     // if (document.getElementById('hostelList')) {
//     //     renderHostels();
        
//     //     // Bind Filter Dummy Event
//     //     const filterSelect = document.getElementById('acFilter');
//     //     if(filterSelect) {
//     //         filterSelect.addEventListener('change', (e) => {
//     //             renderHostels({ ac: e.target.value });
//     //         });
//     //     }
//     // }

//    if (document.getElementById('hostelList')) {
//     renderHostels(); // Render full list initially
    
//     // Track filter changes across all components seamlessly
//     document.getElementById('searchCollege')?.addEventListener('input', applyAdvancedFilters);
//     document.querySelectorAll('input[name="hType"]').forEach(radio => radio.addEventListener('change', applyAdvancedFilters));
//     document.getElementById('priceRange')?.addEventListener('input', applyAdvancedFilters);
//     document.getElementById('acFilter')?.addEventListener('change', applyAdvancedFilters);
//     document.getElementById('bedFilter')?.addEventListener('change', applyAdvancedFilters);
//     document.getElementById('distanceFilter')?.addEventListener('change', applyAdvancedFilters);
//     document.getElementById('ratingFilter')?.addEventListener('change', applyAdvancedFilters);
//     document.querySelectorAll('.amenity-cb').forEach(cb => cb.addEventListener('change', applyAdvancedFilters));
// }

//     if (document.getElementById('detailInfo')) {
//         renderHostelDetails();
//     }

//     if (document.getElementById('addHostelForm')) {
//         document.getElementById('addHostelForm').addEventListener('submit', handleAddHostel);
//     }
    
//     if (document.getElementById('ownerListings')) {
//         switchOwnerTab('listings');
//     }
// });


// Fallback Data
const mockHostels = [
    {
        id: 1,
        name: "Sunshine Residency",
        location: "2.5 km from Campus",
        address: "123 University Road, Sector 4",
        price: "₹8,500",
        type: "Boys",
        ac: true,
        beds: "Double",
        rating: 4.8,
        reviews: 124,
        image: "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        gallery: ["https://images.unsplash.com/photo-1555854877-bab0e564b8d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"],
        owner: "Rahul Sharma",
        staffGender: "Male",
        messQuality: "Excellent (Veg/Non-Veg)",
        timings: "6:00 AM to 10:00 PM",
        security: "24/7 Guards & CCTV",
        features: ["WiFi", "Laundry", "AC", "Gym"],
        feeStructure: { monthly: 8500, advance: 15000, deposit: 5000 },
        reviewsList: []
    }
];

const mockOwnerMessages = [
    { id: 1, studentName: "Rahul Sharma", studentId: "s1", date: "2026-05-14", text: "Hi, I'd like to schedule a visit for tomorrow morning. Is that possible?", status: "unread", replies: [] }
];

if (!localStorage.getItem('ownerMessages')) {
    localStorage.setItem('ownerMessages', JSON.stringify(mockOwnerMessages));
}

// Login Logic
async function handleLogin(e) {
    e.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    try {
        const response = await fetch('http://localhost:5000/api/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username, password })
        });
        const data = await response.json();

        if (data.success) {
            localStorage.setItem('token', data.token);
            localStorage.setItem('currentUser', JSON.stringify(data.user));

            if (data.user.role === 'student') {
                window.location.href = 'student-dashboard.html';
            } else {
                window.location.href = 'owner-dashboard.html';
            }
        } else {
            alert(data.message);
        }
    } catch (error) {
        console.error(error);
        alert("Server Error");
    }
}

function toggleRole(role) {
    document.querySelectorAll('.role-btn').forEach(btn => btn.classList.remove('active'));
    document.querySelector(`.role-btn[data-role="${role}"]`)?.classList.add('active');
    
    if (role === 'owner') {
        document.body.classList.add('theme-owner');
    } else {
        document.body.classList.remove('theme-owner');
    }
}

let allHostels = [];

// Render student dashboard list cards
async function renderHostels(filters = {}) {
    const hostelList = document.getElementById('hostelList');
    if (!hostelList) return;

    try {
        if (allHostels.length === 0) {
            try {
                const response = await fetch('http://localhost:5000/api/hostels');
                const data = await response.json();
                if (Array.isArray(data) && data.length > 0) {
                    allHostels = data;
                }
            } catch (err) {
                console.error("Backend fetch failed, using mock data", err);
            }

            // Fallback to mock data if empty
            if (allHostels.length === 0) {
                allHostels = mockHostels.map(h => ({
                    id: h.id,
                    hostel_name: h.name,
                    address: h.address || h.location,
                    monthly_rent: h.price,
                    type: h.type,
                    hostel_photos: h.image,
                    distance: h.location,
                    rating: h.rating,
                    ac_availability: h.ac ? 'ac' : 'non-ac',
                    bed_type: h.beds || 'Single',
                    facilities_and_amenities: JSON.stringify(h.features || [])
                }));
            }
        }

        console.log("All Hostels:", allHostels);

        // Apply filters
        let filteredHostels = allHostels.filter(hostel => {
            // A. Text Search (College / Location / Name)
            if (filters.searchTerm) {
                const search = filters.searchTerm.toLowerCase();
                const nameMatch = hostel.hostel_name && hostel.hostel_name.toLowerCase().includes(search);
                const locMatch = hostel.address && hostel.address.toLowerCase().includes(search);
                if (!nameMatch && !locMatch) return false;
            }

            // B. Hostel Gender Type (Boys / Girls / Co-ed)
            if (filters.hType && filters.hType !== 'all') {
                if (hostel.type && hostel.type.toLowerCase() !== filters.hType.toLowerCase()) return false;
            }

            // C. Max Budget Limit Pricing Filter
            if (filters.maxPrice) {
                const numericPrice = parseInt((hostel.monthly_rent || '').replace(/[^0-9]/g, '')) || 0;
                if (numericPrice > filters.maxPrice) return false;
            }

            // D. AC / Non-AC Requirements
            if (filters.ac && filters.ac !== 'all') {
                const wantsAC = (filters.ac === 'ac');
                const isHostelAC = (hostel.ac_availability === 'ac');
                if (wantsAC !== isHostelAC) return false;
            }

            // E. Sharing Bed Arrangement Type (Single / Double / Mixed)
            if (filters.bed && filters.bed !== 'all') {
                const bedType = hostel.bed_type ? hostel.bed_type.toLowerCase() : '';
                if (bedType !== filters.bed.toLowerCase()) return false;
            }

            // F. Distance from Campus
            if (filters.maxDistance && filters.maxDistance !== 'all') {
                const maxDist = parseFloat(filters.maxDistance);
                const distanceStr = hostel.distance || hostel.address || "1.2 km from Campus";
                const match = distanceStr.match(/([\d.]+)\s*km/i);
                const distanceVal = match ? parseFloat(match[1]) : 1.2;
                if (distanceVal > maxDist) return false;
            }

            // G. Minimum Rating Filter
            if (filters.minRating) {
                const rating = parseFloat(hostel.rating) || 4.5;
                if (rating < parseFloat(filters.minRating)) return false;
            }

            // H. Amenities Checklist Filter
            if (filters.amenities && filters.amenities.length > 0) {
                let hostelFeatures = [];
                try {
                    hostelFeatures = JSON.parse(hostel.facilities_and_amenities || '[]');
                } catch (e) {
                    console.error("Failed to parse amenities", e);
                }
                const matchesAllAmenities = filters.amenities.every(amenity => 
                    hostelFeatures.some(f => f.toLowerCase() === amenity.toLowerCase())
                );
                if (!matchesAllAmenities) return false;
            }

            return true;
        });

        console.log("Filtered Hostels:", filteredHostels);

        hostelList.innerHTML = '';
        const resultsCountBadge = document.getElementById('resultsCountBadge');
        if (resultsCountBadge) {
            resultsCountBadge.textContent = `${filteredHostels.length} Results Found`;
        }

        if (filteredHostels.length === 0) {
            hostelList.innerHTML = `<p style="grid-column: 1/-1; text-align: center; color: var(--text-muted); margin-top: 2rem; font-weight: 500;">No Hostels Found</p>`;
        } else {
            const cardsHtml = filteredHostels.map(hostel => {
                const displayImage = hostel.hostel_photos || "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?w=800";
                const distance = hostel.distance || "1.2 km from Campus";
                const rating = hostel.rating || "4.5";

                return `
                    <div class="hostel-card animate-slide-up" onclick="viewHostel(${hostel.id})" style="cursor: pointer;">
                        <div class="hostel-image-wrapper" style="position: relative;">
                            <img src="${displayImage}" alt="${hostel.hostel_name}" class="hostel-image" style="width:100%; height:200px; object-fit:cover;">
                            <span class="badge" style="position: absolute; top: 10px; right: 10px; background: rgba(255,255,255,0.9); padding: 4px 8px; border-radius: 4px; font-size: 0.8rem; font-weight: bold; color: var(--primary);">${hostel.type || 'Hostel'}</span>
                        </div>
                        <div class="hostel-card-content" style="padding: 1rem;">
                            <div style="display: flex; justify-content: space-between; align-items: start; margin-bottom: 0.5rem;">
                                <h3 style="margin: 0; font-size: 1.1rem; flex: 1;">${hostel.hostel_name}</h3>
                                <div style="display: flex; align-items: center; gap: 4px; font-size: 0.875rem; font-weight: 600; color: #fbbf24;">
                                    ★ ${rating}
                                </div>
                            </div>
                            <p style="color: var(--text-muted); font-size: 0.875rem; margin-bottom: 0.5rem;">📍 ${hostel.address}</p>
                            <p style="color: var(--text-muted); font-size: 0.8rem; margin-bottom: 1rem;">🚶 ${distance}</p>
                            <div style="display: flex; justify-content: space-between; align-items: center; border-top: 1px solid var(--border); padding-top: 0.75rem;">
                                <div class="price" style="font-weight:700; color:var(--primary); font-size: 1.1rem;">${hostel.monthly_rent}</div>
                                <button class="btn btn-primary" style="padding: 0.4rem 1rem; font-size: 0.85rem;">View Details</button>
                            </div>
                        </div>
                    </div>
                `;
            }).join('');
            
            hostelList.innerHTML = cardsHtml;
        }

        if (typeof addHostelMarkers === 'function') {
            addHostelMarkers(filteredHostels);
        }

        if (Object.keys(filters).length > 0) {
            document.querySelector('.map-and-results-container')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    } catch (error) {
        console.error("Failed to load hostels:", error);
    }
}

function applyAdvancedFilters() {
    const filter = { 
        searchTerm: document.getElementById('searchCollege')?.value || '',
        hType: document.querySelector('input[name="hType"]:checked')?.value || 'all',
        maxPrice: document.getElementById('priceRange') ? parseInt(document.getElementById('priceRange').value) : null,
        ac: document.getElementById('acFilter')?.value || 'all',
        bed: document.getElementById('bedFilter')?.value || 'all',
        maxDistance: document.getElementById('distanceFilter')?.value || 'all',
        minRating: document.getElementById('ratingFilter') ? parseInt(document.getElementById('ratingFilter').value) : 1,
        amenities: Array.from(document.querySelectorAll('.amenity-cb:checked')).map(cb => cb.value)
    };
    
    renderHostels(filter);
}

function resetFilters() {
    if (document.getElementById('searchCollege')) document.getElementById('searchCollege').value = '';
    if (document.querySelector('input[name="hType"][value="all"]')) {
        document.querySelector('input[name="hType"][value="all"]').checked = true;
    }
    if (document.getElementById('priceRange')) {
        document.getElementById('priceRange').value = 25000;
        document.getElementById('priceVal').innerText = 'Up to ₹25,000';
    }
    if (document.getElementById('acFilter')) document.getElementById('acFilter').value = 'all';
    if (document.getElementById('bedFilter')) document.getElementById('bedFilter').value = 'all';
    if (document.getElementById('distanceFilter')) document.getElementById('distanceFilter').value = 'all';
    if (document.getElementById('ratingFilter')) {
        document.getElementById('ratingFilter').value = 1;
        document.getElementById('ratingVal').innerText = 'All';
    }
    document.querySelectorAll('.amenity-cb').forEach(cb => cb.checked = false);
    
    renderHostels();
}

function viewHostel(id) {
    localStorage.setItem('selectedHostelId', id);
    window.location.href = 'hostel-detail.html';
}

// FIXED: This runs on the detail page to fetch the single hostel data from the backend
async function renderHostelDetails() {
    const selectedId = localStorage.getItem('selectedHostelId');
    if (!selectedId) return;

    try {
        const response = await fetch(`http://localhost:5000/api/hostels/${selectedId}`);
        const hostel = await response.json();

        if (hostel) {
            setupDocumentButton(hostel);
            if (typeof initDetailMap === 'function') {
                initDetailMap(hostel);
            }
        }
    } catch (error) {
        console.error("Error rendering detailed view info:", error);
    }
}

let editingHostelId = null;

// Add Hostel (From Owner Dashboard Form)
async function handleAddHostel(e) {
    e.preventDefault();

    const imgInput = document.getElementById('hImages');
    const docInput = document.getElementById('hDocs');

    if (!imgInput || imgInput.files.length === 0) {
        if (!editingHostelId) {
            alert("Please select a main hostel photo!");
            return;
        }
    }

    const formData = new FormData();
    formData.append('hostel_name', document.getElementById('hName')?.value || 'New Hostel');
    formData.append('address', document.getElementById('hAddress')?.value || 'Campus Road');
    formData.append('monthly_rent', "₹" + (document.getElementById('hPrice')?.value || '8000')); 
    formData.append('type', document.getElementById('hType')?.value || 'Boys');
    formData.append('bed_type', document.getElementById('hBeds')?.value || 'Single');
    formData.append('security_deposit', document.getElementById('hDeposit')?.value || '5000');
    formData.append('ac_availability', document.getElementById('hAc')?.value || 'non-ac');
    formData.append('security_info', document.getElementById('hSecurity')?.value || 'Guards');
    formData.append('staff_gender', document.getElementById('hStaff')?.value || 'Male');
    formData.append('mess_quality_and_type', document.getElementById('hMess')?.value || 'Good');
    formData.append('curfew_timings', document.getElementById('hTimings')?.value || 'Flexible');

    const features = Array.from(document.querySelectorAll('input[name="hFeature"]:checked')).map(cb => cb.value);
    formData.append('facilities_and_amenities', JSON.stringify(features));

    // Send the owner's username to link the hostel
    const currentUserStr = localStorage.getItem('currentUser');
    if (currentUserStr) {
        const user = JSON.parse(currentUserStr);
        formData.append('owner_name', user.username || user.name);
    }

    if (imgInput && imgInput.files.length > 0) {
        formData.append('hImage', imgInput.files[0]);
    }

    if (docInput && docInput.files.length > 0) {
        formData.append('hDoc', docInput.files[0]);
    }

    try {
        const url = editingHostelId ? `http://localhost:5000/api/hostels/${editingHostelId}` : 'http://localhost:5000/api/hostels';
        const method = editingHostelId ? 'PUT' : 'POST';
        
        const response = await fetch(url, {
            method: method,
            body: formData
        });
        const result = await response.json();

        if (result.success) {
            alert(editingHostelId ? 'Hostel updated successfully!' : 'Hostel and verification papers registered successfully!');
            e.target.reset();
            document.querySelector('#addHostelForm button[type="submit"]').textContent = 'Publish Detailed Listing';
            editingHostelId = null;
            switchOwnerTab('listings');
        } else {
            alert('Server Error: ' + result.message);
        }
    } catch (error) {
        console.error("Upload failure:", error);
    }
}

// Update file upload UI tags
document.getElementById('hImages')?.addEventListener('change', function() {
    const status = document.getElementById('imageStatus');
    if (status && this.files.length > 0) status.textContent = "✅ Image Selected";
});

document.getElementById('hDocs')?.addEventListener('change', function() {
    const status = document.getElementById('docStatus');
    if (status && this.files.length > 0) status.textContent = "✅ Document Selected";
});

function switchOwnerTab(tabId) {
    document.querySelectorAll('.owner-tab').forEach(t => t.classList.remove('active'));
    document.querySelectorAll('.tab-content').forEach(t => t.classList.remove('active'));
    
    document.querySelector(`.owner-tab[onclick="switchOwnerTab('${tabId}')"]`)?.classList.add('active');
    document.getElementById(`tab-${tabId}`)?.classList.add('active');
    
    if (tabId === 'listings') renderOwnerListings();
}

async function renderOwnerListings() {
    const container = document.getElementById('ownerListings');
    if (!container) return;
    
    container.innerHTML = "<p>Loading listings...</p>";
    try {
        let url = 'http://localhost:5000/api/hostels';
        const currentUserStr = localStorage.getItem('currentUser');
        if (currentUserStr) {
            const user = JSON.parse(currentUserStr);
            url += `?owner_name=${user.username || user.name}`;
        }
        
        const response = await fetch(url);
        const hostels = await response.json();

        container.innerHTML = hostels.map(h => `
            <div class="inventory-card">
                <h3>${h.hostel_name}</h3>
                <p>${h.address}</p>
                <div style="margin-top: 1rem; display: flex; gap: 0.5rem;">
                    <button class="btn btn-primary" onclick="editHostel(${h.id})" style="padding: 0.5rem 1rem;">Edit</button>
                    <button class="btn btn-outline" onclick="deleteHostel(${h.id})" style="padding: 0.5rem 1rem; border-color: red; color: red;">Delete</button>
                </div>
            </div>
        `).join('');
    } catch (e) {
        container.innerHTML = "<p>Error pulling listings.</p>";
    }
}

async function deleteHostel(id) {
    if (!confirm("Are you sure you want to delete this listing?")) return;
    try {
        const res = await fetch(`http://localhost:5000/api/hostels/${id}`, { method: 'DELETE' });
        const result = await res.json();
        if (result.success) {
            renderOwnerListings();
        } else {
            alert("Error deleting: " + result.message);
        }
    } catch (e) {
        console.error(e);
        alert("Network error.");
    }
}

async function editHostel(id) {
    try {
        const res = await fetch(`http://localhost:5000/api/hostels/${id}`);
        const hostel = await res.json();
        if (!hostel) return;

        editingHostelId = id;
        document.getElementById('hName').value = hostel.hostel_name || '';
        document.getElementById('hAddress').value = hostel.address || '';
        document.getElementById('hPrice').value = hostel.monthly_rent ? hostel.monthly_rent.replace('₹', '') : '';
        document.getElementById('hType').value = hostel.type || 'Boys';
        document.getElementById('hBeds').value = hostel.bed_type || 'Single';
        
        document.getElementById('hDeposit').value = hostel.security_deposit || '';
        document.getElementById('hAc').value = hostel.ac_availability || 'ac';
        document.getElementById('hSecurity').value = hostel.security_info || '';
        document.getElementById('hStaff').value = hostel.staff_gender || 'Male';
        document.getElementById('hMess').value = hostel.mess_quality_and_type || '';
        document.getElementById('hTimings').value = hostel.curfew_timings || '';
        
        try {
            const features = JSON.parse(hostel.facilities_and_amenities || '[]');
            document.querySelectorAll('input[name="hFeature"]').forEach(cb => {
                cb.checked = features.includes(cb.value);
            });
        } catch (e) {}

        document.querySelector('#addHostelForm button[type="submit"]').textContent = 'Update Listing';
        switchOwnerTab('add');
    } catch (e) {
        console.error(e);
        alert("Error fetching hostel details.");
    }
}

// FIXED: Links the "View Verified/Approved Document" button to open the file link in a new tab
function setupDocumentButton(hostelObject) {
    const docBtn = Array.from(document.querySelectorAll('button, a')).find(btn => 
        btn.textContent.includes('Approved') || btn.textContent.includes('Verified') || btn.textContent.includes('Document')
    );
    
    if (!docBtn) {
        console.log("Could not find the document view button on the page.");
        return;
    }

    docBtn.onclick = (e) => {
        e.preventDefault();
        if (hostelObject && hostelObject.verification_documents) {
            window.open(hostelObject.verification_documents, '_blank');
        } else {
            alert("No verification document is available for this hostel layout.");
        }
    };
}

function handleLogout(e) {
    if (e) e.preventDefault();
    
    // 1. Clear authentication tokens and user data
    localStorage.removeItem('token');
    localStorage.removeItem('currentUser');
    localStorage.removeItem('selectedHostelId'); // Clear active states
    
    alert("Logged out successfully!");
    
    // 2. Redirect back to your main login/index page
    window.location.href = 'index.html'; 
}

// ===================================================
// OWNER MESSAGING CORE (RESTORED CHAT FUNCTIONS)
// ===================================================
let currentActiveMsg = null;

function renderMessages() {
     const listContainer = document.getElementById('msgList');
     if (!listContainer) return;
     
     const msgs = JSON.parse(localStorage.getItem('ownerMessages')) || [];
     
     listContainer.innerHTML = msgs.map(m => `
         <div class="msg-item ${m.status === 'unread' ? 'unread' : ''} ${currentActiveMsg === m.id ? 'active' : ''}" onclick="viewMessage(${m.id})">
             <div style="display: flex; justify-content: space-between; margin-bottom: 0.25rem;">
                 <h4>${m.studentName}</h4>
                 <span style="font-size: 0.75rem; color: var(--text-muted);">${m.date}</span>
             </div>
             <p>${m.text}</p>
         </div>
     `).join('');
     
     // Auto-select the first message if none is active yet
     if (msgs.length > 0 && !currentActiveMsg) {
         viewMessage(msgs[0].id);
     }
}

function viewMessage(id) {
     currentActiveMsg = id;
     const msgs = JSON.parse(localStorage.getItem('ownerMessages')) || [];
     const msg = msgs.find(m => m.id === id);
     if (!msg) return;
     
     // Mark message as read
     if (msg.status === 'unread') {
         msg.status = 'read';
         localStorage.setItem('ownerMessages', JSON.stringify(msgs));
         renderMessages(); // Refresh side list to remove bold status
     } else {
         renderMessages(); // Update active highlights
     }
     
     const detailContainer = document.getElementById('msgDetail');
     if (!detailContainer) return;
     
     // Initial incoming student inquiry bubble
     let historyHtml = `
         <div class="chat-bubble received">
             <strong style="display:block; font-size: 0.8rem; margin-bottom: 0.25rem;">${msg.studentName}</strong>
             ${msg.text}
         </div>
     `;
     
     // Append existing replies loop
     if (msg.replies) {
         historyHtml += msg.replies.map(r => `
             <div class="chat-bubble ${r.sender === 'owner' ? 'sent' : 'received'}">
                 ${r.text}
             </div>
         `).join('');
     }

     // Inject the entire message layout setup view window frame
     detailContainer.innerHTML = `
         <div style="border-bottom: 1px solid var(--border); padding-bottom: 1rem; margin-bottom: 1rem;">
             <h3 style="margin:0;">Conversation with ${msg.studentName}</h3>
             <p style="font-size: 0.875rem; color: var(--text-muted); margin:0;">Inquiry about your listing</p>
         </div>
         <div class="chat-history" id="chatHistory">
             ${historyHtml}
         </div>
         <div class="reply-box">
             <input type="text" id="replyInput" class="form-control" placeholder="Type your reply..." onkeypress="if(event.key === 'Enter') replyMessage(${msg.id})">
             <button class="btn btn-primary" onclick="replyMessage(${msg.id})">Send</button>
         </div>
     `;
     
     // Auto-scroll screen window down to show latest message bubbles
     const chatHist = document.getElementById('chatHistory');
     if (chatHist) chatHist.scrollTop = chatHist.scrollHeight;
}

function replyMessage(id) {
     const input = document.getElementById('replyInput');
     if (!input) return;
     const text = input.value.trim();
     if (!text) return;
     
     const msgs = JSON.parse(localStorage.getItem('ownerMessages')) || [];
     const index = msgs.findIndex(m => m.id === id);
     
     if (index > -1) {
         if (!msgs[index].replies) msgs[index].replies = [];
         // Restore original structure mapping expectations
         msgs[index].replies.push({ sender: 'owner', text: text });
         localStorage.setItem('ownerMessages', JSON.stringify(msgs));
         viewMessage(id); // Instantly refresh conversation pane view state
     }
}

// Page Inits
document.addEventListener('DOMContentLoaded', () => {
    
    document.getElementById('logoutBtn')?.addEventListener('click', handleLogout);

    // This catches any button/link that says "Logout" or "Sign Out" just in case you didn't use an ID
    Array.from(document.querySelectorAll('button, a')).forEach(element => {
        if (element.textContent.toLowerCase().includes('logout') || element.textContent.toLowerCase().includes('sign out')) {
            element.addEventListener('click', handleLogout);
        }
    });

    if (document.getElementById('loginForm')) {
        document.getElementById('loginForm').addEventListener('submit', handleLogin);
    }

    if (document.getElementById('hostelList')) {
        renderHostels();
        
        // Track filter changes across all components seamlessly for real-time responsiveness
        document.getElementById('searchCollege')?.addEventListener('input', applyAdvancedFilters);
        document.querySelectorAll('input[name="hType"]').forEach(radio => radio.addEventListener('change', applyAdvancedFilters));
        document.getElementById('priceRange')?.addEventListener('input', applyAdvancedFilters);
        document.getElementById('acFilter')?.addEventListener('change', applyAdvancedFilters);
        document.getElementById('bedFilter')?.addEventListener('change', applyAdvancedFilters);
        document.getElementById('distanceFilter')?.addEventListener('change', applyAdvancedFilters);
        document.getElementById('ratingFilter')?.addEventListener('change', applyAdvancedFilters);
        document.querySelectorAll('.amenity-cb').forEach(cb => cb.addEventListener('change', applyAdvancedFilters));
    }

    if (document.getElementById('detailInfo') || window.location.pathname.includes('hostel-detail')) {
        renderHostelDetails();
    }

    if (document.getElementById('addHostelForm')) {
        document.getElementById('addHostelForm').addEventListener('submit', handleAddHostel);
    }
    
    if (document.getElementById('ownerListings')) {
        switchOwnerTab('listings');
    }

    if (document.getElementById('msgList')) {
    renderMessages();
}
});
