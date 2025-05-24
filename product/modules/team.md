# Team Management Module Requirements

## 1. Team Structure
- Teams must support multiple activities
- Teams must maintain a list of team members
- Teams must track activity history

## 2. Activity Management

### 2.1 Activity Creation
- Users must be able to propose new activities with:
  - Mandatory fields:
    - Place/location
    - Date (single option)
    - Attendance list
    - Deadline for auto-approval/rejection
    - Start date and time
    - End date and time
  - Optional fields:
    - Required materials/equipment
    
### 2.2 Activity Updates
- Users must be able to modify existing activities
- Each modification should be:
  - Tracked as a new proposition
  - Visible to all team members
  - Maintain history of changes
- System must maintain version control of activity modifications

### 2.3 Role Assignment
- Users must be able to:
  - Self-assign multiple roles within an activity
  - Define custom role types (e.g., "material provider", "transportation helper")
  - Update or remove their assigned roles
- System must track:
  - All role assignments
  - Role responsibilities
  - Role status

## 3. Media Management

### 3.1 Photo and Video Upload
- Users must be able to:
  - Upload multiple photos to activities
  - Upload multiple videos to activities
  - Associate media with specific activities
- System must:
  - Support common image formats
  - Support common video formats
  - Manage media storage
  - Ensure proper media organization per activity

### 3.2 Activity Summary
- Users must be able to:
  - Request comprehensive activity summaries
  - View all uploaded photos and videos
  - Access chronological activity history
- Summary should include:
  - Activity details
  - Participant list
  - Role assignments
  - All uploaded media
  - Timeline of events

## 4. Communication Features

### 4.1 Comments
- Users must be able to:
  - Add comments on activities
  - View all comments
  - Receive notifications of new comments
- Comment system should:
  - Track comment timestamps
  - Identify comment authors
  - Support basic text formatting
  - Allow for comment moderation if needed

## 5. System Requirements

### 5.1 User Permissions
- All users must have equal rights to:
  - Propose activities
  - Update activities
  - Upload media
  - Make comments
  - View summaries
  - Assign themselves roles

### 5.2 Data Management
- System must:
  - Maintain data consistency
  - Provide backup mechanisms
  - Ensure data privacy
  - Handle concurrent user actions
  - Manage storage efficiently for media uploads

### 5.3 User Interface
- Interface must provide:
  - Activity creation forms
  - Media upload capabilities
  - Comment sections
  - Summary view
  - Role management interface
  - Activity modification history

## 6. Non-Functional Requirements

### 6.1 Performance
- Media upload and download should be optimized
- Activity summaries should generate quickly
- System should handle multiple concurrent users

### 6.2 Scalability
- System should scale to handle:
  - Growing number of activities
  - Increasing media uploads
  - Expanding user base
  - More comments and interactions

### 6.3 Security
- Secure user authentication
- Protected media storage
- Safe data transmission
- Regular security updates

### 6.4 Usability
- Intuitive activity creation process
- Easy media upload interface
- Clear role assignment mechanism
- Accessible comment system
- User-friendly summary generation

---
Original Requirements Reference:
- A team has one or many activities
- A user can propose any activity with place, materials (optional), date (one option), attendance list, deadline to autoapprove or reject, start date and end date
- Any user can update an activity and the changes will appear as different propositions to the same activity
- A user can assign themselves multiple roles for the activity such as "bring material x", "help other teammates to offer them a travel"
- Any user can upload photos and videos to the activity
- Any user can ask for a summary of the entire activity with the photos and videos uploaded
- Any user can make comments on it