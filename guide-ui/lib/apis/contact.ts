import { ref, push, serverTimestamp } from "firebase/database";
import { db } from "@/lib/config/firebase";

export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
  timestamp?: object;
  status?: "new" | "read" | "responded";
}

export const submitContactForm = async (
  formData: ContactFormData
): Promise<{ success: boolean; message: string }> => {
  try {
    // Reference to the 'contact_queries' node in Firebase
    const contactRef = ref(db, "contact_queries");

    // Add timestamp and initial status to the form data
    const contactData = {
      ...formData,
      timestamp: serverTimestamp(),
      status: "new" as const,
    };

    // Push the new contact query to Firebase
    const newContactRef = await push(contactRef, contactData);

    if (newContactRef.key) {
      return {
        success: true,
        message: "Your message has been sent successfully!",
      };
    } else {
      throw new Error("Failed to submit contact form");
    }
  } catch (error) {
    console.error("Error submitting contact form:", error);
    return {
      success: false,
      message:
        error instanceof Error
          ? error.message
          : "Failed to submit contact form",
    };
  }
};
